import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => ({
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(test).+(ts|tsx)"],
});
