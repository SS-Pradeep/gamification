import {injectable, inject} from 'inversify';
import {NotFoundError, InternalServerError} from 'routing-controllers';
import {
  BaseService,
  MongoDatabase,
  IProjectRepository,
} from '#root/shared/index.js';
import {GLOBAL_TYPES} from '#root/types.js';
import {Project} from '#gamification/classes/index.js';
import {plainToInstance} from 'class-transformer';

@injectable()
export class ProjectService extends BaseService {
  constructor(
    @inject(GLOBAL_TYPES.ProjectRepository)
    private readonly projectRepo: IProjectRepository,

    @inject(GLOBAL_TYPES.Database)
    private readonly mongodatabase: MongoDatabase,
  ) {
    super(mongodatabase);
  }

  async createProject(project: Project): Promise<Project | null> {
    return this._withTransaction(async session => {
      const createdProject = await this.projectRepo.createProject(
        project,
        session,
      );
      if (!createdProject) {
        throw new InternalServerError('Failed to create project');
      }
      return plainToInstance(Project, createdProject);
    });
  }

  async getProjectById(projectId: string): Promise<Project> {
    return this._withTransaction(async session => {
      const project = await this.projectRepo.readProject(projectId, session);
      if (!project) {
        throw new NotFoundError('Project not found');
      }
      return plainToInstance(Project, project);
    });
  }

  async getAllProjects(): Promise<Project[]> {
    return this._withTransaction(async session => {
      const projects = await this.projectRepo.readAllProjects(session);
      if (!projects) {
        throw new NotFoundError('No projects found');
      }
      return projects.map(project => plainToInstance(Project, project));
    });
  }
}
