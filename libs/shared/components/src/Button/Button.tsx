import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import MuiButton from '@mui/material/Button';

export type ButtonProps = MuiButtonProps;

export function Button(props: ButtonProps): React.ReactElement {
  return <MuiButton variant="contained" {...props} />;
}
