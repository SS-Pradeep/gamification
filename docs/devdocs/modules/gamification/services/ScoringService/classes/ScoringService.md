[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/ScoringService](../README.md) / ScoringService

# Class: ScoringService

Defined in: [modules/gamification/services/ScoringService.ts:21](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/ScoringService.ts#L21)

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new ScoringService**(`weightsRepo`, `userGameMetricsService`, `mongoDatabase`): `ScoringService`

Defined in: [modules/gamification/services/ScoringService.ts:31](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/ScoringService.ts#L31)

#### Parameters

##### weightsRepo

[`ScoringWeightsRepository`](../../../../../shared/database/providers/mongo/repositories/WeightsRepository/classes/ScoringWeightsRepository.md)

##### userGameMetricsService

[`userGameMetricsService`](../../UserGameMetricsService/classes/userGameMetricsService.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`ScoringService`

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

### calculateScore()

> **calculateScore**(`attempt`): `Promise`\<[`IScoringResponse`](../../../interfaces/scoring/interfaces/IScoringResponse.md)\>

Defined in: [modules/gamification/services/ScoringService.ts:63](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/ScoringService.ts#L63)

#### Parameters

##### attempt

[`IQuizAttempt`](../../../interfaces/scoring/interfaces/IQuizAttempt.md)

#### Returns

`Promise`\<[`IScoringResponse`](../../../interfaces/scoring/interfaces/IScoringResponse.md)\>

***

### getCurrentWeights()

> **getCurrentWeights**(): `Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>

Defined in: [modules/gamification/services/ScoringService.ts:213](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/ScoringService.ts#L213)

#### Returns

`Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>

***

### updateWeights()

> **updateWeights**(`newWeights`): `Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>

Defined in: [modules/gamification/services/ScoringService.ts:217](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/ScoringService.ts#L217)

#### Parameters

##### newWeights

`Partial`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>

#### Returns

`Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>
