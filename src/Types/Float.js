import Type from '../Type'

export default class FloatType extends Type {
    static formatIn(value, field) {
        return parseFloat(`${value}`.replace(/\s/g, '').replace(/,/g, '.'))
    }

    static formatOut(value, field) {
        return value
    }
}