import { type Request, type Response } from 'express';

// Controlador para la ruta principal del API "/"
export const getAPI = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: 'success',
      data: [],
      message: "Welcome to TODO's API",
    });
  } catch (error) {
    res.status(500).send({
      status: 'Server error',
      message: 'Internal Server Error',
    });
  }
};
