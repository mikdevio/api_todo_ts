// app.ts

import express, { type Request, type Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import apiRouter from "./routes/index.js"

import { AppDataSource } from './config/data_source.js';

// Variables de configuración
dotenv.config();

// Iniciando servidor express
const app = express();

// Agregando funcionalidades
app.use(cors());
app.use(express.json());

// Configurando la base de datos
AppDataSource.initialize()
    .then(() => console.log("PSQL connected."))
    .catch((error) => console.error("Error during connection:", error))

// Obteniendo valor del puerto de conexión
const PORT = process.env.PORT || 3300;

app.use("/", apiRouter);

// Iniciando servidor en localhost:pruerto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})