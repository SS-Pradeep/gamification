[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/CurrencyService](../README.md) / CurrencyService

# Class: CurrencyService

Defined in: [modules/gamification/services/CurrencyService.ts:22](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/CurrencyService.ts#L22)

CurrencyService - handles business logic for currencies
Manages CRUD operations for currencies used in the gamification system

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new CurrencyService**(`gamifyLayerRepo`, `mongoDatabase`): `CurrencyService`

Defined in: [modules/gamification/services/CurrencyService.ts:23](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/CurrencyService.ts#L23)

#### Parameters

##### gamifyLayerRepo

[`IGamifyLayerRepository`](../../../../../shared/database/interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`CurrencyService`

#### Overrides

[`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md).[`constructor`](../../../../../shared/classes/BaseService/classes/BaseService.md#constructor)

## Methods

### \_withTransaction()

> `protected` **\_withTransaction**\<`T`\>(`operation`): `Promise`\<`T`\>

Defined in: [shared/classes/BaseService.ts:12](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/classes/BaseService.ts#L12)

#### Type Parameters

##### T

`T`

#### Parameters

##### operation

(`session`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md).[`_withTransaction`](../../../../../shared/classes/BaseService/classes/BaseService.md#_withtransaction)

***

### createCurrency()

> **createCurrency**(`currency`): `Promise`\<[`Currency`](../../../classes/transformers/Currency/classes/Currency.md)\>

Defined in: [modules/gamification/services/CurrencyService.ts:37](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/CurrencyService.ts#L37)

Creates a new currency

#### Parameters

##### currency

[`Currency`](../../../classes/transformers/Currency/classes/Currency.md)

#### Returns

`Promise`\<[`Currency`](../../../classes/transformers/Currency/classes/Currency.md)\>

***

### readCurrencies()

> **readCurrencies**(): `Promise`\<[`Currency`](../../../classes/transformers/Currency/classes/Currency.md)[]\>

Defined in: [modules/gamification/services/CurrencyService.ts:57](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/CurrencyService.ts#L57)

Retrieves all currencies

#### Returns

`Promise`\<[`Currency`](../../../classes/transformers/Currency/classes/Currency.md)[]\>

***

### readCurrencyById()

> **readCurrencyById**(`currencyId`): `Promise`\<[`Currency`](../../../classes/transformers/Currency/classes/Currency.md)\>

Defined in: [modules/gamification/services/CurrencyService.ts:92](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/CurrencyService.ts#L92)

#### Parameters

##### currencyId

`string`

#### Returns

`Promise`\<[`Currency`](../../../classes/transformers/Currency/classes/Currency.md)\>

***

### updateCurrency()

> **updateCurrency**(`currencyId`, `currencyUpdates`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/CurrencyService.ts:68](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/CurrencyService.ts#L68)

Updates an existing currency by ID

#### Parameters

##### currencyId

`string`

##### currencyUpdates

[`UpdateCurrency`](../../../classes/transformers/Currency/classes/UpdateCurrency.md)

#### Returns

`Promise`\<`boolean`\>
