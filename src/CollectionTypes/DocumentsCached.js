import Documents from './Documents'
import Model from '../Model'

export default class DocumentsCached extends Documents {
    constructor(name, configuration) {
        super(name, configuration)

        this.cached = true
        this.cache = []
        this.loadCache()
    }

    async loadCache() {
        const documents = await this.driver.find(this.name, {})
        this.cache = []
        for (let doc of documents) {
            this.cache.push(new Model(this.name, await this.formatOut(doc), this.driver))
        }
    }

    removeFromCache(id) {
        const idx = this.cache.findIndex(doc => doc.id == id)
        if (idx !== -1)
            this.cache.splice(idx, 1)
    }

    addToCache(doc) {
        this.cache.push(doc)
    }

    async findById(id) {
        
    }

    async findByTags(tags) {
        
    }

    async find(query) {
        
    }

    async updateById(id, data) {
        
    }

    async deleteById(id) {
        
    }

    async create(data) {
        
    }
}