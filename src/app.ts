// app.ts

import express, { type Request, type Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Variables de configuración
dotenv.config();

// Iniciando servidor express
const app = express();

// Agregando funcionalidades
app.use(cors());
app.use(express.json());

// Obteniendo valor del puerto de conexión
const PORT = process.env.PORT || 3300;

// Punto de entrada de la app
app.get('/', (req: Request, res: Response) => {
    res.send("API TODO TS working with Typescript");
});

// Iniciando servidor en localhost:pruerto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})