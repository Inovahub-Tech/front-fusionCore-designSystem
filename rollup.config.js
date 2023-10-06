import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { babel } from '@rollup/plugin-babel';

export default {
  input: "./index.ts",
  output: [
    {
      file: "dist/index.js",
      format: 'es'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    postcss({
      extensions: ['.css']
    }),
    babel()
  ]
}