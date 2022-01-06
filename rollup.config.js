import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

const config = [
  {
    external: ['bowser'],
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/lightstreams-onboarding.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/lightstreams-onboarding.es.js',
        format: 'es',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/lightstreams-onboarding.bundle.js',
        format: 'iife',
        name: 'LightstreamsOnboarding',
      },
    ],
    plugins: [typescript(), resolve()],
  },
];

export default config;
