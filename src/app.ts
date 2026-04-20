import express, { type Application } from 'express';

import cors from 'cors';

import apiRouter from '@/routes/index.js';

// Iniciando servidor express
const app: Application = express();

// --- Global middlewares ---

// Enable CORS for request from other domains
app.use(cors());

// Middleware to parse JSON from request body
app.use(express.json());

// Middleware para parsear datos de formularios (opcional)
app.use(express.urlencoded({ extended: true }));

// --- Routes definition ---

// Main route of the centralized api and version
app.use('/api/v1', apiRouter);

// --- Manejo de Errores ---

// Este middleware debe ir SIEMPRE después de las rutas
// TODO: Create a middleware to deal with all errrors

export default app;
