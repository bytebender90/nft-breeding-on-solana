import React, { FC } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import classNames from 'classnames';
//styles
import withStyles from './styles';
interface IButtonProps extends ButtonProps {
  classes: any;
  label: string;
  round: boolean;
  animation?: string;
  isLoading: boolean;
}

const Button: FC<IButtonProps> = (props) => {
  const {
    classes,
    label,
    round,
    variant,
    fullWidth,
    className,
    size,
    color,
    sx,
    onClick,
    animation,
    disabled,
    isLoading,
  } = props;

  return (
    <MuiButton
      classes={{
        root: classNames({
          [classes.root]: true,
          [classes.round]: round,
        }),
        contained: classes.contained,
        outlined: classes.outlined,
      }}
      className={className + ' ' + animation}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      color={color}
      sx={sx}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
};

export default withStyles(Button);
