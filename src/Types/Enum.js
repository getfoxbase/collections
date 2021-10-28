import Type from '../Type'

export default class EnumType extends Type {
    static formatIn(value, field) {
        if ((field.values ?? []).includes(value) === false) {
            value = field.default ?? null
        }

        return value
    }

    static formatOut(value) {
        return value
    }
}