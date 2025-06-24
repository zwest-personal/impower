/** @jest-config-loader ts-node */
import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  // preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { diagnostics: { ignoreCodes: ['TS151001'] } }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$",
  "moduleFileExtensions": ["js", "json", "jsx", "tsx", "ts"],
  transformIgnorePatterns: [
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
};

export default config;
