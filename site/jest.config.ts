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
    '^.+\\.(ts|tsx)?$':
      [
        'ts-jest',
        {
          diagnostics: {
            ignoreCodes: [1343]
          },
          astTransformers: {
            before: [
              {
                path: 'node_modules/ts-jest-mock-import-meta',  // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
                options: { metaObjectReplacement: { url: 'https://www.url.com' } }
              }
            ]
          }
        }
      ],
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.svg": "jest-transformer-svg"
  },
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$",
  "moduleFileExtensions": ["js", "json", "jsx", "tsx", "ts"],
  transformIgnorePatterns: [
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@public/(.*)": "<rootDir>/public/$1"
  }
};

export default config;
