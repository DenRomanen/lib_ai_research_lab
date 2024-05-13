import { Configuration } from "webpack";
import { buildDevServer } from "./devServer";
import { buildLoders } from "./loaders";
import { buildOptimization } from "./optimization";
import { buildPlugins } from "./plugins";
import { buildResolvers } from "./resolvers";
import { IBuildOptions } from "./types/config";

export const buildWebpackConfig = (options: IBuildOptions): Configuration => ({
  mode: options.mode,
  entry: options.paths.entry,
  output: {
    path: options.paths.build,
    filename: "index.js",
    chunkFilename: "[name].chunk.js",
    // publicPath: "/",
    libraryTarget: "umd",
    clean: true,
  },
  resolve: buildResolvers(),
  module: { rules: buildLoders(options) },
  plugins: buildPlugins(options),
  devtool: options.isDev ? "cheap-module-source-map" : "source-map",
  devServer: options.isDev ? buildDevServer(options) : undefined,
  optimization: options.isDev ? {} : buildOptimization(),
  externals: options.isDev
    ? {}
    : {
        react: "react",
      },
});
