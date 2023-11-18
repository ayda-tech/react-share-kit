import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'

import packageJSON from './package.json' assert { type: 'json' }

// ======= FOR BUILDING NODE.JS PACKAGE =======
// import builtins from 'builtin-modules'
// import resolve, { nodeResolve } from '@rollup/plugin-node-resolve'
// ============================================

export default [
  {
    input: 'src/react-share-kit.ts',
    output: [
      {
        file: packageJSON.main,
        format: 'cjs',
        exports: 'named',
      },
      {
        file: packageJSON.module,
        format: 'esm',
        exports: 'named',
      },
    ],
    // external: builtins,
    external: ['react', 'react-dom'],
    plugins: [
      typescript({
        check: true,
        tsconfig: './tsconfig.json',
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      // resolve({
      //   preferBuiltins: true,
      // }),
      // nodeResolve(),
      commonjs({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      terser(),
    ],
  },
  {
    input: 'dist/react-share-kit.d.ts',
    output: {
      file: 'dist/react-share-kit.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
]
