[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/ScoringTransformer](../README.md) / QuizAttempt

# Class: QuizAttempt

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:8](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L8)

## Implements

- [`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md)

## Constructors

### Constructor

> **new QuizAttempt**(`data?`): `QuizAttempt`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:64](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L64)

#### Parameters

##### data?

[`QuizAttemptValidator`](../../../validators/ScoringValidators/classes/QuizAttemptValidator.md)

#### Returns

`QuizAttempt`

## Properties

### attemptCount

> **attemptCount**: `number`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:59](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L59)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`attemptCount`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#attemptcount)

***

### attemptId

> **attemptId**: `string` \| `ObjectId`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:34](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L34)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`attemptId`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#attemptid)

***

### grades

> **grades**: [`IQuestionGrade`](../../../../interfaces/scoring/interfaces/IQuestionGrade.md)[]

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:47](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L47)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`grades`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#grades)

***

### hintCount

> **hintCount**: `number`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:62](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L62)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`hintCount`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#hintcount)

***

### idealTime

> **idealTime**: `number`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:56](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L56)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`idealTime`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#idealtime)

***

### metricId

> **metricId**: `string` \| `ObjectId`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:43](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L43)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`metricId`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#metricid)

***

### quizId

> **quizId**: `string` \| `ObjectId`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:25](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L25)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`quizId`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#quizid)

***

### streaks

> **streaks**: `number`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:50](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L50)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`streaks`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#streaks)

***

### timeTaken

> **timeTaken**: `number`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:53](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L53)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`timeTaken`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#timetaken)

***

### userId

> **userId**: `string` \| `ObjectId`

Defined in: [modules/gamification/classes/transformers/ScoringTransformer.ts:16](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/ScoringTransformer.ts#L16)

#### Implementation of

[`IQuizAttempt`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md).[`userId`](../../../../interfaces/scoring/interfaces/IQuizAttempt.md#userid)
