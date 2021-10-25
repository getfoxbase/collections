import Type from '../Type'

export default class TextType extends Type {
    static formatIn(value, field) {
        return value + ''
    }

    static formatOut(value, field) {
        return value
    }
}