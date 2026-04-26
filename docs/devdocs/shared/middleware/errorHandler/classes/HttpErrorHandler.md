[**vitest-vibe**](../../../../README.md)

***

[vitest-vibe](../../../../README.md) / [shared/middleware/errorHandler](../README.md) / HttpErrorHandler

# Class: HttpErrorHandler

Defined in: [shared/middleware/errorHandler.ts:132](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/middleware/errorHandler.ts#L132)

## Implements

- `ExpressErrorMiddlewareInterface`

## Constructors

### Constructor

> **new HttpErrorHandler**(): `HttpErrorHandler`

#### Returns

`HttpErrorHandler`

## Methods

### error()

> **error**(`error`, `request`, `response`): `void`

Defined in: [shared/middleware/errorHandler.ts:133](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/middleware/errorHandler.ts#L133)

Called before response.send is being called. The data passed to method is the data passed to .send method.
Note that you must return same (or changed) data and it will be passed to .send method.

#### Parameters

##### error

`any`

##### request

`Request`

##### response

`Response`

#### Returns

`void`

#### Implementation of

`ExpressErrorMiddlewareInterface.error`
