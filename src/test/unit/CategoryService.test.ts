import { AppDataSource } from '@/config/data_source.js';
import { CategoryService } from '../../services/CategoryService.js';
import { createMockRepository } from '../mocks/repository.mock.js';

jest.mock('../../src/config/data_source', () => ({
  AppDataSource: {
    getRepository: jest.fn(),
  },
}));

describe('CategoryServie (unitest with mocks)', () => {
  let categoryService: CategoryService;
  let mockRepo: ReturnType<typeof createMockRepository>;

  beforeEach(() => {
    mockRepo = createMockRepository();

    (AppDataSource.getRepository as jest.Mock).mockReturnValue(mockRepo);

    categoryService = new CategoryService();
  });

  describe('createCategory', () => {
    it('debería guardar una categoría y retornar el resultado con fecha', async () => {
      const dto = { name: 'Ropa', description: 'Moda de verano' };
      const expectedResult = { id: 1, ...dto, createdAt: new Date() };

      // Programamos el comportamiento (Stub)
      mockRepo.save.mockResolvedValue(expectedResult);

      const result = await categoryService.createCategory(dto);

      expect(result).toEqual(expectedResult);
      expect(mockRepo.save).toHaveBeenCalledTimes(1);
      // Validamos que se instanció correctamente antes de guardar
      expect(mockRepo.save).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Ropa',
        }),
      );
    });
  });

  describe('getCategoryByID', () => {
    it('debería llamar a findBy con el id correcto', async () => {
      const mockCategories = [{ id: 5, name: 'Hogar' }];
      mockRepo.findBy.mockResolvedValue(mockCategories);

      const result = await categoryService.getCategoryByID(5);

      expect(result).toEqual(mockCategories);
      expect(mockRepo.findBy).toHaveBeenCalledWith({ id: 5 });
    });
  });

  describe('deleteCategoryByID', () => {
    it('debería retornar el resultado del borrado', async () => {
      mockRepo.delete.mockResolvedValue({ affected: 1 });

      const result = await categoryService.deleteCategoryByID(10);

      expect(result.affected).toBe(1);
      expect(mockRepo.delete).toHaveBeenCalledWith(10);
    });
  });
});
