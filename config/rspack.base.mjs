import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rspack } from '@rspack/core';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';

const monorepoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** @param {{ appDir: string; port: number; uniqueName: string; isDev?: boolean }} options */
export function createRspackBaseConfig(options) {
  const { appDir, port, uniqueName, isDev = process.env.NODE_ENV !== 'production' } = options;

  return {
    context: appDir,
    entry: {
      main: './src/main.tsx',
    },
    output: {
      path: path.join(appDir, 'dist'),
      publicPath: 'auto',
      clean: true,
      uniqueName,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.join(appDir, 'src'),
        '@my-org/components': path.join(monorepoRoot, 'libs/shared/components/src/index.ts'),
        '@my-org/hooks': path.join(monorepoRoot, 'libs/shared/hooks/src/index.ts'),
        '@app1/components': path.join(monorepoRoot, 'libs/apps/app1/components/src/index.ts'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
                  ['@babel/preset-react', { runtime: 'automatic', development: isDev }],
                ],
                plugins: ['relay'],
              },
            },
          ],
          type: 'javascript/auto',
        },
      ],
    },
    plugins: [
      new rspack.HtmlRspackPlugin({
        template: './index.html',
      }),
      isDev ? new ReactRefreshPlugin() : null,
    ].filter(Boolean),
    devServer: {
      port,
      hot: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    watchOptions: {
      ignored: ['**/node_modules/**', '**/@mf-types/**'],
    },
    stats: 'errors-warnings',
  };
}
