import Type from '../Type'

export default class IntegerType extends Type {
    static formatIn(value) {
        return parseInt(`${value}`.replace(/\s/g, '').replace(/,/g, '.'))
    }

    static formatOut(value) {
        return value
    }
}