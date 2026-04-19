import { AppDataSource } from '@/config/data_source.js';
import { CategoryService } from '../../services/CategoryService.js';
import {
  createMockRepository,
  type MockRepository,
} from '../mocks/repository.mock.js';

jest.mock('../../src/config/data_source', () => ({
  AppDataSource: {
    getRepository: jest.fn(),
  },
}));

describe('CategoryServie (unitest with mocks)', () => {
  let categoryService: CategoryService;
  let mockRepo: MockRepository;

  beforeEach(() => {
    mockRepo = createMockRepository();

    (AppDataSource.getRepository as jest.Mock).mockReturnValue(mockRepo);

    categoryService = new CategoryService();
  });

  describe('createCategory', () => {});
});
