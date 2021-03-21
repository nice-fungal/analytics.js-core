import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';


export default [
  {
    input: 'build/index.js',

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      nodeResolve({
        browser: true,
      }),

      visualizer({
        filename: 'rollup-plugin-visualizer.html',
      }),
    ],
    output: [
      { file: 'dist/analytics.core.js', format: 'iife', name: 'analytics' },
    ],
  }
];
