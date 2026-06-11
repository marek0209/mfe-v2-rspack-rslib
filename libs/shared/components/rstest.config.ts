import { defineConfig } from '@rstest/core';
import { withRslibConfig } from '@rstest/adapter-rslib';

export default defineConfig({
  extends: withRslibConfig(),
  testEnvironment: 'jsdom',
  setupFiles: ['../../../config/rstest.setup.ts'],
  include: ['src/**/*.test.{ts,tsx}'],
});
