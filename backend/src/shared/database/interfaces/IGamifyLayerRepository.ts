import {
  ICurrency,
  IEvents,
  IRule,
  IUpdateCurrency,
  IUpdateEvents,
} from '#root/shared/interfaces/models.js';
import {ClientSession, UpdateResult, DeleteResult, ObjectId} from 'mongodb';

export interface IGamifyLayerRepository {
  createEvent(event: IEvents, session?: ClientSession): Promise<IEvents | null>;
  readEvents(session?: ClientSession): Promise<IEvents[] | null>;
  readEvent(
    eventId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<IEvents | null>;
  updateEvent(
    eventId: ObjectId | string,
    isSlug: boolean,
    event: IUpdateEvents,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;
  deleteEvent(
    eventId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;

  createRule(rule: IRule, session?: ClientSession): Promise<IRule | null>;
  readRules(
    eventId: ObjectId | string,
    session?: ClientSession,
  ): Promise<IRule[] | null>;
  readRule(
    ruleId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<IRule | null>;

  updateRule(
    ruleId: ObjectId | string,
    isSlug: boolean,
    rule: Partial<IRule>,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  deleteRule(
    ruleId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;
  deleteRulesByEventId(
    eventId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;

  // CRUD for Currency

  createCurrency(
    currency: ICurrency,
    session?: ClientSession,
  ): Promise<ICurrency | null>;

  updateCurrency(
    currencyId: ObjectId | string,
    isSlug: boolean,
    currency: IUpdateCurrency,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  readCurrency(
    currencyId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<ICurrency | null>;

  readAllCurrencies(session?: ClientSession): Promise<ICurrency[] | null>;

  deleteCurrency(
    currencyId: ObjectId | string,
    isSlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;
}
