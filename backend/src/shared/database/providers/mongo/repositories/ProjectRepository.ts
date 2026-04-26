import {inject, injectable} from 'inversify';
import {
  Collection,
  ObjectId,
  UpdateResult,
  ClientSession,
  DeleteResult,
} from 'mongodb';
import {IProjectRepository} from '#shared/database/interfaces/IProjectRepository.js';
import {IProject} from '#shared/interfaces/models.js';
import {GLOBAL_TYPES} from '#root/types.js';
import {MongoDatabase} from '../MongoDatabase.js';

@injectable()
export class ProjectRepository implements IProjectRepository {
  private collection: Collection<IProject>;

  constructor(@inject(GLOBAL_TYPES.Database) private db: MongoDatabase) {}

  private initialized = false;

  async init() {
    if (!this.initialized) {
      this.collection = await this.db.getCollection<IProject>('projects');
      this.initialized = true;
    }
  }

  async createProject(
    project: IProject,
    session?: ClientSession,
  ): Promise<IProject | null> {
    await this.init();
    const result = await this.collection.insertOne(project, {session});
    return result.acknowledged ? {...project, _id: result.insertedId} : null;
  }

  async readProject(
    projectId: ObjectId,
    session?: ClientSession,
  ): Promise<IProject | null> {
    await this.init();
    return this.collection.findOne({_id: projectId}, {session});
  }

  async readAllProjects(session?: ClientSession): Promise<IProject[] | null> {
    await this.init();
    return this.collection.find({}, {session}).toArray();
  }

  async updateProject(
    projectId: ObjectId,
    project: Partial<IProject>,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();
    return this.collection.updateOne(
      {_id: projectId},
      {$set: project},
      {session},
    );
  }

  async deleteProject(
    projectId: ObjectId,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();
    return this.collection.deleteOne({_id: projectId}, {session});
  }
}
