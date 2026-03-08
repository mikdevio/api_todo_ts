import express, { type Request, type Response } from 'express';
import { type Task } from '../types/types.js';
import { UserService } from '../services/UserService.js';

const userService = new UserService();


export const getAllUser = async (req: Request, res: Response) => {
    try {

        // Obteniendo toda la lista de tareas, si no hay datos devuelve []
        const users = await userService.getAllUsers();

        res.status(201).json({
            status: "success",
            data: [users],
            msg: "All tasks had been retrieved."
        });
        
    } catch (error) {
        res.status(500).send({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    try {
        // Obteniendo el parametro id
        const { id } = req.params;

        const user = await userService.getUserByID(Number(id));

        console.log(`Looking for the task with ID: ${id}`)

        // Agregar logica de busqueda en base de datos

        res.status(201).json({
            status: "success",
            data: [user],
            msg: `Task with ID: ${id} has been found.`
        });

    } catch (error) {
        res.status(500).send({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const {firstName, lastName, address, email} = req.body; // Recibiendo datos de tarea desde el cliente
        console.log("POST CREATE TRIGGERED")

        // Creando nueva task
        const user = await userService.createUser({firstName, lastName, address, email});

        // console.log(user)

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