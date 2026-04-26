[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/controllers/MetricController](../README.md) / MetricController

# Class: MetricController

Defined in: [modules/gamification/controllers/MetricController.ts:42](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L42)

## Constructors

### Constructor

> **new MetricController**(`MetricService`, `UserGameMetricsService`): `MetricController`

Defined in: [modules/gamification/controllers/MetricController.ts:43](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L43)

#### Parameters

##### MetricService

[`metricService`](../../../services/MetricService/classes/metricService.md)

##### UserGameMetricsService

[`userGameMetricsService`](../../../services/UserGameMetricsService/classes/userGameMetricsService.md)

#### Returns

`MetricController`

## Methods

### createGameMetric()

> **createGameMetric**(`body`): `Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

Defined in: [modules/gamification/controllers/MetricController.ts:54](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L54)

#### Parameters

##### body

[`CreateGameMetricBody`](../../../classes/validators/GamifyEngineValidators/classes/CreateGameMetricBody.md)

#### Returns

`Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

***

### createUserGameMetric()

> **createUserGameMetric**(`body`): `Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)\>

Defined in: [modules/gamification/controllers/MetricController.ts:119](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L119)

#### Parameters

##### body

[`UserGameMetricBody`](../../../classes/validators/GamifyEngineValidators/classes/UserGameMetricBody.md)

#### Returns

`Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)\>

***

### deleteGameMetric()

> **deleteGameMetric**(`params`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/MetricController.ts:104](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L104)

#### Parameters

##### params

[`GameMetricsParams`](../../../classes/validators/GamifyEngineValidators/classes/GameMetricsParams.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>

***

### deleteUserGameMetric()

> **deleteUserGameMetric**(`params`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/MetricController.ts:159](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L159)

#### Parameters

##### params

[`DeleteUserGameMetricParams`](../../../classes/validators/GamifyEngineValidators/classes/DeleteUserGameMetricParams.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>

***

### getGameMetricById()

> **getGameMetricById**(`params`): `Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

Defined in: [modules/gamification/controllers/MetricController.ts:68](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L68)

#### Parameters

##### params

[`GameMetricsParams`](../../../classes/validators/GamifyEngineValidators/classes/GameMetricsParams.md)

#### Returns

`Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

***

### getGameMetrics()

> **getGameMetrics**(): `Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)[]\>

Defined in: [modules/gamification/controllers/MetricController.ts:80](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L80)

#### Returns

`Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)[]\>

***

### getUserGameMetrics()

> **getUserGameMetrics**(`params`): `Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)[]\>

Defined in: [modules/gamification/controllers/MetricController.ts:134](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L134)

#### Parameters

##### params

[`ReadUserGameMetricsParams`](../../../classes/validators/GamifyEngineValidators/classes/ReadUserGameMetricsParams.md)

#### Returns

`Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)[]\>

***

### updateGameMetric()

> **updateGameMetric**(`body`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/MetricController.ts:88](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L88)

#### Parameters

##### body

[`updateGameMetric`](../../../classes/validators/GamifyEngineValidators/classes/updateGameMetric.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>

***

### updateUserGameMetric()

> **updateUserGameMetric**(`body`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/MetricController.ts:146](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/MetricController.ts#L146)

#### Parameters

##### body

[`UpdateUserGameMetricBody`](../../../classes/validators/GamifyEngineValidators/classes/UpdateUserGameMetricBody.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>
