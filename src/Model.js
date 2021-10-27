import Collection from "./Collection"

export default class Model {
    constructor(collectionName, data, driver) {
        this.driver = driver
        this.collectionName = collectionName
        this.data = data
        this.id = data.id ?? null
    }

    getCollection() {
        return Collection.get(this.collectionName)
    }

    get(key, defaultValue = null) {
        return this.data[key] ?? defaultValue
    }

    set(key, value) {
        this.data[key] = value
        return this
    }

    setMany(o) {
        for (let key in o)
            this.data[key] = o[key]
        return this
    }

    matches(query = {}, operator = 'AND') {
        const results = []
        
        for (let key in query) {
            let request = query[key]
            if (typeof request !== 'object') {
                request = {
                    $eq: request
                }
            }
            
            const condition = request[Object.keys(request)[0]] ?? '$eq'
            const requestedValue = JSON.stringify(request[condition] ?? {})
            const docValue = JSON.stringify(this.get(key, ''))
            
            switch (condition) {
                case '$eq':
                    results.push(requestedValue == docValue)
                    break
            }
        }

        switch ((operator + '').toLowerCase()) {
            case 'or':
                return results.findIndex(a => a) !== -1
            case 'and':
            default:
                return results.findIndex(a => !a) === -1
        }
    }

    async save() {
        const collection = Collection.get(this.collectionName)

        if (this.id !== null) { // Update
            const query = {}
            query[this.driver.getPrimaryKeyName()] = this.driver.formatPrimaryKey(this.id)
            const ret = await this.driver.update(
                this.collectionName,
                query,
                await collection.formatIn(this.data)
            )
        } else { // Insert
            const ret = await this.driver.insert(
                this.collectionName,
                await collection.formatIn(this.data)
            )
            this.id = this.driver.getPrimaryKey(ret)

            if (collection.cached)
                collection.addToCache(this)
        }
        
        return true
    }

    async delete() {
        if (this.id === null)
            return false
        
        const query = {}
        query[this.driver.getPrimaryKeyName()] = this.driver.formatPrimaryKey(this.id)

        const collection = this.getCollection()
        const ret = await this.driver.delete(
            this.collectionName,
            query
        )

        if (collection.cached)
            collection.removeFromCache(this.id)
        
        this.id = null
        return ret
    }
}