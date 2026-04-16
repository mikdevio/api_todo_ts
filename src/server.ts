// app.ts
import 'reflect-metadata';
import dotenv from 'dotenv';

import app from './app.js';
import { AppDataSource } from './config/data_source.js';


// Variables de configuración
dotenv.config();

// Obteniendo valor del puerto de conexión
const PORT = process.env.PORT || 3300;

// Configurando la base de datos
AppDataSource.initialize()
    .then(() => {
        console.log("PSQL connected.");
        // Iniciando servidor en localhost:pruerto
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    })
    .catch((error) => console.error("Error during connection:", error))




