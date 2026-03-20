import { DataSource } from "typeorm";
import { Task } from '../entity/TaskEntity.js'
import { User } from "../entity/UserEntity.js"
import { Category } from "../entity/CategoryEntity.js";

import dotenv from 'dotenv';

// Variables de configuración
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  pass: process.env.DB_PASSWORD as string,
  name: process.env.DB_NAME as string,
}

// console.log(dbConfig)

// Si falta algo, lanzamos un error claro
if (Object.values(dbConfig).some(v => !v)) {
  throw new Error("There's non defined variables in .env");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.user,
  password: dbConfig.pass,
  database: dbConfig.name,
  // entities: [Task, User, Category],
  // entities: ['/src/entity/*{.ts,.js}'],
  synchronize: false,              // Solo en desarrollo
  logging: false,
  subscribers: [],

  entities: ['./src/**/*.entity{.ts,.js}'],
  migrations: ['./src/../migrations/**/*{.ts,.js}'],

  // Migrations
  // migrations: ['./src/migrations/*{.ts,.js}'],
  // migrationsRun: false,
  // migrationsTableName: 'migrations',
  // migrationsTransactionMode: 'all',
});