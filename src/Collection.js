import Model from './Model'

const collections = {}

/**
 * Handles a collection.
 */
export default class Collection {
    /**
     * Creates a collection object, according to the configuration.
     * 
     * @param {string} name Collection name
     * @param {object} opts Options
     */
    constructor(name, opts) {
        this.name = ((name ?? '') + '').trim()
        this.fields = opts.fields ?? {}
        this.driver = opts.driver ?? null
        this.cache = []

        if (this.name.length === 0) {
            throw new Error('Missing collection name.')
        }

        if (Object.keys(this.fields).length === 0) {
            throw new Error('Missing fields.')
        }

        if (this.driver === null) {
            throw new Error('Missing driver.')
        }
    }

    /**
     * Creates a collection, and caches the configuration.
     * 
     * @param {string} name Collection name
     * @param {object} opts Options
     */
    static create(name, opts, type) {
        collections[name] = new type(name, opts)

        return collections[name]
    }

    /**
     * Retrieves an existing collection, or returns null.
     * 
     * @param {string} name Collection name
     * @returns Collection
     */
    static get(name) {
        return collections[name] ?? null
    }

    createDocument(initialValues = {}) {
        return new Model(this, initialValues)
    }

    async formatIn(input, fields = null) {
        throw new Error('Method formatIn not implemented on current collection type.')
    }

    async formatOut(doc, fields = null, withId = true) {
        throw new Error('Method formatOut not implemented on current collection type.')
    }

    async findById(id) {
        throw new Error('Method findById not implemented on current collection type.')
    }

    async find(query = {}) {
        throw new Error('Method find not implemented on current collection type.')
    }

    async updateById(id, data) {
        throw new Error('Method updateById not implemented on current collection type.')
    }

    async deleteById(id) {
        throw new Error('Method deleteById not implemented on current collection type.')
    }

    async create(data) {
        throw new Error('Method create not implemented on current collection type.')
    }
}