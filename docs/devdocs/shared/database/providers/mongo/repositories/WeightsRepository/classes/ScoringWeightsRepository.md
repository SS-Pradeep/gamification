[**vitest-vibe**](../../../../../../../README.md)

***

[vitest-vibe](../../../../../../../README.md) / [shared/database/providers/mongo/repositories/WeightsRepository](../README.md) / ScoringWeightsRepository

# Class: ScoringWeightsRepository

Defined in: [shared/database/providers/mongo/repositories/WeightsRepository.ts:9](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/WeightsRepository.ts#L9)

## Constructors

### Constructor

> **new ScoringWeightsRepository**(`db`): `ScoringWeightsRepository`

Defined in: [shared/database/providers/mongo/repositories/WeightsRepository.ts:12](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/WeightsRepository.ts#L12)

#### Parameters

##### db

[`MongoDatabase`](../../../MongoDatabase/classes/MongoDatabase.md)

#### Returns

`ScoringWeightsRepository`

## Methods

### get()

> **get**(`session?`): `Promise`\<`Omit`\<[`IScoringWeights`](../../../../../../../modules/gamification/interfaces/scoring/interfaces/IScoringWeights.md), `"_id"`\>\>

Defined in: [shared/database/providers/mongo/repositories/WeightsRepository.ts:25](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/WeightsRepository.ts#L25)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<`Omit`\<[`IScoringWeights`](../../../../../../../modules/gamification/interfaces/scoring/interfaces/IScoringWeights.md), `"_id"`\>\>

***

### update()

> **update**(`newWeights`, `session?`): `Promise`\<`Omit`\<[`IScoringWeights`](../../../../../../../modules/gamification/interfaces/scoring/interfaces/IScoringWeights.md), `"_id"`\>\>

Defined in: [shared/database/providers/mongo/repositories/WeightsRepository.ts:46](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/WeightsRepository.ts#L46)

#### Parameters

##### newWeights

`Partial`\<[`IScoringWeights`](../../../../../../../modules/gamification/interfaces/scoring/interfaces/IScoringWeights.md)\>

##### session?

`ClientSession`

#### Returns

`Promise`\<`Omit`\<[`IScoringWeights`](../../../../../../../modules/gamification/interfaces/scoring/interfaces/IScoringWeights.md), `"_id"`\>\>
