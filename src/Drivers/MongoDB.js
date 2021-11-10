import { MongoClient, ObjectId } from 'mongodb'
import Driver from '../Driver'

export default class MongoDB extends Driver {
    constructor(opts) {
        super(opts)

        this.client = new MongoClient(opts.dsn, {
            keepAlive: true,
            appName: 'foxbase',
            ...(opts.options ?? {})
        })
        this.db = null
    }

    async init() {
        if (this.db !== null) {
            return
        }
        await this.client.connect()
        this.db = this.client.db(this.opts.db)
    }

    async destroy() {
        await this.client.close()
    }

    async find(collectionName, query) {
        await this.init()

        const cursor = this.db.collection(collectionName).find(query)
        return await cursor.toArray()
    }

    async findOne(collectionName, query) {
        await this.init()

        const doc = this.db.collection(collectionName).findOne(query)
        return doc ?? null
    }

    async insert(collectionName, doc) {
        await this.init()

        this.db.collection(collectionName).insertOne(doc)

        return doc
    }

    async update(collectionName, query, update) {
        await this.init()

        const ret = await this.db.collection(collectionName).updateMany(query, {
            $set: update
        })

        return ret.modifiedCount
    }

    async delete(collectionName, query) {
        await this.init()

        const ret = await this.db.collection(collectionName).deleteMany(query)

        return ret.deletedCount
    }

    getPrimaryKey(doc) {
        if (doc._id === undefined)
            return null
        return doc._id.toHexString()
    }

    formatPrimaryKey(id) {
        return ObjectId.createFromHexString(id)
    }

    getPrimaryKeyName() {
        return '_id'
    }
}