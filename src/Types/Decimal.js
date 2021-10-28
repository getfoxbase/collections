import Type from '../Type'
import Float from './Float'

export default class DecimalType extends Type {
    static async formatIn(value) {
        return Float.formatIn(value).toFixed(2)
    }

    static formatOut(value) {
        return value
    }
}