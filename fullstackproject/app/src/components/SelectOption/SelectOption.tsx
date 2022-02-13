import React, { FC, Fragment, ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

//styles
import withStyles from './styles';
interface ISelectOptionProps {
  classes: any;
  TokenList: ITokenList[];
  sx: any;
  inputProps: any;
  defaultValue: number;
  setTokenSize: (value: string) => void;
  isLogo: boolean;
}

export interface ITokenList {
  label: string;
  value: string;
  img: string;
}

const SelectOption: FC<ISelectOptionProps> = (props) => {
  const { sx, TokenList, inputProps, defaultValue, setTokenSize, isLogo } =
    props;

  return (
    <Box>
      <FormControl fullWidth variant='standard'>
        <Select
          defaultValue={defaultValue}
          inputProps={inputProps}
          disableUnderline
          sx={sx}
        >
          {TokenList.map((item: ITokenList, index: number) => (
            <MenuItem
              value={index}
              key={index}
              onClick={() => setTokenSize(item.value)}
            >
              {isLogo && (
                <img
                  src={item.img}
                  style={{ margin: '0 0 -4px 0', height: 25 }}
                />
              )}

              <span style={{ marginTop: '6px' }}> {item.value}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default withStyles(SelectOption);
