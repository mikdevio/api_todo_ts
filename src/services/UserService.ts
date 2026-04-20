import { AppDataSource } from '@/config/data_source';
import { User } from '@/entities/UserEntity';

export class UserService {
  // Obtenemos el repositorios de Task
  private userRepository = AppDataSource.getRepository(User);

  async createUser(data: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
  }) {
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

  async getUserByID(id: number) {
    return await this.userRepository.findBy({ id: id });
  }

  async editUser(
    id: number,
    data: {
      firstName: string;
      lastName: string;
      address: string;
      email: string;
      isActive: boolean;
    },
  ): Promise<void> {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.address = data.address;
      user.email = data.email;
      user.isActive = data.isActive;
      await this.userRepository.save(user);
    }
  }

  async deleteUserByID(id: number) {
    return await this.userRepository.delete(id);
  }
}
