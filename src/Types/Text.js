import Type from '../Type'

export default class TextType extends Type {
    static formatIn(value) {
        return value + ''
    }

    static formatOut(value) {
        return value
    }
}