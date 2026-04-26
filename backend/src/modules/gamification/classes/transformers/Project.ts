import {ProjectBody} from '../validators/ProjectValidators.js';
import {JSONSchema} from 'class-validator-jsonschema';
import {Expose, Transform} from 'class-transformer';
import {ID} from '#root/shared/index.js';
import {
  IProject,
  ObjectIdToString,
  StringToObjectId,
} from '#root/shared/index.js';

/**
 * Project class
 * represents a gamification project which can contain multiple events, rules, metrics, and rewards.
 */
class Project implements IProject {
  // Unique database identifier for this project
  @Expose()
  @JSONSchema({
    title: 'Project ID',
    description: 'Unique identifier for the project',
    example: '60d5ec49b3f1c8e4a8f8b8c1',
    type: 'string',
  })
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  _id?: ID;

  // Display name of the project
  @Expose()
  @JSONSchema({
    title: 'Project Name',
    description: 'Name of the Project',
    example: 'My Gamification Project',
    type: 'string',
  })
  name: string;

  // Optional description explaining what this project is for
  @Expose()
  @JSONSchema({
    title: 'Project Description',
    description:
      'Description of the project, explaining its purpose and how it is used in the game',
    example: 'A project to gamify user engagement on our platform',
    type: 'string',
  })
  description: string;

  /**
   * Constructor - creates a new Project instance
   * @param projectBody - Optional data to populate the project
   */
  constructor(projectBody?: ProjectBody) {
    if (projectBody) {
      this.name = projectBody.name;
      this.description = projectBody.description;
    }
  }
}

export {Project};
