import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: "400" })

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, p:5 }}>
      <AppBar position="fixed" sx={{bgcolor:'#333333'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: bebasNeue,
              letterSpacing: '.3rem',
              color: '#ff4500',
              textDecoration: 'none', }}>
            PHOENIX FITNESS
          </Typography>
            
            
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            <Link href='#' style={{textDecoration:'none', color:'#ffd700'}}>
              Quiénes Somos
            </Link>
          </Typography>
            

          <Typography variant="body1" component="div" sx={{ flexGrow: 1}}>
            <Link href='#' style={{textDecoration:'none', color:'#ffd700'}}>
              Horarios
            </Link>
          </Typography>

          <Button color="warning" variant='contained'>Asociate</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}