import Type from '../Type'
import Float from './Float'

export default class LatLngType extends Type {
    static formatIn(value, field) {
         if (typeof value === 'string') {
            value = value.split(',').map(v => Float.formatIn(v))
            value = {
                lat: value[0],
                lng: value[1]
            }
        }
        return value
    }

    static formatOut(value, field) {
        return value
    }
}