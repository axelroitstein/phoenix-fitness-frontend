'use client'
import { Box, Container, Typography } from "@mui/material";
import ButtonAppBar from "../home/header.jsx";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import ResponsiveAppBar from "./user-header.jsx";
import RoutineDietCard from "./user-routines-diets.jsx";

export default function UserView() {
  return (
    <>
      <ButtonAppBar />
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h2" component={"h1"}>
          Bienvenido [usuario], el cambio empieza ACÁ
        </Typography>

        <Paper sx={{bgcolor:'orange'}}>
            <Box>
            <Image src='https://i.ibb.co/0yg5cwd/Gym-structure-2.jpg' width={300} height={150} alt='Gym facilites' ></Image>
            
            <Image src='https://i.ibb.co/zZgTXF3/Gym-Wellness-Gym-Facilities-1024x448.webp' width={300} height={150} alt='Gym facilites' ></Image>
            </Box>
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
        </Paper>

        <Paper>
        <Typography variant="h2" component={"h1"}>
          Dietas
          <RoutineDietCard/>
        </Typography>
        </Paper>

        <Paper>
        <Typography variant="h2" component={"h1"}>
          Rutinas
          <RoutineDietCard/>
        </Typography>
        </Paper>

        <Typography variant="h2" component={"h1"}>
          Horarios
        </Typography>
        <Paper sx={{bgcolor:'#181818', color:'#fafafa'}}>
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
        </Paper>
      </Container>
    </>
  );
}
