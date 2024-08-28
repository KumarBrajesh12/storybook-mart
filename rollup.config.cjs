import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import dtsPlugin from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

// Log the `dtsPlugin` to verify its structure
console.log(dtsPlugin);

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        extract: 'index.css',
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",  // Ensure this path is correct based on your tsconfig output
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dtsPlugin.default()],
    external: [/\.css$/],
  },
];
