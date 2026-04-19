// 1. Importamos Repository (la clase base de TypeORM) y ObjectLiteral (una interfaz que define qué es un objeto válido de entidad).
import { Repository, type ObjectLiteral } from 'typeorm';

/**
 * 2. Definición del TIPO MockRepository:
 * - <T extends ObjectLiteral = any>: Es un genérico que dice "T debe ser una entidad de TypeORM".
 * - Partial<...>: Hace que todos los métodos del repositorio sean opcionales (no tenemos que mockear los 50 métodos de TypeORM, solo los que usemos).
 * - Record<keyof Repository<T>, jest.Mock>: Aquí ocurre la magia. Tomamos todas las llaves (nombres de funciones) de un Repository real
 * (como save, find, delete) y decimos que ahora su valor no es la función real, sino un "jest.Mock" (una función espía de Jest).
 */
export type MockRepository<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

/**
 * 3. Función createMockRepository:
 * Es una función "fábrica" que devuelve un objeto nuevo con la estructura que definimos arriba.
 */
export const createMockRepository = <T extends ObjectLiteral = any>(): MockRepository<T> => ({
  // 4. Definimos las funciones más comunes como funciones de Jest (jest.fn()).
  // Estas funciones nos permiten hacer cosas como: .mockResolvedValue() o .toHaveBeenCalled().
  save: jest.fn(),
  find: jest.fn(),
  findBy: jest.fn(),
  findOneBy: jest.fn(),
  delete: jest.fn(),
  update: jest.fn(),

  /**
   * 5. Mock del QueryBuilder:
   * El QueryBuilder es más complejo porque usa "encadenamiento" (ej: .where().getMany()).
   * Por eso, creamos una función que devuelve un objeto que a su vez tiene más funciones mockeadas.
   */
  createQueryBuilder: jest.fn(() => ({
    // .mockReturnThis() permite que al llamar a .where() devuelva el mismo objeto para poder seguir encadenando.
    where: jest.fn().mockReturnThis(),
    getOne: jest.fn(),
    getMany: jest.fn(),
  })),
});