import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
  name: 'app2',
  filename: 'remoteEntry.js',
  remotes: {
    app1: 'app1@http://localhost:3001/mf-manifest.json',
  },
  exposes: {
    './App2Shell': './src/mf/App2Shell.tsx',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^19.0.0', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^19.0.0', eager: true },
    '@mui/material': { singleton: true, requiredVersion: '^6.5.0', eager: true },
    '@emotion/react': { singleton: true, requiredVersion: '^11.14.0', eager: true },
    '@emotion/styled': { singleton: true, requiredVersion: '^11.14.0', eager: true },
  },
});
