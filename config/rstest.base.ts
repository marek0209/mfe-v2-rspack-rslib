import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rstest/core';

const monorepoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function createAppRstestConfig(appDir: string): ReturnType<typeof defineConfig> {
  return defineConfig({
    testEnvironment: 'jsdom',
    setupFiles: [path.join(monorepoRoot, 'config/rstest.setup.ts')],
    include: ['src/**/*.test.{ts,tsx}'],
    source: {
      alias: {
        '@': path.join(appDir, 'src'),
        '@my-org/components': path.join(monorepoRoot, 'libs/shared/components/src/index.ts'),
        '@my-org/hooks': path.join(monorepoRoot, 'libs/shared/hooks/src/index.ts'),
        '@app1/components': path.join(monorepoRoot, 'libs/apps/app1/components/src/index.ts'),
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('test'),
      },
    },
    tools: {
      swc: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    },
  });
}
