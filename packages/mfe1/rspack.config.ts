import type { Configuration } from "@rspack/cli";
import rspack from "@rspack/core";

const { ModuleFederationPlugin } = rspack.container;

const config: Configuration = {
  entry: { main: "./src/main.tsx" },
  experiments: { css: true },
  devServer: { port: 3001, historyApiFallback: true },
  output: { publicPath: "auto" },
  resolve: { extensions: ["...", ".ts", ".tsx", ".jsx"] },
  module: {
    rules: [
      { test: /\.css$/, type: "css" },
      { test: /\.svg$/, type: "asset" },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: { syntax: "typescript", tsx: true },
                transform: { react: { runtime: "automatic" } },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({ template: "./index.html" }),
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: { "./CounterOne": "./src/components/CounterOne.tsx" },
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.0", eager: true },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.0.0",
          eager: true,
        },
      },
    }),
  ],
};
export default config;
