import { In } from "typeorm";
import { AppDataSource } from "../config/data_source.js";
import { Category } from "../entity/CategoryEntity.js";
import { Task } from "../entity/TaskEntity.js";
import { User } from "../entity/UserEntity.js";

export class TaskService {
    // Obtenemos el repositorios de Task
    private taskRepository = AppDataSource.getRepository(Task);
    private categoryRepository = AppDataSource.getRepository(Category);

    async createTask(data: {
        title: string, description: string, user: number,
        categories: number[]
    }): Promise<Task> {

        // 0. Buscando objetos user y category
        const categoriesObj = await this.categoryRepository.findBy({ id: In(data.categories) }) as Category[];

        // console.log(userObj)

        // 1. Creamos una nueva tarea
        const newTask = new Task();
        // 2. Asignando parametros de nueva tarea
        newTask.title = data.title;
        newTask.description = data.description;
        newTask.completed = false;
        newTask.createdAt = new Date();
        // newTask.user = userObj;
        newTask.categories = categoriesObj;

        // console.log(newTask);

        // 3. Guardando los datos (INSERT) en database
        return await this.taskRepository.save(newTask);
    }

    async getAllTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    async getTaskByID(id: number): Promise<Task[]> {
        return await this.taskRepository.findBy({ id })
    }

    async editTask(id: number, data: {
        title: string, description: string,
        completed: boolean, user: number,
        categories: number[]
    }): Promise<void> {

        const task = await this.taskRepository.findOneBy({ id });
        const categoriesObj = await this.categoryRepository.findBy({ id: In(data.categories) }) as Category[];

        console.log(categoriesObj);

        if (task) {
            task.title = data.title;
            task.description = data.description;
            task.completed = data.completed;
            // task.user = userObj;
            task.categories = categoriesObj;
            await this.taskRepository.save(task);
        }
    }

    async deleteTaskByID(id: number) {
        return await this.taskRepository.delete(id);
    }

}