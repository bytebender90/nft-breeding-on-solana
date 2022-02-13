import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  item: {},
  itemLabel: {
    display: 'flex',
    alignItems: 'end',
    '& span': {
      marginLeft: theme.spacing(1),
      lineHeight: '10px',
      fontSize: 16,
    },
  },
  itemColor: {
    width: 20,
    height: 20,
  },
  itemValue: {
    fontSize: 18,
    marginTop: theme.spacing(0.5),
  },
}));

export default styles;
