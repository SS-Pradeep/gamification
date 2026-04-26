import {Expose, Transform} from 'class-transformer';
import {
  ObjectIdToString,
  StringToObjectId,
} from '#shared/constants/transformerConstants.js';
import {ID} from '#shared/index.js';
import {IEvents, IUpdateEvents} from '#shared/interfaces/models.js';
import {JSONSchema} from 'class-validator-jsonschema';
import {EventsBody, UpdateEventsBody} from '../validators/index.js';

/**
 * Events class - represents an event in the gamification system
 * (e.g., user login, task completion, etc.)
 */

export class Events implements IEvents {
  // Unique database identifier for this event
  @Expose()
  @JSONSchema({
    title: 'Event ID',
    description: 'Unique identifier for the event',
    example: '60d5ec49b3f1c8e4a8f8b8c1',
    type: 'string',
  })
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  _id?: ID;

  // Name of the event
  @Expose()
  @JSONSchema({
    title: 'Event Name',
    description: 'Name of the event',
    example: 'User Login',
    type: 'string',
  })
  eventName: string;

  // Description of the event
  @Expose()
  @JSONSchema({
    title: 'Event Description',
    description: 'Description of the event',
    example: 'Triggered when a user logs in',
    type: 'string',
  })
  eventDescription: string;

  // Version of the event schema
  @Expose()
  @JSONSchema({
    title: 'Event Version',
    description: 'Version of the event schema',
    example: '1.0.0',
    type: 'string',
  })
  eventVersion: string;

  @Expose()
  @JSONSchema({
    title: 'Event Payload',
    description: 'Payload of the event containing additional data',
    example: {
      userId: '60d5ec49b3f1c8e4a8f8b8c1',
      timestamp: '2023-10-01T12:00:00Z',
    },
    type: 'object',
  })
  eventPayload: Record<string, any>;

  @Expose()
  @JSONSchema({
    title: 'Slug',
    description: 'Unique slug identifier for the event',
    example: 'user-login',
    type: 'string',
  })
  slug: string;

  @Expose()
  @JSONSchema({
    title: 'Scope',
    description:
      'Scope of the event (e.g., global, course-specific) typically tenant id',
    example: 'global',
    type: 'string',
  })
  scope: string;

  constructor(body?: EventsBody) {
    if (body) {
      this.eventName = body.eventName;
      this.eventDescription = body.eventDescription;
      this.eventVersion = body.eventVersion;
      this.eventPayload = body.eventPayload || {};
      this.scope = body?.scope;
      this.slug = body?.slug;
    }
  }
}

export class EventsResponse implements IEvents {
  _id?: string;
  eventName: string;
  eventDescription: string;
  eventVersion: string;
  eventPayload: Record<string, any>;
  slug: string;
  scope: string;

  constructor(event?: Events) {
    if (event) {
      this._id = event._id?.toString();
      this.eventName = event.eventName;
      this.eventDescription = event.eventDescription;
      this.eventVersion = event.eventVersion;
      this.eventPayload = event.eventPayload || {};
      this.slug = event.slug;
      this.scope = event.scope;
    }
  }
}

export class UpdateEvents implements IUpdateEvents {
  // Name of the event
  @Expose()
  @JSONSchema({
    title: 'Event Name',
    description: 'Name of the event',
    example: 'User Login',
    type: 'string',
  })
  eventName: string;

  // Description of the event
  @Expose()
  @JSONSchema({
    title: 'Event Description',
    description: 'Description of the event',
    example: 'Triggered when a user logs in',
    type: 'string',
  })
  eventDescription: string;

  // Version of the event schema
  @Expose()
  @JSONSchema({
    title: 'Event Version',
    description: 'Version of the event schema',
    example: '1.0.0',
    type: 'string',
  })
  eventVersion: string;

  @Expose()
  @JSONSchema({
    title: 'Event Payload',
    description: 'Payload of the event containing additional data',
    example: {
      userId: '60d5ec49b3f1c8e4a8f8b8c1',
      timestamp: '2023-10-01T12:00:00Z',
    },
    type: 'object',
  })
  eventPayload: Record<string, any>;

  constructor(body?: UpdateEventsBody) {
    if (body) {
      this.eventName = body.eventName;
      this.eventDescription = body.eventDescription;
      this.eventVersion = body.eventVersion;
      this.eventPayload = body.eventPayload || {};
    }
  }
}
