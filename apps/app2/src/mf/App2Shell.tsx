import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface App2ShellProps {
  label?: string;
}

export default function App2Shell({ label = 'App 2 Shell' }: App2ShellProps): React.ReactElement {
  return (
    <Box sx={{ p: 2, border: '1px dashed grey' }}>
      <Typography variant="subtitle1">{label}</Typography>
    </Box>
  );
}
