import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import tailwind from "rollup-plugin-tailwindcss";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    treeshake: {
      preset: "smallest",
      manualPureFunctions: ["styled", "local"],
    },
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
      {
        file: "dist/bundle.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        plugins: [],
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        extensions: [".ts", ".tsx"],
      }),
      external(),
      resolve({ jsnext: true }),
      commonjs({ extensions: [".js"] }),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json", // Specify the path to your tsconfig.json file
      }),
      tailwind({
        input: "/tailwindcss.css", // required
        purge: false,
      }),
    ],
    external: [
      "react",
      "react-dom",
      "tailwindcss",
      "react-icons",
      "typescript",
    ], // Specify any external dependencies here
  },
];
