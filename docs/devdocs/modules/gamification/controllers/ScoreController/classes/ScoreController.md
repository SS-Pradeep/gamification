[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/controllers/ScoreController](../README.md) / ScoreController

# Class: ScoreController

Defined in: [modules/gamification/controllers/ScoreController.ts:31](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/ScoreController.ts#L31)

## Constructors

### Constructor

> **new ScoreController**(`scoringService`): `ScoreController`

Defined in: [modules/gamification/controllers/ScoreController.ts:32](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/ScoreController.ts#L32)

#### Parameters

##### scoringService

[`ScoringService`](../../../services/ScoringService/classes/ScoringService.md)

#### Returns

`ScoreController`

## Methods

### calculateScore()

> **calculateScore**(`body`): `Promise`\<[`IScoringResponse`](../../../interfaces/scoring/interfaces/IScoringResponse.md)\>

Defined in: [modules/gamification/controllers/ScoreController.ts:47](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/ScoreController.ts#L47)

#### Parameters

##### body

[`QuizAttemptValidator`](../../../classes/validators/ScoringValidators/classes/QuizAttemptValidator.md)

#### Returns

`Promise`\<[`IScoringResponse`](../../../interfaces/scoring/interfaces/IScoringResponse.md)\>

***

### getWeights()

> **getWeights**(): `Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>

Defined in: [modules/gamification/controllers/ScoreController.ts:64](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/ScoreController.ts#L64)

#### Returns

`Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>

***

### updateWeights()

> **updateWeights**(`body`): `Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>

Defined in: [modules/gamification/controllers/ScoreController.ts:78](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/ScoreController.ts#L78)

#### Parameters

##### body

[`ScoringWeightsValidator`](../../../classes/validators/ScoringValidators/classes/ScoringWeightsValidator.md)

#### Returns

`Promise`\<[`IScoringWeights`](../../../interfaces/scoring/interfaces/IScoringWeights.md)\>
