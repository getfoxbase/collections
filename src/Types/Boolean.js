import Type from '../Type'

export default class BooleanType extends Type {
    static formatIn(value, field) {
        return !!value
    }

    static formatOut(value, field) {
        return value
    }
}