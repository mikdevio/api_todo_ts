import express, { type Request, type Response } from 'express';
import { CategoryService } from '../services/CategoryService.js';

const categoryService = new CategoryService();

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    // Obteniendo toda la lista de tareas, si no hay datos devuelve []
    const categories = await categoryService.getAllCategories();

    res.status(201).json({
      status: 'success',
      data: categories,
      msg: 'All categories had been retrieved.',
    });
  } catch (error) {
    res.status(500).send({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const getCategoryByID = async (req: Request, res: Response) => {
  try {
    // Obteniendo el parametro id
    const id = Number(req.params.id);

    const category = await categoryService.getCategoryByID(Number(id));

    console.log(`Looking for the category with ID: ${id}`);

    // Agregar logica de busqueda en base de datos

    res.status(201).json({
      status: 'success',
      data: category,
      msg: `Category with ID: ${id} has been found.`,
    });
  } catch (error) {
    res.status(500).send({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const data = req.body; // Recibiendo datos de tarea desde el cliente
    // TODO: completar validacion con ZOD

    // Creando nueva category
    const category = await categoryService.createCategory(data);

    // console.log(category)

    //TODO: Agregar lógica de gardado de datos en DB
    res.status(201).json({
      status: 'success',
      data: [],
      msg: 'New category has been created.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const editCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body; // Recibiendo datos de tarea desde el cliente

    // Creando nueva category
    const category = await categoryService.editCategory(id, data);

    // console.log(category)

    res.status(201).json({
      status: 'success',
      data: category,
      msg: 'Category has been updated.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // Recibiendo datos de tarea desde el cliente

    // Creando nueva category
    const category = await categoryService.deleteCategoryByID(id);

    res.status(201).json({
      status: 'success',
      data: category,
      msg: 'Category has been deleted.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server error',
      msg: `Error: ${error}`,
    });
  }
};
