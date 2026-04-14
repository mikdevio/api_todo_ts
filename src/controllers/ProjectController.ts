import express, { type Request, type Response } from 'express';
import { ProjectService } from '../services/ProjectService.js';


const projectService = new ProjectService();


export const getAllProjects = async (req: Request, res: Response) => {
    try {

        // Obteniendo toda la lista de tareas, si no hay datos devuelve []
        const projects = await projectService.getAllProojects();

        res.status(201).json({
            status: "success",
            data: projects,
            msg: "All categories had been retrieved."
        });

    } catch (error) {
        res.status(500).send({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const getProjectByID = async (req: Request, res: Response) => {
    try {
        // Obteniendo el parametro id
        const id = req.params.id as string;

        const project = await projectService.getProjectByID(id);

        // console.log(`Looking for the category with ID: ${id}`)

        // Agregar logica de busqueda en base de datos

        res.status(201).json({
            status: "success",
            data: project,
            msg: `Category with ID: ${id} has been found.`
        });

    } catch (error) {
        res.status(500).send({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const createProject = async (req: Request, res: Response) => {
    try {
        const data = req.body; // Recibiendo datos de tarea desde el cliente
        // TODO: completar validacion con ZOD

        // Creando nueva category
        const project = await projectService.createProject(data);

        // console.log(category)

        //TODO: Agregar lógica de gardado de datos en DB
        res.status(201).json({
            status: "success",
            data: project,
            msg: "New category has been created."
        });

    } catch (error) {
        res.status(500).json({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const editProject = async (req: Request, res: Response) => {
    try {

        const id = req.params.id as string;
        const data = req.body; // Recibiendo datos de tarea desde el cliente

        // Creando nueva category
        const project = await projectService.editProject(id, data);

        // console.log(category)

        res.status(201).json({
            status: "success",
            data: project,
            msg: "Category has been updated."
        });

    } catch (error) {
        res.status(500).json({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}

export const deleteProject = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string; // Recibiendo datos de tarea desde el cliente

        // Creando nueva category
        const project = await projectService.deleteProjectByID(id);

        res.status(201).json({
            status: "success",
            data: project,
            msg: "Category has been deleted."
        });

    } catch (error) {
        res.status(500).json({
            status: "Server error",
            msg: `Error: ${error}`
        });
    }
}