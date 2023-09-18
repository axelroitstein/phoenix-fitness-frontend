'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: "400" })
const pages = ['Nosotros', 'Dietas', 'Rutinas', 'Planes', 'Horarios'];
const settings = ['Mis pagos', 'Salir'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1, p:5, mb:4}}>
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src='https://i.ibb.co/7QW3YBg/phoenix-fitness-logo.webp' alt='Phoenix fitness Logo' width= '100' height='100' style={{padding:'5px'}}></Image>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: bebasNeue,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ff4500',
              textDecoration: 'none',
            }}
          >
            Phoenix Fitness
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem sx={{bgcolor:'#181818', color:'#ff4500'}} key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, ml:3, display: { xs: 'none', md: 'flex', justifyContent: 'space-around' } }}>
            
             <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontSize: 22 }}>
             <Link href='#' style={{textDecoration:'none', color:'#fafafa'}}>
               Nosotros
             </Link>
           </Typography>
 
           <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontSize: 22}}>
             <Link href='#' style={{textDecoration:'none', color:'#fafafa'}}>
               Dietas
             </Link>
           </Typography>
           
           <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontSize: 22}}>
             <Link href='#' style={{textDecoration:'none', color:'#fafafa'}}>
               Rutinas
             </Link>
           </Typography>

           <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontSize: 22}}>
             <Link href='#' style={{textDecoration:'none', color:'#fafafa'}}>
               Planes
             </Link>
           </Typography>
            
           <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontSize: 22}}>
             <Link href='#' style={{textDecoration:'none', color:'#fafafa'}}>
               Horarios
             </Link>
           </Typography>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Axel Roitstein" src="/static/images/avatar/2.jpg" sx={{bgcolor:'#ff4500'}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;