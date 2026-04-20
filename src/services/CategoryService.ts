import { AppDataSource } from '@/config/data_source';
import { Category } from '@/entities/CategoryEntity';

export class CategoryService {
  // Obtenemos el repositorios de Task
  private categoryRepository = AppDataSource.getRepository(Category);

  async createCategory(data: {
    name: string;
    description: string;
  }): Promise<Category> {
    // 1. Creamos una nueva tarea
    const newCategory = new Category();
    // 2. Asignando parametros de nueva tarea
    newCategory.name = data.name;
    newCategory.description = data.description;
    newCategory.createdAt = new Date();

    // 3. Guardando los datos (INSERT) en database
    return await this.categoryRepository.save(newCategory);
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async getCategoryByID(id: number): Promise<Category[]> {
    return await this.categoryRepository.findBy({ id });
  }

  async editCategory(
    id: number,
    data: {
      title: string;
      description: string;
      completed: boolean;
    },
  ): Promise<void> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (category) {
      category.name = data.title;
      category.description = data.description;
      await this.categoryRepository.save(category);
    }
  }

  async deleteCategoryByID(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
