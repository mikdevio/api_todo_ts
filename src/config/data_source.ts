import { DataSource } from "typeorm";
import { Task } from '../entity/TaskEntity.js'
import { User } from "../entity/UserEntity.js"

import dotenv from 'dotenv';

// Variables de configuración
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  pass: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
}

// console.log(dbConfig)

// Si falta algo, lanzamos un error claro
if (Object.values(dbConfig).some(v => !v)) {
    throw new Error("There's non defined variables in .env");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port || 5432,
  username: dbConfig.user,
  password: dbConfig.pass,
  database: dbConfig.name,
  entities: [Task, User],
  synchronize: true, // Solo en desarrollo
  logging: false,
  subscribers: [],

  // Migrations
  migrations: ["src/migrations/*.ts"],
  migrationRun: false,
  migrationsTableName: 'migrations',
  migrationsTransationMode: 'all',
});