import { setSeederFactory } from 'typeorm-extension';
import { UserEntity } from "../entity/UserEntity.js"

export default setSeederFactory(UserEntity, (faker) => {
    const user = new UserEntity();
    user.firstName = faker.person.firstName();
    user.lastName = faker.person.lastName();
    user.email = faker.internet.email();
    user.password = 'password123'; // Password fijo para pruebas
    return user;
});