import { DataSource } from "typeorm";
import type { SeederOptions } from "typeorm-extension";
import { Task } from '../entity/TaskEntity.js'
import { User } from "../entity/UserEntity.js"
import { Category } from "../entity/CategoryEntity.js";
import { Project } from "../entity/ProjectEntity.js";

import dotenv from 'dotenv';
import InitialSeeder from "../seeds/initial.seeder.js";
import type { DataSourceOptions } from "typeorm/browser";

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

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.user,
  password: dbConfig.pass,
  database: dbConfig.name,
  entities: [Task, User, Category, Project],
  // entities: ['/src/entity/*{.ts,.js}'],
  synchronize: false,              // Solo en desarrollo, activar para generar tablas
  logging: false,
  subscribers: [],

  // entities: ['./src/**/*{.ts,.js}'],
  migrations: ['./src/migrations/*{.ts,.js}'],

  // Registrar seeder
  seeds: [InitialSeeder],

  // Migrations
  // migrations: ['./src/migrations/*{.ts,.js}'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
}

export const AppDataSource = new DataSource(options);