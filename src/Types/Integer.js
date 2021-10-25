import Type from '../Type'

export default class IntegerType extends Type {
    static formatIn(value, field) {
        return parseInt(`${value}`.replace(/\s/g, '').replace(/,/g, '.'))
    }

    static formatOut(value, field) {
        return value
    }
}