import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function TimeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
    

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Time Period
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem value="day" onClick={handleClose}>Day</MenuItem>
        <MenuItem value="week" onClick={handleClose}>Week</MenuItem>
        <MenuItem value="month" onClick={handleClose}>Month</MenuItem>
        <MenuItem value="year" onClick={handleClose}>Year</MenuItem>
      </Menu>
    </div>
  );
}