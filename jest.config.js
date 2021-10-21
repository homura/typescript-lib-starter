// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  testMatch: ['<rootDir>/**/*.test.ts'],
  globals: {
    'ts-jest': {
      globals: {
        tsConfig: 'tsconfig.test.json',
      },
    },
  },
};
