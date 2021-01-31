// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
    clearMocks: true,
    coverageDirectory: "__tests__/coverage",
    coverageProvider: "v8",
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.spec.ts"],
    roots: ["<rootDir>"],
    modulePaths: ["<rootDir>"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    moduleDirectories: [".", "src", "node_modules"],
    collectCoverage: true,
    coverageReporters: ["text-summary", "lcov"],
};
