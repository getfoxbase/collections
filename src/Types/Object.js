import Type from '../Type'

export default class ObjectType extends Type {
    static formatIn(value, field, collection) {
        return collection.formatIn(value, field.fields ?? {})
    }

    static formatOut(value, field, collection) {
        return collection.formatOut(value, field.fields ?? {}, false)
    }
}