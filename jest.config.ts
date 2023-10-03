import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    roots: [
        '<rootDir>/tests',
    ],
};

export default config;