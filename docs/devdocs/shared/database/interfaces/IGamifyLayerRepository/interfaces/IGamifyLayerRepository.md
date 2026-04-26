[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [shared/database/interfaces/IGamifyLayerRepository](../README.md) / IGamifyLayerRepository

# Interface: IGamifyLayerRepository

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:10](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L10)

## Methods

### createCurrency()

> **createCurrency**(`currency`, `session?`): `Promise`\<[`ICurrency`](../../../../interfaces/models/interfaces/ICurrency.md)\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:61](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L61)

#### Parameters

##### currency

[`ICurrency`](../../../../interfaces/models/interfaces/ICurrency.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`ICurrency`](../../../../interfaces/models/interfaces/ICurrency.md)\>

***

### createEvent()

> **createEvent**(`event`, `session?`): `Promise`\<[`IEvents`](../../../../interfaces/models/interfaces/IEvents.md)\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:11](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L11)

#### Parameters

##### event

[`IEvents`](../../../../interfaces/models/interfaces/IEvents.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IEvents`](../../../../interfaces/models/interfaces/IEvents.md)\>

***

### createRule()

> **createRule**(`rule`, `session?`): `Promise`\<[`IRule`](../../../../interfaces/models/interfaces/IRule.md)\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:30](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L30)

#### Parameters

##### rule

[`IRule`](../../../../interfaces/models/interfaces/IRule.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IRule`](../../../../interfaces/models/interfaces/IRule.md)\>

***

### deleteCurrency()

> **deleteCurrency**(`currencyId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:81](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L81)

#### Parameters

##### currencyId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### deleteEvent()

> **deleteEvent**(`eventId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:24](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L24)

#### Parameters

##### eventId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### deleteRule()

> **deleteRule**(`ruleId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:48](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L48)

#### Parameters

##### ruleId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### deleteRulesByEventId()

> **deleteRulesByEventId**(`eventId`, `isSlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:53](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L53)

#### Parameters

##### eventId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### readAllCurrencies()

> **readAllCurrencies**(`session?`): `Promise`\<[`ICurrency`](../../../../interfaces/models/interfaces/ICurrency.md)[]\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:79](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L79)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`ICurrency`](../../../../interfaces/models/interfaces/ICurrency.md)[]\>

***

### readCurrency()

> **readCurrency**(`currencyId`, `isSlug`, `session?`): `Promise`\<[`ICurrency`](../../../../interfaces/models/interfaces/ICurrency.md)\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:73](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L73)

#### Parameters

##### currencyId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`ICurrency`](../../../../interfaces/models/interfaces/ICurrency.md)\>

***

### readEvent()

> **readEvent**(`eventId`, `isSlug`, `session?`): `Promise`\<[`IEvents`](../../../../interfaces/models/interfaces/IEvents.md)\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:13](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L13)

#### Parameters

##### eventId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IEvents`](../../../../interfaces/models/interfaces/IEvents.md)\>

***

### readEvents()

> **readEvents**(`session?`): `Promise`\<[`IEvents`](../../../../interfaces/models/interfaces/IEvents.md)[]\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:12](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L12)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IEvents`](../../../../interfaces/models/interfaces/IEvents.md)[]\>

***

### readRule()

> **readRule**(`ruleId`, `isSlug`, `session?`): `Promise`\<[`IRule`](../../../../interfaces/models/interfaces/IRule.md)\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:35](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L35)

#### Parameters

##### ruleId

`string` | `ObjectId`

##### isSlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IRule`](../../../../interfaces/models/interfaces/IRule.md)\>

***

### readRules()

> **readRules**(`eventId`, `session?`): `Promise`\<[`IRule`](../../../../interfaces/models/interfaces/IRule.md)[]\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:31](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L31)

#### Parameters

##### eventId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IRule`](../../../../interfaces/models/interfaces/IRule.md)[]\>

***

### updateCurrency()

> **updateCurrency**(`currencyId`, `isSlug`, `currency`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:66](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L66)

#### Parameters

##### currencyId

`string` | `ObjectId`

##### isSlug

`boolean`

##### currency

[`IUpdateCurrency`](../../../../interfaces/models/interfaces/IUpdateCurrency.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### updateEvent()

> **updateEvent**(`eventId`, `isSlug`, `event`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:18](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L18)

#### Parameters

##### eventId

`string` | `ObjectId`

##### isSlug

`boolean`

##### event

[`IUpdateEvents`](../../../../interfaces/models/interfaces/IUpdateEvents.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### updateRule()

> **updateRule**(`ruleId`, `isSlug`, `rule`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyLayerRepository.ts:41](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyLayerRepository.ts#L41)

#### Parameters

##### ruleId

`string` | `ObjectId`

##### isSlug

`boolean`

##### rule

`Partial`\<[`IRule`](../../../../interfaces/models/interfaces/IRule.md)\>

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>
