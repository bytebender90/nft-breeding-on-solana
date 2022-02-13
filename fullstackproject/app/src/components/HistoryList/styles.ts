import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { fontWeight } from '@mui/system';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    maxHeight: 254,
    overflow: 'auto',
    marginTop: 4,
    '&::-webkit-scrollbar': {
      width: 18,
      height: 12,
    },
  },
  item: {
    display: 'flex',
    padding: theme.spacing('19px', '16px'),
  },
  amount: {
    color: theme.palette.text.primary,
    fontSize: '14px',
  },
  date: {
    color: theme.palette.text.disabled,
  },
  flexGrow: {
    flex: 1,
    padding: theme.spacing(0, 2),
  },
}));

export default styles;
