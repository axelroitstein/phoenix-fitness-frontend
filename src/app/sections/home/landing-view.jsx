'use client'
import { Button, Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import * as React from 'react';
import MediaCard from "./card";
import styles from '../../page.module.css'
import ButtonAppBar from "./header";
import PlanCard from "../users/user-plans";

export default function LandingView() {
  return (
    <Container
    
      sx={{ bgcolor: "#fafafa", border:'2px solid black' }}
    >
      <ButtonAppBar/>
      <Typography variant='h2' component={'h1'}>Bienvenido/a a Phoenix Fitness</Typography>
      <Typography variant='h4' >Si ya estás asociado a nuestros gimnasios:</Typography>
      <Button variant="contained" color='success' > Iniciá sesión </Button> o si todavía no lo hiciste: <Button variant ='contained' color='warning' > Asociate </Button>
      <br />
      <Typography>
        En nuestro gimnasio, nos enorgullece ser un lugar de transformación y
        bienestar para nuestra comunidad. Nuestro objetivo es proporcionar un
        entorno acogedor y motivador donde las personas de todas las edades y
        niveles de condición física puedan alcanzar sus metas de salud y
        acondicionamiento físico. A través de entrenadores altamente
        calificados, una amplia gama de equipos de vanguardia y una variedad de
        clases y programas personalizados, estamos comprometidos a ayudarte a
        alcanzar tu mejor versión física y mental. En nuestro gimnasio, no solo
        te ayudamos a ponerte en forma, sino que también te brindamos apoyo y
        motivación para que te sientas inspirado a mantener un estilo de vida
        saludable a largo plazo.
      </Typography>
        
      <Box sx={{ width: 100, border: "3px solid orange", m: 3, p: 4 }}>
        <Typography>Esto es una box</Typography>
        </Box>
    
    
      <MediaCard/>
    <Box sx={{border: '3px solid orange'}}>
      <video autoplay muted loop className={styles.video}>         
    <source src='/Gym video.mp4' type="video/mp4"/>       
    </video>
    </Box>

    <Typography variant='h2'> Que estás esperando? Tu transformación comienza ahora!</Typography>
    <PlanCard/>
    </Container>
  );
}
