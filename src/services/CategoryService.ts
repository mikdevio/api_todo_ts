import { AppDataSource } from "../config/data_source.js";
import { Category } from "../entity/CategoryEntity.js";
import type { Task } from "../entity/TaskEntity.js";


export class CategoryService {
    // Obtenemos el repositorios de Task
    private categoryRepository = AppDataSource.getRepository(Category);

    async createCategory(data: { name: string, description: string, task: Task }): Promise<Category> {
        // 1. Creamos una nueva tarea
        const newCategory = new Category();
        // 2. Asignando parametros de nueva tarea
        newCategory.name = data.name;
        newCategory.description = data.description;
        newCategory.createdAt = new Date();
        newCategory.task = data.task;

        // 3. Guardando los datos (INSERT) en database
        return await this.categoryRepository.save(newCategory);
    }

    async getAllCategories(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async getCategoryByID(id: number): Promise<Category[]> {
        return await this.categoryRepository.findBy({ id })
    }

    async editCategory(id: number, data: { title: string, description: string, completed: boolean, task: Task }): Promise<void> {
        const category = await this.categoryRepository.findOneBy({ id });
        if (category) {
            category.name = data.title;
            category.description = data.description;
            category.task = data.task;
            await this.categoryRepository.save(category);
        }
    }

    async deleteCategoryByID(id: number) {
        return await this.categoryRepository.delete(id);
    }

}