module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1'
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.d.ts',
    '!src/main.ts',
    '!src/polyfills.ts'
  ],
  coverageReporters: ['html', 'text-summary'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts',
    '<rootDir>/src/**/?(*.)+(spec|test).ts'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts',
    '<rootDir>/jest-setup-mocks.ts'
  ]
};
