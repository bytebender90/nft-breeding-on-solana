import React, { FC } from 'react';
import classNames from 'classnames';
import withStyles from './styles';
interface ICardBodyProps {
  classes: any;
  center: boolean;
  lp: boolean;
}
const CardBody: FC<ICardBodyProps> = (props) => {
  const { classes, center, children, lp } = props;
  return (
    <div
      className={classNames({
        [classes.bodyContent]: true,
        [classes.bodyCenter]: center,
        [classes.bodyLP]: lp,
      })}
    >
      {children}
    </div>
  );
};

export default withStyles(CardBody);
