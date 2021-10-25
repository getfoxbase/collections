import Documents from './Documents'

export default class DocumentsCached extends Documents {
    constructor(name, configuration) {
        super(name, configuration)

        this.cache = []
        this.loadCache()
    }

    async loadCache() {
        this.cache = await this.driver.find(this.name, {})
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