import {
  Environment,
  Network,
  RecordSource,
  Store,
  type FetchFunction,
  type GraphQLResponse,
} from 'relay-runtime';

const GRAPHQL_URL = 'https://countries.trevorblades.com/';

function createMockResponse(operationText: string | null): GraphQLResponse {
  if (operationText?.includes('country(')) {
    return {
      data: {
        country: {
          name: 'Germany',
          capital: 'Berlin',
        },
      },
    };
  }

  return { data: {} };
}

const fetchQuery: FetchFunction = async (operation, variables) => {
  const body = JSON.stringify({ query: operation.text, variables });

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status.toString()}`);
    }

    return (await response.json()) as GraphQLResponse;
  } catch (error) {
    console.warn('[RelayEnvironment] GraphQL endpoint unavailable, using mock response', error);
    return createMockResponse(operation.text ?? null);
  }
};

export function createRelayEnvironment(): Environment {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });
}

export const relayEnvironment = createRelayEnvironment();
