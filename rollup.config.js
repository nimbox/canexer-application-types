/* eslint-disable import/no-anonymous-default-export */
import typescript from 'rollup-plugin-typescript2';
import pack from './package.json';

export default {

    input: 'src/application/types/index.ts',
    output: [{
        dir: 'dist/',
        format: 'esm',
        exports: 'named',
        sourcemap: true
    }],

    external: [
        ...Object.keys(pack.dependencies || {}),
        ...Object.keys(pack.peerDependencies || {})
    ],

    plugins: [

        typescript({
            clean: true,
            tsconfigOverride: {
                include: ['src/application']
            }
        })

    ]

};