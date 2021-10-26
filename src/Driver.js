export default class Driver {
    constructor(opts) {
        this.opts = opts
    }

    async find(query) {
        throw new Error('find method is not implemented on current driver.')
    }

    async findOne(query) {
        throw new Error('findOne method is not implemented on current driver.')
    }

    async update(query, update) {
        throw new Error('update method is not implemented on current driver.')
    }

    async delete(query) {
        throw new Error('delete method is not implemented on current driver.')
    }

    getPrimaryKey(doc) {
        throw new Error('getPrimaryKey method is not implemented on current driver.')
    }
}