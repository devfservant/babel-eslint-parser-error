module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/dist/',
    '/docs/',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  coverageDirectory: 'reports/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'clover'],
  collectCoverageFrom: [
    'packages/*/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/*.{test,tests}.{js,jsx}',
    '!**/build/**/*',
    '!**/dist/**/*',
    '!**/docs/**/*',
    '!**/jest.*.js',
    '!**/babel.*.js',
    '!**/parcel.js',
  ],
  setupFiles: ['./jest.setup.js', 'jest-canvas-mock'],
  /* eslint-disable-next-line xss/no-mixed-html */
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
    'jest-serializer-html',
  ],
  setupFilesAfterEnv: ['jest-extended'],
}
