import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { createRspackBaseConfig } from '../../config/rspack.base.mjs';
import mfConfig from './module-federation.config.mjs';

const appDir = path.dirname(fileURLToPath(import.meta.url));
const isDev = process.env.NODE_ENV !== 'production';

const baseConfig = createRspackBaseConfig({
  appDir,
  port: 3002,
  uniqueName: 'app2',
  isDev,
});

export default {
  ...baseConfig,
  plugins: [...(baseConfig.plugins ?? []), new ModuleFederationPlugin(mfConfig)],
};
