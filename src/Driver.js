export default class Driver {
    constructor(opts) {
        this.opts = opts
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
        throw new Error('getPrimaryKey method is not implemented on current driver.')
    }

    formatPrimaryKey(id) {
        throw new Error('formatPrimaryKey method is not implemented on current driver.')
    }

    getPrimaryKeyName() {
        throw new Error('getPrimaryKeyName method is not implemented on current driver.')
    }
}