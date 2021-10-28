import dayjs from 'dayjs'
import Type from '../Type'

export default class DateType extends Type {
    static formatIn(value) {
        return dayjs(value).toDate()
    }

    static formatOut(value) {
        return value
    }
}