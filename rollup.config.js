import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import bundleSize from 'rollup-plugin-bundle-size'

const banner = "'use client';"

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        exports: 'named',
        banner,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        banner,
      },
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime', 'jsonp'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      bundleSize(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.d.ts', format: 'es' },
      { file: 'dist/index.d.cts', format: 'es' },
    ],
    external: ['react', 'react-dom', 'jsonp'],
    plugins: [dts()],
  },
]
