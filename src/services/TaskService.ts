import { AppDataSource } from "../config/data_source.js";
import { Task } from "../entity/TaskEntity.js";

export class TaskService {
    // Obtenemos el repositorios de Task
    private taskRepository = AppDataSource.getRepository(Task);

    async createTask(data: {title: string, description: string}){
        // 1. Creamos una nueva tarea
        const newTask = new Task();
        // 2. Asignando parametros de nueva tarea
        newTask.title = data.title;
        newTask.description = data.description;
        newTask.completed = false;
        newTask.createdAt = new Date();

        // 3. Guardando los datos (INSERT) en database
        return await this.taskRepository.save(newTask);
    }

    async getAllTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

}