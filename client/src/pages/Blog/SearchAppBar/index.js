import React from 'react';
import SearchBar from "material-ui-search-bar";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function SearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Categories
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem onClick={handleClose}>Profile</MenuItem>

      </Menu>    
      
      <SearchBar
        value="search"
      // onChange={(newValue) => this.setState({ value: newValue })}
      // onRequestSearch={() => doSomethingWith(this.state.value)}
      />
    </div>

  );
}