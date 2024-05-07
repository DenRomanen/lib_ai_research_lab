import { RuleSetRule } from "webpack";
import buildCssLoader from "./loaders/cssLoader";
import { IBuildOptions } from "./types/config";

export const buildLoders = ({ isDev }: IBuildOptions): RuleSetRule[] => {
  return [
    // typescript
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: [{ loader: isDev ? "babel-loader" : "ts-loader" }],
    },
    // css
    buildCssLoader(isDev),
    // svg
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
    // image
    {
      test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
      type: "asset/resource",
    },
    // fonts
    {
      test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
      type: "asset/resource",
      generator: {
        filename: "fonts/[hash][ext][query]",
      },
    },
  ];
};
