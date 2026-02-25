import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(34, 37, 43, 0.8)', backdropFilter: 'blur(6px)' }}>
      <Toolbar sx={{ justifyContent: 'center', minHeight: 64 }}>
        <Box sx={{ display: 'flex', gap: 0.5, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <Button size="small" color="inherit" href="#home">Home</Button>
          <Button size="small" color="inherit" href="#about">About</Button>
          <Button size="small" color="inherit" href="#timeline">Timeline</Button>
          <Button size="small" color="inherit" href="#skills">Skills</Button>
          <Button size="small" color="inherit" href="#projects">Projects</Button>
          <Button size="small" color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
