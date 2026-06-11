import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Suspense, lazy } from 'react';
import { UserGreeting } from './relay/UserGreeting';

const RemoteDataTable = lazy(() => import('app1/DataTable'));

export function App(): React.ReactElement {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">App 2 — Host & Remote</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          App 2
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Consumes <code>app1/DataTable</code> with Module Federation 2.0 type hints.
        </Typography>
        <UserGreeting />
        <Box sx={{ mt: 3 }}>
          <Suspense fallback={<CircularProgress size={24} />}>
            <RemoteDataTable title="Remote Orders from App 1" />
          </Suspense>
        </Box>
      </Container>
    </>
  );
}
