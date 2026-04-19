import express, { type Request, type Response } from 'express';
import { type Task } from '../types/types.js';
import { TaskService } from '../services/TaskService.js';

const taskService = new TaskService();

export const getAllTask = async (req: Request, res: Response) => {
  try {
    // Obteniendo toda la lista de tareas, si no hay datos devuelve []
    const tasks = await taskService.getAllTasks();

    res.status(201).json({
      status: 'success',
      data: tasks,
      msg: 'All tasks had been retrieved.',
    });
  } catch (error) {
    res.status(500).send({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const getTaskByID = async (req: Request, res: Response) => {
  try {
    // Obteniendo el parametro id
    const id = Number(req.params.id);

    const task = await taskService.getTaskByID(Number(id));

    console.log(`Looking for the task with ID: ${id}`);

    // Agregar logica de busqueda en base de datos

    res.status(201).json({
      status: 'success',
      data: task,
      msg: `Task with ID: ${id} has been found.`,
    });
  } catch (error) {
    res.status(500).send({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const data = req.body; // Recibiendo datos de tarea desde el cliente
    // TODO: completar validacion con ZOD

    // Creando nueva task
    const task = await taskService.createTask(data);

    console.log(task);

    //TODO: Agregar lógica de gardado de datos en DB
    res.status(201).json({
      status: 'success',
      data: [],
      msg: 'New task has been created.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const editTask = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body; // Recibiendo datos de tarea desde el cliente

    // console.log(id)s
    // console.log(data)

    // Creando nueva task
    const task = await taskService.editTask(id, data);

    // console.log(task)

    res.status(201).json({
      status: 'success',
      data: task,
      msg: 'Task has been updated.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // Recibiendo datos de tarea desde el cliente

    // Creando nueva task
    const task = await taskService.deleteTaskByID(id);

    // console.log(task)

    res.status(201).json({
      status: 'success',
      data: task,
      msg: 'Task has been deleted.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};
