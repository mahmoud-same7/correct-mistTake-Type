import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{background:'#fff'}}>
          <Toolbar>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
