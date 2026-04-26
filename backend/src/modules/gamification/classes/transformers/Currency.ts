import {Expose, Transform} from 'class-transformer';
import {
  ObjectIdToString,
  StringToObjectId,
} from '#shared/constants/transformerConstants.js';
import {ID} from '#shared/index.js';
import {ICurrency, IUpdateCurrency} from '#shared/interfaces/models.js';
import {JSONSchema} from 'class-validator-jsonschema';
import {CurrencyBody, UpdateCurrencyBody} from '../validators/index.js';
import {ObjectId} from 'mongodb';
import {IsBoolean, IsMongoId} from 'class-validator';

/**
 * Currency class - represents a currency in the gamification system
 **/

export class Currency implements ICurrency {
  // Unique database identifier for this currency

  @Expose()
  @JSONSchema({
    title: 'Currency ID',
    description: 'Unique identifier for the currency',
    example: '60d5ec49b3f1c8e4a8f8b8c1',
    type: 'string',
  })
  @IsMongoId()
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  _id?: string | ObjectId;

  @Expose()
  @JSONSchema({
    title: 'Currency Name',
    description: 'Name of the currency',
    example: 'Gold Coins',
    type: 'string',
  })
  name: string;

  @Expose()
  @JSONSchema({
    title: 'Currency Description',
    description: 'Description of the currency',
    example: 'The primary currency used for rewards',
  })
  description: string;

  @Expose()
  @JSONSchema({
    title: 'Currency Icon',
    description: 'Icon representing the currency',
    example: 'https://example.com/icon.png',
    type: 'string',
  })
  icon: string;

  @Expose()
  @JSONSchema({
    title: 'Currency Exchange Value',
    description: 'Value of the currency in relation to the base currency',
    example: 100,
    type: 'number',
  })
  exchangeValue: number;

  @Expose()
  @JSONSchema({
    title: 'Is Base Currency',
    description: 'Indicates if this currency is the base currency',
    example: false,
    type: 'boolean',
  })
  isBaseCurrency: boolean;

  @Expose()
  @JSONSchema({
    title: 'Currency Slug',
    description: 'Unique slug identifier for the currency',
    example: 'gold-coins',
    type: 'string',
  })
  slug: string;

  @Expose()
  @JSONSchema({
    title: 'Currency Scope',
    description: 'Scope of the currency (e.g., global, project-specific)',
    example: 'global',
    type: 'string',
  })
  scope: string;

  constructor(body: CurrencyBody) {
    if (body) {
      this.name = body.name;
      this.description = body.description;
      this.icon = body.icon;
      this.exchangeValue = body.exchangeValue;
      this.isBaseCurrency = body.isBaseCurrency;
      this.scope = body?.scope;
      this.slug = body?.slug;
    }
  }
}

export class UpdateCurrency implements IUpdateCurrency {
  @Expose()
  @JSONSchema({
    title: 'Currency Name',
    description: 'Name of the currency',
    example: 'Gold Coins',
    type: 'string',
  })
  name: string;

  @Expose()
  @JSONSchema({
    title: 'Currency Description',
    description: 'Description of the currency',
    example: 'The primary currency used for rewards',
  })
  description: string;

  @Expose()
  @JSONSchema({
    title: 'Currency Icon',
    description: 'Icon representing the currency',
    example: 'https://example.com/icon.png',
    type: 'string',
  })
  icon: string;

  @Expose()
  @JSONSchema({
    title: 'Currency Exchange Value',
    description: 'Value of the currency in relation to the base currency',
    example: 100,
    type: 'number',
  })
  exchangeValue: number;

  @Expose()
  @JSONSchema({
    title: 'is Base Currency',
    description: 'Indicates if this currency is the base currency',
    example: false,
    type: 'boolean',
  })
  @IsBoolean()
  isBaseCurrency: boolean;

  constructor(body: UpdateCurrencyBody) {
    if (body) {
      this.name = body.name;
      this.description = body.description;
      this.icon = body.icon;
      this.exchangeValue = body.exchangeValue;
      this.isBaseCurrency = body.isBaseCurrency;
    }
  }
}
