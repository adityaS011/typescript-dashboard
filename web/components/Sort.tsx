import { SwapVert } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export const Sort = ({
  sortOptions,
  value,
  handleSortChange,
}: {
  sortOptions: { label: string; value: string }[];
  value: string;
  handleSortChange: (value: string) => void;
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
    handleSortChange(selectedValue);
    handleClose();
  };

  return (
    <>
      <Button onClick={handleClick} aria-label="Filter tasks">
        <SwapVert className="text-gray-600 mr-1" />
        <p className="text-gray-600 font-medium capitalize">{value}</p>
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {sortOptions.map((option) => (
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
