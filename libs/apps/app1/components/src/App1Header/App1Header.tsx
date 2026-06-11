import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export interface App1HeaderProps {
  title?: string;
}

export function App1Header({ title = 'App 1' }: App1HeaderProps): React.ReactElement {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
