import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {
  Collection,
  ObjectId,
  UpdateResult,
  DeleteResult,
  ClientSession,
} from 'mongodb';

import {IGamifyLayerRepository, MongoDatabase} from '#shared/database/index.js';
import {
  ICurrency,
  IEvents,
  IRule,
  IUpdateCurrency,
} from '#root/shared/interfaces/models.js';
import {GLOBAL_TYPES} from '#root/types.js';
import {Events, Rule} from '#gamification/classes/transformers/index.js';

@injectable()
export class GamifyLayerRepository implements IGamifyLayerRepository {
  // Collection references
  private eventsCollection: Collection<Events>;
  private rulesCollection: Collection<Rule>;
  private currencyCollection: Collection<ICurrency>;

  constructor(
    @inject(GLOBAL_TYPES.Database)
    private db: MongoDatabase,
  ) {}

  private initialized = false;

  private async init() {
    if (!this.initialized) {
      this.eventsCollection = await this.db.getCollection<Events>('events');
      this.rulesCollection = await this.db.getCollection<Rule>('rules');
      this.currencyCollection = await this.db.getCollection<ICurrency>(
        'currency',
      );

      // Create indexes for better performance
      try {
        // rules: index for retrieving rules based on event
        await this.rulesCollection.createIndex(
          {eventId: 1},
          {name: 'eventId_rules', background: true},
        );

        // add composite index for slug and scope with unique constraint on events collection

        await this.eventsCollection.createIndex(
          {slug: 1, scope: 1},
          {
            name: 'slug_scope_events',
            unique: true,
            background: true,
            partialFilterExpression: {
              slug: {$exists: true},
              scope: {$exists: true},
            },
          },
        );

        // add composite index for slug and scope with unique constraint on rules collection

        await this.rulesCollection.createIndex(
          {slug: 1, scope: 1},
          {
            name: 'slug_scope_rules',
            unique: true,
            background: true,
            partialFilterExpression: {
              slug: {$exists: true},
              scope: {$exists: true},
            },
          },
        );

        console.log('GamifyLayerRepository indexes created successfully');
      } catch (error) {
        console.error(
          'Error creating indexes in GamifyLayerRepository:',
          error,
        );
      }

      this.initialized = true;
    }
  }

  async createEvent(
    event: IEvents,
    session?: ClientSession,
  ): Promise<IEvents | null> {
    await this.init();

    const result = await this.eventsCollection.insertOne(event, {session});

    if (result.acknowledged) {
      const createdEvent = await this.eventsCollection.findOne(
        {_id: result.insertedId},
        {session},
      );

      return createdEvent;
    }
  }
  // readEvents(session?: ClientSession): Promise<IEvents[] | null> {
  //   throw new Error('Method not implemented.');
  // }
  async readEvents(session?: ClientSession): Promise<IEvents[] | null> {
    await this.init();

    const events = await this.eventsCollection.find({}, {session}).toArray();

    return events.length > 0 ? events : null;
  }
  async readEvent(
    eventId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<IEvents | null> {
    await this.init();

    const event =
      isSlug && typeof eventId === 'string'
        ? await this.eventsCollection.findOne({slug: eventId}, {session})
        : await this.eventsCollection.findOne({_id: eventId}, {session});

    if (!event) {
      return null;
    }
    return event;
  }

  async updateEvent(
    eventId: ObjectId | string,
    isSlug: boolean,
    event: Partial<IEvents>,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    const result =
      isSlug && typeof eventId === 'string'
        ? await this.eventsCollection.updateOne(
            {slug: eventId},
            {$set: event},
            {session},
          )
        : await this.eventsCollection.updateOne(
            {_id: eventId},
            {$set: event},
            {session},
          );

    return result;
  }

  async deleteEvent(
    eventId: ObjectId,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    const result =
      isSlug && typeof eventId === 'string'
        ? await this.eventsCollection.deleteOne({slug: eventId}, {session})
        : await this.eventsCollection.deleteOne({_id: eventId}, {session});

    return result;
  }

  async createRule(
    rule: IRule,
    session?: ClientSession,
  ): Promise<IRule | null> {
    await this.init();

    const result = await this.rulesCollection.insertOne(rule, {session});

    if (result.acknowledged) {
      const createdRule = await this.rulesCollection.findOne(
        {_id: result.insertedId},
        {session},
      );

      return createdRule;
    }
  }

  async readRules(
    eventId: ObjectId,
    session?: ClientSession,
  ): Promise<IRule[] | null> {
    await this.init();

    const rules = await this.rulesCollection
      .find({eventId}, {session})
      .toArray();

    return rules.length > 0 ? rules : null;
  }

  async readRule(
    ruleId: ObjectId,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<IRule | null> {
    await this.init();

    const rule =
      isSlug && typeof ruleId === 'string'
        ? await this.rulesCollection.findOne({slug: ruleId}, {session})
        : await this.rulesCollection.findOne({_id: ruleId}, {session});

    return rule;
  }

  async updateRule(
    ruleId: ObjectId,
    isSlug: boolean,
    rule: IRule,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    const result =
      isSlug && typeof ruleId === 'string'
        ? await this.rulesCollection.updateOne(
            {slug: ruleId},
            {$set: rule},
            {session},
          )
        : await this.rulesCollection.updateOne(
            {_id: ruleId},
            {$set: rule},
            {session},
          );

    return result;
  }

  async deleteRule(
    ruleId: ObjectId,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    const result =
      isSlug && typeof ruleId === 'string'
        ? await this.rulesCollection.deleteOne({slug: ruleId}, {session})
        : await this.rulesCollection.deleteOne({_id: ruleId}, {session});

    return result;
  }

  async deleteRulesByEventId(
    eventId: ObjectId,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    const result =
      isSlug && typeof eventId === 'string'
        ? await this.rulesCollection.deleteMany({slug: eventId}, {session})
        : await this.rulesCollection.deleteMany({_id: eventId}, {session});

    return result;
  }

  async createCurrency(
    currency: ICurrency,
    session?: ClientSession,
  ): Promise<ICurrency | null> {
    await this.init();

    const result = await this.currencyCollection.insertOne(currency, {session});

    if (result.acknowledged) {
      const createdCurrency = await this.currencyCollection.findOne(
        {_id: result.insertedId},
        {session},
      );

      return createdCurrency;
    }
    return null;
  }

  async updateCurrency(
    currencyId: ObjectId | string,
    isSlug: boolean,
    currency: IUpdateCurrency,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    const result =
      isSlug && typeof currencyId === 'string'
        ? await this.currencyCollection.updateOne(
            {slug: currencyId},
            {$set: currency},
            {session},
          )
        : await this.currencyCollection.updateOne(
            {_id: currencyId},
            {$set: currency},
            {session},
          );

    return result;
  }

  async readCurrency(
    currencyId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<ICurrency | null> {
    await this.init();

    const currency =
      isSlug && typeof currencyId === 'string'
        ? await this.currencyCollection.findOne({slug: currencyId}, {session})
        : await this.currencyCollection.findOne({_id: currencyId}, {session});

    return currency;
  }
  async readAllCurrencies(
    session?: ClientSession,
  ): Promise<ICurrency[] | null> {
    await this.init();

    const currencies = await this.currencyCollection
      .find({}, {session})
      .toArray();

    return currencies.length > 0 ? currencies : null;
  }
  async deleteCurrency(
    currencyId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    const result =
      isSlug && typeof currencyId === 'string'
        ? await this.currencyCollection.deleteOne({slug: currencyId}, {session})
        : await this.currencyCollection.deleteOne({_id: currencyId}, {session});

    return result;
  }
}
