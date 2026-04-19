module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', 
    testMatch: ['**/test/unit/**/*.test.ts'],
    verbose: true,
    forceExit: true,
    clearMocks: true,
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
};