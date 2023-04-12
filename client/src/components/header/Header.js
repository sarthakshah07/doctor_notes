import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { FaFileMedicalAlt, FaHome, FaRegAddressCard } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import './Header.css';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ justifyContent:'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MENU
      </Typography>
      <Divider />
      <List  sx={{width:"100%"}}>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center',display:"flex",flexDirection:"column"}}>
            <Button className='logo'><FaHome style={{ color: "black", scale: "1.5", margin: "10px" }} /><Typography color="black">Home</Typography></Button>
            <hr/>
              <Button className='logo'><FiLogIn style={{ color: "black", scale: "1.5", margin: "10px" }} /><Typography color="black">Login</Typography></Button>
              <hr/>
              <Button className='logo'><FaRegAddressCard style={{ color: "black", scale: "1.5", margin: "10px" }} /><Typography color="black">Register</Typography></Button>  
              <hr/>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "transparent" }}>
        <Grid container justifyContent="center">
          <Grid item xs={10} display="flex">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <MonitorHeartIcon sx={{ md: 2, display: { xs: "none", sm: "flex" } }} style={{ color: "white", scale: "2" }} />
            </Toolbar>
            <Grid item xs={8} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

              <Typography variant='h4' sx={{ fontSize: { xs: "20px", sm: "40px" } }}><span>P</span>atient <span>R</span>ecord <span>S</span>ystem</Typography>

            </Grid>

            <Grid item xs={8} sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "end", alignItems: "center" }}>
              <Button className='logo'><FaHome style={{ color: "white", scale: "1.5", margin: "10px" }} /><Typography color="white">Home</Typography></Button>
              <Button className='logo'><FiLogIn style={{ color: "white", scale: "1.5", margin: "10px" }} /><Typography color="white">Login</Typography></Button>
              <Button className='logo'><FaRegAddressCard style={{ color: "white", scale: "1.5", margin: "10px" }} /><Typography color="white">Register</Typography></Button>
            </Grid>
          </Grid>
        </Grid>

      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;