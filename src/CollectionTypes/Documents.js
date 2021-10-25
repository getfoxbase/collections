import Collection from '../Collection'

export default class Documents extends Collection {
    constructor(name, configuration) {
        super(name, configuration)
    }

    async formatIn(input) {
        let ret = {}

        for (const [key, field] of (this.fields ?? {}).entries()) {
            let value = input[key] ?? field.default ?? null

            if (field.isArray && value instanceof Array === false) {
                value = [value].filter(a => a !== null)
            }

            if (field.isArray) {
                let newVal = []
                for (let val of value) {
                    val = await field.type.formatIn(val, field)
                    if (val !== null)
                        newVal.push(val)
                }
                value = newVal
            } else {
                value = await field.type.formatIn(value, field)

                if (value === null && !field.nullable) {
                    throw new Error(`Missing value for "${key}" in the "${this.name}" collection.`)
                }
            }

            ret[key] = value
        }

        return ret
    }

    async formatOut(doc) {
        let ret = {
            id: this.driver.getPrimaryKey(doc),
        }

        for (const [key, field] of (this.fields ?? {}).entries()) {
            let value = doc[key] ?? null

            if (field.isArray && value instanceof Array === false) {
                value = [value].filter(a => a !== null)
            }

            if (field.isArray) {
                let newVal = []
                for (let val of value) {
                    val = await field.type.formatOut(val, field)
                    if (val !== null)
                        newVal.push(val)
                }
                value = newVal
            } else {
                value = await field.type.formatOut(value, field)
            }

            ret[key] = value
        }

        return ret
    }
}