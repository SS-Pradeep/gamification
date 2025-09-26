import {injectable, inject} from 'inversify';
import {NotFoundError, InternalServerError} from 'routing-controllers';
import {
  BaseService,
  MongoDatabase,
  IGamifyLayerRepository,
} from '#root/shared/index.js';
import {GLOBAL_TYPES} from '#root/types.js';
import {
  Currency,
  UpdateCurrency,
} from '#gamification/classes/transformers/index.js';
import {plainToClass, plainToInstance} from 'class-transformer';
import {ObjectId} from 'mongodb';

/**
 * CurrencyService - handles business logic for currencies
 * Manages CRUD operations for currencies used in the gamification system
 */

@injectable()
export class CurrencyService extends BaseService {
  constructor(
    @inject(GLOBAL_TYPES.GamifyLayerRepo)
    private readonly gamifyLayerRepo: IGamifyLayerRepository,

    @inject(GLOBAL_TYPES.Database)
    private readonly mongoDatabase: MongoDatabase,
  ) {
    super(mongoDatabase);
  }

  /**
   * Creates a new currency
   */

  createCurrency(currency: Currency): Promise<Currency | null> {
    return this._withTransaction(async session => {
      currency = plainToInstance(Currency, currency);

      const createdCurrency = await this.gamifyLayerRepo.createCurrency(
        currency,
        session,
      );

      if (!createdCurrency) {
        throw new InternalServerError('Failed to create currency');
      }

      return createdCurrency;
    });
  }

  /**
   * Retrieves all currencies
   */
  async readCurrencies(): Promise<Currency[] | null> {
    return this._withTransaction(async session => {
      const currencies = await this.gamifyLayerRepo.readAllCurrencies(session);
      return plainToInstance(Currency, currencies);
    });
  }

  /**
   * Updates an existing currency by ID
   */

  async updateCurrency(
    currencyId: string,
    currencyUpdates: UpdateCurrency,
  ): Promise<boolean> {
    return this._withTransaction(async session => {
      const isSlug = ObjectId.isValid(currencyId);

      const objectId = !isSlug ? new ObjectId(currencyId) : currencyId;

      const updateResult = await this.gamifyLayerRepo.updateCurrency(
        objectId,
        isSlug,
        currencyUpdates,
        session,
      );

      if (!updateResult || updateResult.matchedCount === 0) {
        throw new NotFoundError(`Currency with ID ${currencyId} not found`);
      }

      return updateResult.modifiedCount > 0;
    });
  }

  async readCurrencyById(currencyId: string): Promise<Currency | null> {
    return this._withTransaction(async session => {
      const isSlug = ObjectId.isValid(currencyId);

      const objectId = !isSlug ? new ObjectId(currencyId) : currencyId;

      const currency = await this.gamifyLayerRepo.readCurrency(
        objectId,
        isSlug,
        session,
      );

      if (!currency) {
        throw new NotFoundError(`Currency with ID ${currencyId} not found`);
      }

      return plainToInstance(Currency, currency);
    });
  }
}
