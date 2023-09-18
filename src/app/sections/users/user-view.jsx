'use client'
import { Box, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import ResponsiveAppBar from "./user-header.jsx";
import RoutineDietCard from "./user-routines-diets.jsx";

export default function UserView() {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ background: 'linear-gradient(180deg, #181818, #ff4500)' , color:'#fafafa'}}>
        <Typography variant="h2" component={"h1"} sx={{textAlign:'center'}}>
          Bienvenido [usuario], el cambio empieza ACÁ
        </Typography>

        <Paper sx={{bgcolor:'#181818', color:'#fafafa'}}>
            <Box sx={{display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          m: 1,}}>
            <Image src='https://i.ibb.co/0yg5cwd/Gym-structure-2.jpg' width={300} height={150} alt='Gym facilites' ></Image>
            <br />
            <Image src='https://i.ibb.co/zZgTXF3/Gym-Wellness-Gym-Facilities-1024x448.webp' width={300} height={150} alt='Gym facilites' ></Image>
            
            
            </Box>
            
            <Box sx={{display: 'flex',
          justifyContent: 'flex-end',
          p: 1,
          m: 1}}>

            <Typography>
            ¡Bienvenido a Phoenix Fitness! 
            Hola [Nombre del Usuario], Te damos la
            bienvenida a Phoenix Fitness, tu destino para alcanzar tus metas.
            Nuestro equipo está aquí para apoyarte en cada paso del camino.
            Explora nuestras instalaciones de vanguardia y únete a nuestras
            clases de grupo energéticas. Nuestro gimnasio cuenta con:

            <ul>
                <li>Servicios de lockers</li>
                <li>Amplios horarios</li>
                <li>Las más nuevas y mejores máquinas</li>
                <li>Salón climatizado</li>
                <li>Acceso a Wifi</li>
            </ul>
            
            Estamos aquí para ayudarte a lograr un
            estilo de vida más activo y saludable. ¡Esperamos verte pronto!
            
            Atentamente, El Equipo de Phoenix Fitness
            
          </Typography>    
            
            </Box>
            
        </Paper>
        <Box sx={{background:'linear-gradient(to bottom, transparent 0%, black 100%)'}}>


        <Typography variant="h2" component={"h1"} sx={{textAlign:'center'}}>
          Dietas
          <RoutineDietCard/>
        </Typography>
       

        
        <Typography variant="h2" component={"h1"} sx={{textAlign:'center'}}>
          Rutinas
          <RoutineDietCard/>
        </Typography>
        
        </Box>
      

        <Typography variant="h2" component={"h1"} sx={{textAlign:'center', textDecoration:'underline'}}>
          Horarios
        </Typography>
        <Box sx={{background:'linear-gradient(to bottom, transparent 0%, black 100%)', color:'#fafafa', mb:2}}>
          <Box sx={{p:3}}>

          <ul>
            <Typography variant='h4' >

            <li>  Lunes: 08 a 23 hs </li>
            <li>  Martes: 08 a 23 hs</li>
            <li>  Miércoles: 08 a 23 hs</li>
            <li>  Jueves: 08 a 23 hs</li>
            <li>  Viernes: 08 a 23 hs</li>
            <li>  Sábados, domingos y feriados: 09 a 13 hs</li>
            
            </Typography>
          </ul>
          </Box>
        </Box>
      </Container>
    </>
  );
}
