import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
  name: 'app1',
  filename: 'remoteEntry.js',
  exposes: {
    './DataTable': './src/mf/DataTableRemote.tsx',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^19.0.0', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^19.0.0', eager: true },
    '@mui/material': { singleton: true, requiredVersion: '^6.5.0', eager: true },
    '@emotion/react': { singleton: true, requiredVersion: '^11.14.0', eager: true },
    '@emotion/styled': { singleton: true, requiredVersion: '^11.14.0', eager: true },
  },
});
