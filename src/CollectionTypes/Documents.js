import Collection from '../Collection'

export default class Documents extends Collection {
    constructor(name, configuration) {
        super(name, configuration)
    }

    formatIn(input) {
        let ret = {}

        for (const [key, field] of (this.fields ?? {}).entries()) {
            let value = input[key] ?? field.default ?? null

            if (field.isArray && value instanceof Array === false) {
                value = [value].filter(a => a !== null)
            }

            if (field.isArray) {
                value
                    .map(val => field.type.formatIn(val))
                    .filter(val => val !== null)
            } else {
                value = field.type.formatIn(value)

                if (value === null && !field.nullable) {
                    throw new Error(`Missing value for "${key}" in the "${this.name}" collection.`)
                }
            }

            ret[key] = value
        }

        return ret
    }

    formatOut(doc) {
        let ret = {
            id: this.driver.getPrimaryKey(doc),
        }

        for (const [key, field] of (this.fields ?? {}).entries()) {
            let value = doc[key] ?? null

            if (field.isArray && value instanceof Array === false) {
                value = [value].filter(a => a !== null)
            }

            if (field.isArray) {
                value
                    .map(val => field.type.formatOut(val))
                    .filter(val => val !== null)
            } else {
                value = field.type.formatOut(value)
            }

            ret[key] = value
        }

        return ret
    }
}