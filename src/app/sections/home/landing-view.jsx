'use client'
import { Button, Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import * as React from 'react';
import MediaCard from "./card";
import styles from '../../page.module.css'
import ButtonAppBar from "./header";
import PlanCard from "../users/user-plans";
import Link from "next/link";
export default function LandingView() {
  return (
    <Container sx={{ background: 'linear-gradient(180deg, #181818, #ff4500)' , color:'#fafafa'}}
    >
      <ButtonAppBar/>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column", p:1, m:1}}>
      
      <Typography variant='h2' component={'h1'} sx={{m:2}}>Bienvenido/a a Phoenix Fitness</Typography>
      <Typography variant='h4'sx={{m:2} }>Si ya estás asociado a nuestros gimnasios:</Typography>
      <Link href='../../login'>
      <Button variant="contained"  size='large' sx={{m:2, bgcolor:'#181818'}}> Iniciá sesión </Button>
      </Link>
      <Typography variant='h4'sx={{m:2, color:'#ffd700'} }>O si todavía no lo hiciste: </Typography> 
      <Link href='../../register'>
      <Button variant ='contained' color='warning' size='large' sx={{m:2}} > Asociate </Button>
      </Link>
      <br />
      
      <Typography sx={{fontWeight: 600}}>
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
      

      </Box>
  
      {/* <Box sx={{ width: 100, border: "3px solid orange", m: 3, p: 4 }}>
        <Typography>Esto es una box</Typography>
        </Box> */}
    
    
      <MediaCard/>
    {/* <Box sx={{border: '3px solid orange'}}>
      <video autoplay muted loop className={styles.video}>         
    <source src='/Gym video.mp4' type="video/mp4"/>       
    </video>
    </Box> */}

    <Typography variant='h2'sx={{textAlign:'center'}}> Que estás esperando? Tu transformación comienza ahora!</Typography>
    <PlanCard/>
    </Container>
  );
}
