import Model from '../Model'
import Documents from './Documents'

export default class DocumentsLive extends Documents {
    constructor(name, configuration) {
        super(name, configuration)
    }

    async findById(id) {
        const query = {}
        query[this.driver.getPrimaryKeyName()] = this.driver.formatPrimaryKey(id)
        
        const docData = await this.driver.findOne(this.name, query)
        if (!docData) {
            return null
        }

        return new Model(this, await this.formatOut(docData))
    }

    async find(query = {}) {
        const documents = await this.driver.find(this.name, query)
        const ret = []

        for (let doc of documents) {
            ret.push(new Model(this, await this.formatOut(doc)))
        }
        
        return ret
    }

    async updateById(id, data) {
        const doc = await this.findById(id)
        if (doc === null) {
            return false
        }

        doc.setMany(data)
        await doc.save()

        return true
    }

    async deleteById(id) {
        const doc = await this.findById(id)
        if (doc === null) {
            return false
        }

        await doc.delete()
        return true
    }
}