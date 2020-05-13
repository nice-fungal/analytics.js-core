import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';


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
    ],
    output: [
      { file: 'dist/analytics.core.js', format: 'iife', name: 'analytics' },
    ],
  }
];
