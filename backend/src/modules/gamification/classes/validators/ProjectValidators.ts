import {IProject} from '#root/shared/index.js';
import {IsNotEmpty, IsString} from 'class-validator';
import {JSONSchema} from 'class-validator-jsonschema';

export class ProjectBody implements IProject {
  @JSONSchema({
    description: 'Name of the project',
    example: 'Gamification Project 1',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @JSONSchema({
    description: 'Description of the project',
    example: 'A project for gamifying user engagement',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
