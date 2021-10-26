import Driver from '../Driver'

export default class MongoDB extends Driver {
    constructor(opts) {
        super(opts)
    }

    async find(collectionName, query) {
        throw new Error('find method is not implemented on current driver.')
    }

    async findOne(collectionName, query) {
        throw new Error('findOne method is not implemented on current driver.')
    }

    async insert(collectionName, doc) {
        throw new Error('insert method is not implemented on current driver.')
    }

    async update(collectionName, query, update) {
        throw new Error('update method is not implemented on current driver.')
    }

    async delete(collectionName, query) {
        throw new Error('delete method is not implemented on current driver.')
    }

    getPrimaryKey(doc) {
        if (doc._id === undefined)
            return null
        return doc._id.toHexString()
    }

    formatPrimaryKey(id) {
        return ObjectID.fromHexString(id)
    }

    getPrimaryKeyName() {
        return '_id'
    }
}