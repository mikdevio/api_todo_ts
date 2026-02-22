// app.ts

import express, { type Request, type Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import apiRouter from "./routes/index.js"

// Variables de configuración
dotenv.config();

// Iniciando servidor express
const app = express();

// Agregando funcionalidades
app.use(cors());
app.use(express.json());

// Obteniendo valor del puerto de conexión
const PORT = process.env.PORT || 3300;

app.use("/", apiRouter);

// Iniciando servidor en localhost:pruerto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})