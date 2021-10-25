import dayjs from 'dayjs'
import Type from '../Type'

export default class DateType extends Type {
    static formatIn(value, field) {
        return dayjs(value).toDate()
    }

    static formatOut(value, field) {
        return value
    }
}