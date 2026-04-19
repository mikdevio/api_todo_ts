import { In } from 'typeorm';
import { AppDataSource } from '../config/data_source.js';
import { Project } from '../entities/ProjectEntity.js';
import { User } from '../entities/UserEntity.js';
import { Task } from '../entities/TaskEntity.js';

export class ProjectService {
  // Obtenemos el repositorios de Task
  private projectRepository = AppDataSource.getRepository(Project);
  private userRepository = AppDataSource.getRepository(User);
  private taskRepository = AppDataSource.getRepository(Task);

  async createProject(data: {
    name: string;
    description: string;
    color: string;
    status: string;
    user: number;
    tasks: number[];
  }): Promise<Project> {
    const userObj = (await this.userRepository.findOneBy({
      id: data.user,
    })) as User;
    const tasksObj = (await this.taskRepository.findBy({
      id: In(data.tasks),
    })) as Task[];

    // 1. Creamos una nueva tarea
    const newProject = new Project();
    // 2. Asignando parametros de nueva tarea
    newProject.name = data.name;
    newProject.description = data.description;
    newProject.status = data.status;
    newProject.color = data.color;
    newProject.user = userObj;
    newProject.tasks = tasksObj;
    newProject.createdAt = new Date();

    // 3. Guardando los datos (INSERT) en database
    return await this.projectRepository.save(newProject);
  }

  async getAllProojects(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async getProjectByID(id: string): Promise<Project[]> {
    return await this.projectRepository.findBy({ id });
  }

  async editProject(
    id: string,
    data: {
      name: string;
      description: string;
      color: string;
      status: string;
      user: number;
      tasks: number[];
    },
  ): Promise<void> {
    const project = await this.projectRepository.findOneBy({ id });
    const userObj = (await this.userRepository.findOneBy({
      id: data.user,
    })) as User;
    const tasksObj = (await this.taskRepository.findBy({
      id: In(data.tasks),
    })) as Task[];

    if (project) {
      project.name = data.name;
      project.description = data.description;
      project.status = data.status;
      project.color = data.color;
      project.user = userObj;
      project.tasks = tasksObj;

      await this.projectRepository.save(project);
    }
  }

  async deleteProjectByID(id: string) {
    return await this.projectRepository.delete(id);
  }
}
