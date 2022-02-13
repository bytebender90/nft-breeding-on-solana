import { ReactNode, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import Paper from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import FormHelperText from '@mui/material/FormHelperText';
import Collapse from '@mui/material/Collapse';
import InputLabel from '@mui/material/InputLabel';
import classNames from 'classnames';

import withStyles from './styles';
import { padding } from '@mui/system';

interface TextInputProps {
  classes: any;
  className?: string;
  backgroundImage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  endLabel?: ReactNode;
  placeholder?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  round?: boolean;
  type?: string;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  name?: string;
  value?: string | number;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputMode?: any;
}

const TextInput = (props: TextInputProps) => {
  const {
    classes,
    className,
    backgroundImage,
    size = 'md',
    label,
    endLabel,
    endIcon,
    startIcon,
    placeholder,
    round,
    type = 'number',
    value,
    name,
    multiline,
    minRows,
    maxRows,
    error,
    errorMessage,
    disabled,
    onChange,
    onBlur,
    onKeyDown,
    inputMode,
  } = props;

  return (
    <div className={className}>
      <Paper className={classes.label}>
        <InputLabel className={classes.space}>{label}</InputLabel>
        <div className={classes.flexGrow} />
        <InputLabel>{endLabel}</InputLabel>
      </Paper>
      <Paper
        className={classNames({
          [classes.root]: true,
          [classes.round]: round,
          [classes.error]: error,
          [classes.backgroundImage]: backgroundImage,
        })}
      >
        {startIcon}
        <InputBase
          className={classNames({
            [classes.inputContent]: true,
            [classes[size]]: true,
          })}
          placeholder={placeholder}
          type={type}
          fullWidth
          multiline={multiline}
          maxRows={maxRows}
          minRows={minRows}
          value={value}
          name={name}
          disabled={disabled}
          autoComplete={'nope'}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          inputMode={inputMode}
        />
        {endIcon}
      </Paper>
      <Collapse in={error}>
        <FormHelperText error={error}>{errorMessage}</FormHelperText>
      </Collapse>
    </div>
  );
};

export default withStyles(TextInput);
