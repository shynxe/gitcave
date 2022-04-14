import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import { Input } from '@mui/material';
import { red } from '@mui/material/node/colors';
import { height, margin, padding } from '@mui/system';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, padding:'0rem' }}>
      <AppBar position="static">
        <Toolbar sx={{ padding: '0.5rem' }}>
          <div>
            <img src='./logo.png' 
              alt='logo'
              style={{
                height:'3rem', 
                marginRight: '1.75rem'
              }}
            />
          </div>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Gitcave
          </Typography>
          <Button sx={{
            textWrap: 'none',
            minWidth: 200,
            backgroundColor:'black',
            ml: 'auto' }} color="inherit">Switch User</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}