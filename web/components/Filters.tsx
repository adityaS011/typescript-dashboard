import { FilterList } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export const Filters = ({
    filterOptions,
    value,
    onFilterChange
}:{
    filterOptions: {label: string, value: string}[]
    value: string
    onFilterChange: (value: string) => void
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (selectedValue: string) => {
    onFilterChange(selectedValue);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick} aria-label="Filter tasks">
        <FilterList />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {filterOptions.map((option) => (
          <MenuItem 
            key={option.value} 
            value={option.value}
            selected={value === option.value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};


