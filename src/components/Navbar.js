import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(34, 37, 43, 0.8)' }}>
      <Toolbar>
        <Button color="inherit" href="#home">Home</Button>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
