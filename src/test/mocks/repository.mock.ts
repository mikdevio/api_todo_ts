// 1. Importamos Repository (la clase base de TypeORM) y ObjectLiteral (una interfaz que define qué es un objeto válido de entidad).
import { Repository, type ObjectLiteral } from 'typeorm';

/**
 * 2. Función createMockRepository:
 * Es una función "fábrica" que devuelve un objeto nuevo con la estructura que definimos arriba.
 */
export const createMockRepository = <T extends ObjectLiteral = any>() => {
  // 3. Definimos las funciones más comunes como funciones de Jest (jest.fn()).
  // Estas funciones nos permiten hacer cosas como: .mockResolvedValue() o .toHaveBeenCalled().
  const repo = {
    save: jest.fn(),
    find: jest.fn(),
    findBy: jest.fn(),
    findOneBy: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),

    /**
     * 4. Mock del QueryBuilder:
     * El QueryBuilder es más complejo porque usa "encadenamiento" (ej: .where().getMany()).
     * Por eso, creamos una función que devuelve un objeto que a su vez tiene más funciones mockeadas.
     */
    createQueryBuilder: jest.fn(() => ({
      // .mockReturnThis() permite que al llamar a .where() devuelva el mismo objeto para poder seguir encadenando.
      where: jest.fn().mockReturnThis(),
      getOne: jest.fn(),
      getMany: jest.fn(),
    })),
  };

  return repo as unknown as Record<keyof typeof repo, jest.Mock> &
    Repository<T>;
};
