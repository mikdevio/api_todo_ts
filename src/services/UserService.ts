import { AppDataSource } from "../config/data_source.js";
import { User } from "../entity/UserEntity.js";

export class UserService {
    // Obtenemos el repositorios de Task
    private userRepository = AppDataSource.getRepository(User);

    async createUser(data: {firstName: string, lastName: string, address:string, email:string}){
        // 1. Creamos una nueva tarea
        const newUser = new User();
        // 2. Asignando parametros de nueva tarea
        newUser.firstName = data.firstName;
        newUser.lastName = data.lastName;
        newUser.address = data.address;
        newUser.email = data.email;
        newUser.isActive = true;
        newUser.createdAt = new Date();

        // 3. Guardando los datos (INSERT) en database
        return await this.userRepository.save(newUser);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

}