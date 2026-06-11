import { RelayEnvironmentProvider } from 'react-relay';
import type { ReactNode } from 'react';
import { relayEnvironment } from './RelayEnvironment';

export interface RelayProviderProps {
  children: ReactNode;
}

export function RelayProvider({ children }: RelayProviderProps): React.ReactElement {
  return <RelayEnvironmentProvider environment={relayEnvironment}>{children}</RelayEnvironmentProvider>;
}
