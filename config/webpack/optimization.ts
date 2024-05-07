import TerserWebpackPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

export const buildOptimization = (): Configuration["optimization"] => ({
  minimizer: [new TerserWebpackPlugin()],
  splitChunks: {
    // include all types of chunks
    chunks: "all",
    // cacheGroups: {
    //   react: {
    //     test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //     name: "react",
    //     chunks: "all",
    //   },
    //   redux: {
    //     test: /[\\/]node_modules[\\/](@reduxjs)[\\/]/,
    //     name: "redux",
    //     chunks: "all",
    //   },
    //   formik: {
    //     test: /[\\/]node_modules[\\/](formik)[\\/]/,
    //     name: "formik",
    //     chunks: "all",
    //   },
    // },
  },
});
