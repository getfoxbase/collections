import Type from '../Type'

export default class FloatType extends Type {
    static formatIn(value) {
        return parseFloat(`${value}`.replace(/\s/g, '').replace(/,/g, '.'))
    }

    static formatOut(value) {
        return value
    }
}