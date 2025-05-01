import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss"

import packageJson from "./package.json";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                exports: "named"
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
                exports: "named"
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            postcss(),
        ],
        external: ["react", "react-dom"]
    },
    {
        input: "src/index.ts",
        output: [{ file: packageJson.types, exports: "named" }],
        plugins: [
            dts.default()
        ],
        external: [/\.css/] 
    }
]