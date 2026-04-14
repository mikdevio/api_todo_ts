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
            data: users,
            msg: "All users had been retrieved."
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
        const id = Number(req.params.id);

        const user = await userService.getUserByID(id);

        console.log(`Looking for the task with ID: ${id}`)

        // Agregar logica de busqueda en base de datos

        res.status(201).json({
            status: "success",
            data: user,
            msg: `User with ID: ${id} has been found.`
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
        const data = req.body; // Recibiendo datos de tarea desde el cliente
        console.log("POST CREATE TRIGGERED")

        // Creando nueva task
        const user = await userService.createUser(data);

        // console.log(user)

        //TODO: Agregar lógica de gardado de datos en DB
        res.status(201).json({
            status: "success",
            data: [],
            msg: "New user has been created."
        });

    } catch (error) {
        res.status(500).json({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const editUser = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id);
        const { data } = req.body; // Recibiendo datos de tarea desde el cliente

        console.log(id);

        // Creando nueva task
        const user = await userService.editUser(id, data);

        // console.log(task)

        res.status(201).json({
            status: "success",
            data: user,
            msg: "User has been updated."
        });

    } catch (error) {
        res.status(500).json({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id); // Recibiendo datos de tarea desde el cliente

        // Creando nueva task
        const user = await userService.deleteUserByID(id);

        // console.log(task)

        res.status(201).json({
            status: "success",
            data: user,
            msg: "A user has been deleted."
        });

    } catch (error) {
        res.status(500).json({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}