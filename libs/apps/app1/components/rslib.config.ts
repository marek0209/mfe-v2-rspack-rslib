import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      dts: true,
    },
  ],
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
});
