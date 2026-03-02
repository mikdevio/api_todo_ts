import { DataSource } from "typeorm";
import { Task } from "./types/entity/task.js";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Mik1595@",
  database: "api_todo_db",
  entities: [Task],
  synchronize: true, // Solo en desarrollo
  logging: false,
});