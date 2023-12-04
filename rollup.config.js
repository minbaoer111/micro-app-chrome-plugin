import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser"
import commonjs from 'rollup-plugin-commonjs'

const env = process.env.NODE_ENV

const config = {
    input: 'src/index.js',
    output: [
        { file: 'dist/index.esm.js', format: 'es' },
        { file: 'dist/index.umd.js', format: 'umd', name: 'env', globals: { react: 'React', 'react-dom': 'ReactDOM', 'prop-types': 'PropTypes', 'better-scroll': 'BScroll' } }
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        commonjs(),
        terser()
    ],
    external: ['react', 'react-dom', 'prop-types'],
    devServer: {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
};

export default config