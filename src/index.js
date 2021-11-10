import Collection from './Collection'
import Type from './Type'
import Driver from './Driver'
import Types from './Types'
import Drivers from './Drivers'
import DocumentsLive from "./CollectionTypes/DocumentsLive"
import DocumentsCached from "./CollectionTypes/DocumentsCached"

function createCollection(name, opts) {
    const classes = {
        DocumentsLive,
        DocumentsCached
    }
    const className = opts.cached ? 'DocumentsCached' : 'DocumentsLive'
    if (classes[className] === undefined) {
        throw new Error(`Collection type "${className}" does not exists.`)
    }

    return Collection.create(name, opts, classes[className])
}

export { Collection, Type, Driver, Types, Drivers, createCollection }