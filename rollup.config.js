import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'

/**@type {import("rollup").RollupOptions} */
export default {
    input: 'src/resources/main.jsx',
    output: {
        dir: 'dist/public/js/',
        format: 'esm',
    },
    plugins: [
        babel({ presets: ['solid'], babelHelpers: 'bundled' }),
        nodeResolve(),
    ]
}