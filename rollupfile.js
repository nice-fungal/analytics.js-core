import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';


export default [
  {
    input: 'lib/index.js',

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
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
