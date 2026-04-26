import {ClientSession, DeleteResult, UpdateResult, ObjectId} from 'mongodb';
import {IProject} from '#shared/interfaces/models.js';

export interface IProjectRepository {
  createProject(
    project: IProject,
    session?: ClientSession,
  ): Promise<IProject | null>;
  readProject(
    projectId: string | ObjectId,
    session?: ClientSession,
  ): Promise<IProject | null>;
  readAllProjects(session?: ClientSession): Promise<IProject[] | null>;
  updateProject(
    projectId: string | ObjectId,
    project: Partial<IProject>,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;
  deleteProject(
    projectId: string | ObjectId,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;
}
