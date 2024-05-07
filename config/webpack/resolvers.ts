import { ResolveOptions } from "webpack";

export const buildResolvers = (): ResolveOptions => ({
  extensions: [
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".css",
    ".scss",
    ".jpg",
    ".jpeg",
    ".png",
  ],
  modules: ["node_modules"],
  mainFiles: ["index"],
});
