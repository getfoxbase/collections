import sift from 'sift'
import Dot from './Tools/Dot'
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
        return Dot.get(this.data, key) ?? defaultValue
    }

    set(key, value) {
        Dot.set(this.data, key, value)
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
            this.data.id = this.id

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

        collection.removeFromCache(this.id)
        
        this.id = null
        return ret
    }
}