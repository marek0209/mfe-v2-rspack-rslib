import { App1Header } from '@app1/components';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DataTable, type DataTableRow } from '@my-org/components';
import { useToggle } from '@my-org/hooks';
import { UserGreeting } from './relay/UserGreeting';

const localRows: DataTableRow[] = [
  { id: 'a', name: 'Local Item A', status: 'Ready' },
  { id: 'b', name: 'Local Item B', status: 'Pending' },
];

export function App(): React.ReactElement {
  const { isOn, toggle } = useToggle(false);

  return (
    <>
      <App1Header title="App 1 — Host & Remote" />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          App 1
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Exposes <code>DataTable</code> via Module Federation 2.0.
        </Typography>
        <UserGreeting />
        <Box sx={{ my: 2 }}>
          <Typography variant="body2" onClick={toggle} sx={{ cursor: 'pointer' }}>
            Feature flag: {isOn ? 'ON' : 'OFF'} (click to toggle)
          </Typography>
        </Box>
        <DataTable title="Local Preview" rows={localRows} />
      </Container>
    </>
  );
}
