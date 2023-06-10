import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import commonjs from "@rollup/plugin-commonjs";
import svg from "rollup-plugin-svg";
import typescript from "rollup-plugin-typescript2";
import autoprefixer from "autoprefixer";
import image from "rollup-plugin-image";
import url from "@rollup/plugin-url";

export default [
  {
    // treeshake: {
    //   preset: "smallest",
    //   manualPureFunctions: ["styled", "local"],
    // },
    input: "./src/index.ts",
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
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      url(),
      postcss({
        extract: false,
        plugins: [autoprefixer(), tailwindcss()],
        minimize: true,
        config: {
          path: "./postcss.config.cjs",
        },
      }),
      image(),
      svg(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.json",
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      external(),
    ],
    external: [
      "react",
      "react-dom",
      "tailwindcss",
      "react-icons",
      "typescript",
    ],
  },
];
