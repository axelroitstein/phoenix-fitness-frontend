'use client'
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram} from "@mui/icons-material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from "@mui/material/Grid";
import Link from "next/link";


import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Link href='/' style={{textDecoration:'none'}}>
              <Typography variant="h6" color="#ff4500" sx={{fontWeight:600}} gutterBottom>
                Phoenix <Typography sx={{display:'inline', fontWeight:600}} variant='h6' color='#ffd700' >Fitness</Typography>
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#fafafa" gutterBottom>
              Legales
            </Typography>
            <Typography variant="body2" color="#fafafa">
              Política de privacidad
            </Typography>
            <Typography variant="body2" color="#fafafa">
              Pautas de convivencia
            </Typography>
            <Typography variant="body2" color="#fafafa">
              Términos y condiciones
            </Typography>
            <Typography variant="body2" color="#fafafa">
              Defensa al consumidor
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#fafafa" gutterBottom>
              Redes sociales
            </Typography>   
            <Link href="https://www.facebook.com/" style={{color:'#fafafa'}}>
              <Facebook fontSize="large"/>
            </Link>
            <Link
              href="https://www.instagram.com/"
              style={{color:'#fafafa'}}
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram fontSize="large" />
            </Link>
            <Link href="https://www.youtube.com/" style={{color:'#fafafa'}}>
              <YouTubeIcon fontSize="large"/>
            </Link>
        </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="#fafafa" align="center">
            {"Phoenix Group ® Copyright "}
            {new Date().getFullYear()}
            {". Todos los derechos reservados."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}