# @foxbase/collections

You want to fastly create a CRUD API ? *We got you covered.*

You want to manage MongoDB or even MySQL databases ? *No problem.*

You want some collections to be stored in-memory for blazing fast access and search ? *Easy peasy.*

This packages aims to help you create strong typed CRUD ORMs, map them with Express or Fastify, and deploy rapidly your app.

## Functionalities

- Manage collections from MongoDB or MySQL (easily extendable to give you the possibility to use the database of your choice)
- Documents can be stored in-memory, queried and managed, like documents stored and queried in database
- Schema is strongly typed (extendable too !). The current supported types are : 
    - Boolean
    - Date
    - Decimal
    - Enum
    - Float
    - Integer
    - LatLng
    - Object
    - Text
- Each field can be single-type or an array of types.

## Get started

### Install the package

```bash
npm i --save @foxbase/collections

or

yarn add @foxbase/collections
```

### Create a collection
```javascript
import { createCollection, Types, Drivers } from '@foxbase/collections'

const mongoConnection = new Drivers.MongoDB({
    dsn: '<Your MongoDB connection string>',
    db: '<Database to use>',
    options: {
        useNewUrlParser: true,
        useUnifiedTypology: true
    }
})

const poi = createCollection("poi", {
    cached: false,
    driver: mongoConnection,
    fields: {
        name: {
            type: Types.Text
        },
        position: {
            type: Types.LatLng
        },
        description: {
            type: Types.Text,
            nullable: true
        },
        attributes: {
            type: Types.Object,
            fields: {
                image: {
                    type: Types.Text,
                    nullable: true
                },
                opened: {
                    type: Types.Boolean,
                    default: true
                }
            }
        }
    }
})
```

### Create a document

```javascript
const newPoi = poi.createDocument({
    name: "My point of interest"
})
newPoi.setMany({
    position: '45.6168286,0.1072459',
    description: "Very interesting"
})
newPoi.set('attributes.image', 'https://example.com/image.png')
await newPoi.save()
console.log(newPoi.id) // 28792
console.log(newPoi.get('attributes.opened')) // true
```
### Find a document

```javascript
const onePoi = await poi.findById(28792)
const pois = await poi.find({
    description: {
        $ne: null
    },
    'attributes.opened': true
})
```
### Update a document

```javascript
onePoi.set('attributes.opened', false)
await onePoi.save()

// or

await poi.updateById(289792, {
    description: 'My new description'
})
```
### Delete a document

```javascript
await onePoi.delete()

// or 

await poi.deleteById(2786872)
```