'use client';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { FaChevronDown } from "react-icons/fa6";

export interface MuiDropdownProps {
  label: React.ReactNode | any;
  items: { label: React.ReactNode; onClick?: () => void }[];
}

export default function MuiDropdown({ label, items }: MuiDropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        endIcon={<FaChevronDown />}
        onClick={handleClick}
        sx={{ textTransform: 'none', fontWeight: 400 }}
      >
        {label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            onClick={() => {
              handleClose();
              item.onClick && item.onClick();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}