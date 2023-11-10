import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'

/**@type {import("rollup").RollupOptions} */
export default {
    input: 'src/main.jsx',
    output: {
        dir: 'dist/',
        format: 'esm',
    },
    plugins: [
        babel({presets: ['solid'], babelHelpers: 'bundled'}),
        nodeResolve()
    ]
}