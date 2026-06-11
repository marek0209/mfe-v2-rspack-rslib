import Typography from '@mui/material/Typography';
import { graphql, useLazyLoadQuery } from 'react-relay';
import type { UserGreetingApp1Query as UserGreetingQueryType } from './__generated__/UserGreetingApp1Query.graphql';

const userGreetingQuery = graphql`
  query UserGreetingApp1Query {
    country(code: "PL") {
      name
      capital
    }
  }
`;

export function UserGreeting(): React.ReactElement {
  const data = useLazyLoadQuery<UserGreetingQueryType>(userGreetingQuery, {});

  return (
    <Typography variant="body1" sx={{ mb: 2 }}>
      Hello from {data.country?.name ?? 'Guest'}
      {data.country?.capital ? ` — Capital: ${data.country.capital}` : ''}
    </Typography>
  );
}
