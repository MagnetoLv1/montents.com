import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: "@choseohwan/jest-preset-base",
    testEnvironment: 'jsdom',

    rootDir: '../',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/.jest/__mocks__/fileMock.ts",
        '~/(.*)': '<rootDir>/src/$1'
    },
    setupFiles: ["<rootDir>/.jest/jest.env.ts"],
    setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
    testMatch: ['<rootDir>/**/(*.)+(test).[jt]s?(x)']
};

export default config;