/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // 1. Usar ts-jest para procesar archivos TypeScript
  preset: 'ts-jest',

  // 2. Entorno de ejecución (Node.js para APIs)
  testEnvironment: 'node',

  // 3. Mapeo de alias (Debe coincidir con los "paths" de tsconfig.json)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // 4. Extensiones que Jest debe reconocer
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],

  // 5. Ubicación de los archivos de prueba
  testMatch: ['**/tests/unit/**/*.test.ts'],

  // 6. Transformación de archivos
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        // Desactiva la verificación de tipos lenta durante los tests (opcional)
        isolatedModules: true,
        // Asegura que ts-jest use la configuración de CommonJS para evitar errores de ESM
        useESM: false,
      },
    ],
  },

  // 7. Limpieza automática de mocks entre cada test
  clearMocks: true,

  // 8. Reporte de cobertura (Opcional pero recomendado)
  collectCoverageFrom: [
    'src/services/**/*.ts',
    'src/controllers/**/*.ts',
    '!src/**/*.d.ts',
  ],
};
