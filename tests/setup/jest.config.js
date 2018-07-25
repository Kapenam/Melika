module.exports = {
  globals: {
    DEV: true,
  },
  rootDir: '../../',
  setupFiles: ['<rootDir>/tests/setup/enzymeAdapter.js'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/setup/jsdom.js',
  testMatch: ['**/?(*.)(test).js'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/tests/',
    '<rootDir>/coverage/',
    '<rootDir>/.nyc_output/',
    '<rootDir>/.circleci/',
  ],
  verbose: true,
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', 'source'],
  moduleNameMapper: {
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/setup/imageMock.js',
    '\\.css$': 'identity-obj-proxy',
  },
}
