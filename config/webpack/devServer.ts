import { IBuildOptions } from "./types/config";

import type { Configuration as DEvServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (
  options: IBuildOptions
): DEvServerConfiguration => ({
  port: options.port,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
});
