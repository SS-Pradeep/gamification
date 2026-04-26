[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [shared/database/providers/mongo/MongoDatabase](../README.md) / MongoDatabase

# Class: MongoDatabase

Defined in: [shared/database/providers/mongo/MongoDatabase.ts:17](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/MongoDatabase.ts#L17)

MongoDatabase

## Implements

## Description

A service class for managing MongoDB connections and operations.

## Example

```ts
const mongoDatabase = new MongoDatabase('mongodb://localhost:27017', 'myDatabase');
```

## Template

## Implements

- [`IDatabase`](../../../../interfaces/IDatabase/interfaces/IDatabase.md)\<`Db`\>

## Constructors

### Constructor

> **new MongoDatabase**(`uri`, `dbName`): `MongoDatabase`

Defined in: [shared/database/providers/mongo/MongoDatabase.ts:26](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/MongoDatabase.ts#L26)

Creates an instance of MongoDatabase.

#### Parameters

##### uri

`string`

The MongoDB connection URI.

##### dbName

`string`

The name of the database to connect to.

#### Returns

`MongoDatabase`

## Properties

### database

> **database**: `Db`

Defined in: [shared/database/providers/mongo/MongoDatabase.ts:19](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/MongoDatabase.ts#L19)

#### Implementation of

[`IDatabase`](../../../../interfaces/IDatabase/interfaces/IDatabase.md).[`database`](../../../../interfaces/IDatabase/interfaces/IDatabase.md#database)

## Methods

### disconnect()

> **disconnect**(): `Promise`\<`Db`\>

Defined in: [shared/database/providers/mongo/MongoDatabase.ts:60](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/MongoDatabase.ts#L60)

Disconnects from the MongoDB database.

#### Returns

`Promise`\<`Db`\>

The disconnected database instance, or null if already disconnected.

#### Implementation of

[`IDatabase`](../../../../interfaces/IDatabase/interfaces/IDatabase.md).[`disconnect`](../../../../interfaces/IDatabase/interfaces/IDatabase.md#disconnect)

***

### getClient()

> **getClient**(): `Promise`\<`MongoClient`\>

Defined in: [shared/database/providers/mongo/MongoDatabase.ts:80](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/MongoDatabase.ts#L80)

Retrieves the client.

#### Returns

`Promise`\<`MongoClient`\>

The connected database instance.

***

### getCollection()

> **getCollection**\<`T`\>(`name`): `Promise`\<`Collection`\<`T`\>\>

Defined in: [shared/database/providers/mongo/MongoDatabase.ts:91](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/MongoDatabase.ts#L91)

Retrieves a collection from the connected database.

#### Type Parameters

##### T

`T` *extends* `Document`

#### Parameters

##### name

`string`

The name of the collection to retrieve.

#### Returns

`Promise`\<`Collection`\<`T`\>\>

The MongoDB collection.

#### Throws

Will throw an error if the database is not connected.

***

### isConnected()

> **isConnected**(): `boolean`

Defined in: [shared/database/providers/mongo/MongoDatabase.ts:72](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/MongoDatabase.ts#L72)

Checks if the database is connected.

#### Returns

`boolean`

True if the database is connected, false otherwise.

#### Implementation of

[`IDatabase`](../../../../interfaces/IDatabase/interfaces/IDatabase.md).[`isConnected`](../../../../interfaces/IDatabase/interfaces/IDatabase.md#isconnected)
