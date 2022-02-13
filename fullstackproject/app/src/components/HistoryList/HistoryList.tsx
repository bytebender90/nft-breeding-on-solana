import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
//styles
import withStyles from './styles';
interface IHistoryListProps {
  classes: any;
  historyList: IHistoryList[];
}

export interface IHistoryList {
  amount: string;
  date: string;
}

const HistoryList = (props: IHistoryListProps) => {
  const { classes, historyList } = props;
  return (
    <Box className={classes.root}>
      {historyList.map((item: IHistoryList, index: number) => (
        <Fragment key={index}>
          <div className={classes.item}>
            <span className={classes.amount}>{item.amount}</span>
            <div className={classes.flexGrow} />
            <span className={classes.date}>{item.date}</span>
          </div>
          <Divider />
        </Fragment>
      ))}
    </Box>
  );
};

export default withStyles(HistoryList);
