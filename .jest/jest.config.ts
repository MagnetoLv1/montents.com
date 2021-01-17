import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: '../',
    modulePaths: ['<rootDir>/src/'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/.jest/__mocks__/fileMock.ts"
    },
    setupFiles: ["<rootDir>/.jest/jest.env.ts"],
    setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/.jest/tsconfig.json'
        }
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    collectCoverage: false,
    coverageReporters: ['json', 'html'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
        '!<rootDir>/src/**/*.stories.{ts,tsx,js,jsx}'
    ],
    testMatch: ['**/(*.)+(test).[jt]s?(x)'],
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: 'report',
                filename: 'report.html',
                expand: false
            }
        ]
    ]
};

export default config;