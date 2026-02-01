module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      }
    ]
  },
  moduleNameMapper: {
    // Angular subpath exports (required for Angular 21+ with Jest)
    '^@angular/core/testing$': '<rootDir>/node_modules/@angular/core/fesm2022/testing.mjs',
    '^@angular/common/testing$': '<rootDir>/node_modules/@angular/common/fesm2022/testing.mjs',
    '^@angular/common/http$': '<rootDir>/node_modules/@angular/common/fesm2022/http.mjs',
    '^@angular/common/http/testing$': '<rootDir>/node_modules/@angular/common/fesm2022/http/testing.mjs',
    '^@angular/platform-browser/testing$': '<rootDir>/node_modules/@angular/platform-browser/fesm2022/testing.mjs',
    '^@angular/platform-browser/animations$': '<rootDir>/node_modules/@angular/platform-browser/fesm2022/animations.mjs',
    '^@angular/platform-browser-dynamic/testing$': '<rootDir>/node_modules/@angular/platform-browser-dynamic/fesm2022/testing.mjs',
    '^@angular/router/testing$': '<rootDir>/node_modules/@angular/router/fesm2022/testing.mjs',
    '^@angular/animations/browser$': '<rootDir>/node_modules/@angular/animations/fesm2022/browser.mjs',
    '^@angular/animations/browser/testing$': '<rootDir>/node_modules/@angular/animations/fesm2022/browser/testing.mjs',
    '^@angular/core/rxjs-interop$': '<rootDir>/node_modules/@angular/core/fesm2022/rxjs-interop.mjs',
    '^@angular/forms/signals$': '<rootDir>/node_modules/@angular/forms/fesm2022/signals.mjs',
    // Project path aliases
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
