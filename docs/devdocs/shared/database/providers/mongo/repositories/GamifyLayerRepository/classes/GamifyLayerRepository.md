[**vitest-vibe**](../../../../../../../README.md)

***

[vitest-vibe](../../../../../../../README.md) / [shared/database/providers/mongo/repositories/GamifyLayerRepository](../README.md) / GamifyLayerRepository

# Class: GamifyLayerRepository

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:22](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L22)

## Implements

- [`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md)

## Constructors

### Constructor

> **new GamifyLayerRepository**(`db`): `GamifyLayerRepository`

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:28](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L28)

#### Parameters

##### db

[`MongoDatabase`](../../../MongoDatabase/classes/MongoDatabase.md)

#### Returns

`GamifyLayerRepository`

## Methods

### createCurrency()

> **createCurrency**(`currency`, `session?`): `Promise`\<[`ICurrency`](../../../../../../interfaces/models/interfaces/ICurrency.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:277](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L277)

#### Parameters

##### currency

[`ICurrency`](../../../../../../interfaces/models/interfaces/ICurrency.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`ICurrency`](../../../../../../interfaces/models/interfaces/ICurrency.md)\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`createCurrency`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#createcurrency)

***

### createEvent()

> **createEvent**(`event`, `session?`): `Promise`\<[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:93](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L93)

#### Parameters

##### event

[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`createEvent`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#createevent)

***

### createRule()

> **createRule**(`rule`, `session?`): `Promise`\<[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:177](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L177)

#### Parameters

##### rule

[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`createRule`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#createrule)

***

### deleteCurrency()

> **deleteCurrency**(`currencyId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:345](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L345)

#### Parameters

##### currencyId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`deleteCurrency`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#deletecurrency)

***

### deleteEvent()

> **deleteEvent**(`eventId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:162](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L162)

#### Parameters

##### eventId

`ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`deleteEvent`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#deleteevent)

***

### deleteRule()

> **deleteRule**(`ruleId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:247](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L247)

#### Parameters

##### ruleId

`ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`deleteRule`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#deleterule)

***

### deleteRulesByEventId()

> **deleteRulesByEventId**(`eventId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:262](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L262)

#### Parameters

##### eventId

`ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`deleteRulesByEventId`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#deleterulesbyeventid)

***

### readAllCurrencies()

> **readAllCurrencies**(`session?`): `Promise`\<[`ICurrency`](../../../../../../interfaces/models/interfaces/ICurrency.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:334](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L334)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`ICurrency`](../../../../../../interfaces/models/interfaces/ICurrency.md)[]\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`readAllCurrencies`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#readallcurrencies)

***

### readCurrency()

> **readCurrency**(`currencyId`, `isSlug`, `session?`): `Promise`\<[`ICurrency`](../../../../../../interfaces/models/interfaces/ICurrency.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:320](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L320)

#### Parameters

##### currencyId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`ICurrency`](../../../../../../interfaces/models/interfaces/ICurrency.md)\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`readCurrency`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#readcurrency)

***

### readEvent()

> **readEvent**(`eventId`, `isSlug`, `session?`): `Promise`\<[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:120](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L120)

#### Parameters

##### eventId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`readEvent`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#readevent)

***

### readEvents()

> **readEvents**(`session?`): `Promise`\<[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:113](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L113)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)[]\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`readEvents`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#readevents)

***

### readRule()

> **readRule**(`ruleId`, `isSlug`, `session?`): `Promise`\<[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:208](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L208)

#### Parameters

##### ruleId

`ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`readRule`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#readrule)

***

### readRules()

> **readRules**(`eventId`, `session?`): `Promise`\<[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:195](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L195)

#### Parameters

##### eventId

`ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)[]\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`readRules`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#readrules)

***

### updateCurrency()

> **updateCurrency**(`currencyId`, `isSlug`, `currency`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:296](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L296)

#### Parameters

##### currencyId

`string` | `ObjectId`

##### isSlug

`boolean`

##### currency

[`IUpdateCurrency`](../../../../../../interfaces/models/interfaces/IUpdateCurrency.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`updateCurrency`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#updatecurrency)

***

### updateEvent()

> **updateEvent**(`eventId`, `isSlug`, `event`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:138](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L138)

#### Parameters

##### eventId

`string` | `ObjectId`

##### isSlug

`boolean`

##### event

`Partial`\<[`IEvents`](../../../../../../interfaces/models/interfaces/IEvents.md)\>

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`updateEvent`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#updateevent)

***

### updateRule()

> **updateRule**(`ruleId`, `isSlug`, `rule`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyLayerRepository.ts:223](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyLayerRepository.ts#L223)

#### Parameters

##### ruleId

`ObjectId`

##### isSlug

`boolean`

##### rule

[`IRule`](../../../../../../interfaces/models/interfaces/IRule.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyLayerRepository`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md).[`updateRule`](../../../../../interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md#updaterule)
