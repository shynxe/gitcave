import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, padding:'0rem' }}>
      <AppBar position="static">
        <Toolbar sx={{ padding: '0.5rem' }}>
          <div>
            <GitHubIcon sx={{fontSize: "3rem", marginRight: "5px"}}/>
          </div>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, marginRight: "15px" }}>
            Gitcave
          </Typography>
          <Button sx={{
            textWrap: 'none',
            backgroundColor:'black',
            ml: 'auto' }} color="inherit">Switch User</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
