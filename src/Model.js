import sift from 'sift'
import Dot from './Tools/Dot'

export default class Model {
    constructor(collection, data) {
        this.collection = collection
        this.driver = collection.driver
        this.data = data
        this.id = data.id ?? null
    }

    getCollection() {
        return this.collection
    }

    get(key, defaultValue = null) {
        return Dot.get(this.data, key) ?? defaultValue
    }

    set(key, value) {
        Dot.set(this.data, key, value)
        return this
    }

    push(key, value) {
        const arr = this.get(key, [])
        if (arr instanceof Array === false) {
            arr = [arr].filter(a => a !== null)
        }
        arr.push(value)
        this.set(key, arr)
        return this
    }

    setMany(o) {
        for (let key in o)
            Dot.set(this.data, key, o[key])
        return this
    }

    matches(query = {}) {
        return sift(query)(this.data)
    }

    export() {
        return this.data
    }

    async save() {
        if (this.id !== null) { // Update
            const query = {}
            query[this.driver.getPrimaryKeyName()] = this.driver.formatPrimaryKey(this.id)
            const ret = await this.driver.update(
                this.collection.name,
                query,
                await this.collection.formatIn(this.data)
            )
        } else { // Insert
            const ret = await this.driver.insert(
                this.collection.name,
                await this.collection.formatIn(this.data)
            )
            this.id = this.driver.getPrimaryKey(ret)
            this.data.id = this.id

            this.collection.addToCache(this)
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
            this.collection.name,
            query
        )

        collection.removeFromCache(this.id)
        
        this.id = null
        return ret
    }
}