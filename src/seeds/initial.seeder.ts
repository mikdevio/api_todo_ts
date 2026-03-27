import type { DataSource } from "typeorm";
import type { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from "../entity/UserEntity.js";
import { Project } from "../entity/ProjectEntity.js";
import { Category } from "../entity/CategoryEntity.js";
import { Task } from "../entity/TaskEntity.js";

export default class InitialSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const userRepository = dataSource.getRepository(User);
        const projectRepository = dataSource.getRepository(Project);
        const categoryRepository = dataSource.getRepository(Category);
        const taskRepository = dataSource.getRepository(Task);

        // 1. Crear usuarios por defecto
        const defaultUsers = userRepository.create([
            {
                firstName: 'admin',
                lastName: 'user',
                address: '1st Street and 2nd Street',
                email: 'admin@mail.com',
            },
            {
                firstName: 'client',
                lastName: 'user',
                address: '1st Street and 2nd Street',
                email: 'client@mail.com',
            },
        ]);

        const savedUsers = await userRepository.save(defaultUsers);

        // 2. Crear categorias por defecto
        const defaultCategories = categoryRepository.create([
            {
                name: 'Daily',
                description: 'Routine tasks'
            },
            {
                name: 'Work',
                description: 'Job task to be done'
            },
            {
                name: 'Family',
                description: 'Family tasks to be done'
            },
            {
                name: 'Hobby',
                description: 'Enjoyable tasks to do'
            }
        ]);

        const savedCategories = await categoryRepository.save(defaultCategories);

        const defaultProjects = projectRepository.create([
            {
                name: "Default Project",
                description: "Example project",
                user: savedUsers[0] as User
            },
            {
                name: "Daily Task ",
                description: "Project to organize daily task",
                user: savedUsers[0] as User
            },
        ])

        const savedProjects = await projectRepository.save(defaultProjects);

        const defaultTasks = taskRepository.create([
            {
                title: "Daily task 001",
                description: "Daily task example 001",
                project: savedProjects[1] as Project,
                categories: [savedCategories[0], savedCategories[2]] as Category[]
            },
            {
                title: "Default task 001",
                description: "Default task example 001",
                project: savedProjects[0] as Project,
                categories: [savedCategories[1]] as Category[]
            }
        ])
    }
}