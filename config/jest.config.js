module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: '../',
    modulePaths: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/config/tsconfig.jest.json'
        }
    },
    verbose: false,
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.[t|j]sx?$': 'babel-jest',
        '^.+\\.svg$': 'jest-svg-transformer'
    },
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Test Report',
                outputPath: './.jest/report.html',
                includeFailureMsg: true,
                includeConsoleLog: true,
                sort: 'titleAsc'
            }
        ]
    ]
};
