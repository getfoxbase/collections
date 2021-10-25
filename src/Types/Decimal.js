import Type from '../Type'
import Float from './Float'

export default class DecimalType extends Type {
    static async formatIn(value, field) {
        return Float.formatIn(value).toFixed(2)
    }

    static formatOut(value, field) {
        return value
    }
}