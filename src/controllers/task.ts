import express, { type Request, type Response } from 'express';
import { type Task } from '../types/types.js';

export const getAllTask = (req: Request, res: Response) => {
    try {
        res.status(201).json({
            status: "success",
            data: [],
            msg: "All tasks had been retrieved."
        });
    } catch (error) {
        res.status(500).send({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const getTaskByID = (req: Request, res: Response) => {
    try {
        // Obteniendo el parametro id
        const { id } = req.params;

        console.log(`Looking for the task with ID: ${id}`)

        // Agregar logica de busqueda en base de datos

        res.status(201).json({
            status: "success",
            data: [],
            msg: `Task with ID: ${id} has been created.`
        });

    } catch (error) {
        res.status(500).send({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const createTask = (req: Request, res: Response) => {
    try {
        const data = req.body; // Recibiendo datos de tarea desde el cliente
        console.log('Data received: ', data);

        //TODO: Agregar lógica de gardado de datos en DB
         res.status(201).json({
            status: "success",
            data: [],
            msg: "New task has been created."
        });

    } catch (error) {
        res.status(500).json({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

