import webpack from "webpack";
import path from "path";
import { IBuildEnv } from "./config/webpack/types/config";
import { buildWebpackConfig } from "./config/webpack/webpackConfig";

const resolvePath = (...args: string[]) => path.resolve(__dirname, ...args);

export default ({
  mode = "development",
  port = 3000,
  isBundleAnalyzer = false,
}: IBuildEnv): webpack.Configuration =>
  buildWebpackConfig({
    mode,
    port,
    isDev: mode === "development",
    paths: {
      entry: resolvePath(
        "src",
        mode === "development" ? "indexx.tsx" : "index.ts"
      ),
      build: resolvePath("dist"),
      html: resolvePath("public", "index.html"),
      favicon: resolvePath("public", ""),
      src: resolvePath("src"),
      // env: resolvePath(`.env.${mode}`),
    },
    isBundleAnalyzer,
  });
