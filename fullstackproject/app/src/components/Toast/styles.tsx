import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles = withStyles((theme: Theme) => ({
  notificationContainer: {
    fontSize: '14px',
    boxSizing: 'border-box',
    position: 'fixed',
    bottom: '12px',
    right: '12px',
    transition: 'transform .6s ease-in-out',
    animation: 'toast-in-right .7s',
  },
  notificationToast: {
    background: '#fff',
    transition: '.3s ease',
    position: 'relative',
    pointerEvents: 'auto',
    overflow: 'hidden',
    margin: '0 0 6px',
    padding: '30px',
    marginBottom: '15px',
    width: '300px',
    maxHeight: '100px',
    borderRradius: '3px 3px 3px 3px',
    boxShadow: '0 0 10px #999',
    color: '#000',
    opacity: '0.9',
    backgroundPosition: '15px',
    backgroundRepeat: 'no-repeat',
    height: '50px',
  },
  notificationMessage: {
    margin: '0',
    textAlign: 'left',
    height: '18px',
    marginLeft: '-1px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  notificationImage: {
    float: 'left',
    marginRight: '15px',
  },
  notificationImg: {
    width: '30px',
    height: '30px',
  },
}));

export default styles;
