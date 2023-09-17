'use client'
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import ButtonAppBar from "../home/header";
import Image from "next/image";
import BasicModal from "./gym-modal";

export default function GymView(){
    return(
        <>
        <ButtonAppBar/>
        <Container>
        <Typography variant="h2" component={"h1"}>
          Bienvenido de nuevo, [Nombre de usuario]
        </Typography>
        
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4'> CLIENTES</Typography>
            <Image src='https://i.ibb.co/SyzTQmq/gym-client.png' width={300} height={150} alt='Gym facilites' ></Image>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!.</Typography>
            <BasicModal/>
        </Paper>
        <br />
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4'> INGRESOS</Typography>
            <Image src='https://i.ibb.co/xzjwq6p/Fitness-money-icon.webp' width={300} height={150} alt='Gym facilites' ></Image>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
        </Paper>

            <Typography variant='h3'>Modificación de datos</Typography>
            <Typography>En esta sección podrás modificar información relacionada a los clientes, como su contraseña o sus datos personales, siempre y cuando se soliciten dichos cambios</Typography>

            <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4'> MODIFICACIÓN DE CONTRASEÑA </Typography>
            <Image src='https://i.ibb.co/nRpygfh/Lock-icon.png' width={300} height={150} alt='Gym facilites' ></Image>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        <br />
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4'> MODIFICACIÓN DE USUARIO/CORREO ELECTRÓNICO </Typography>
            <Image src='https://i.ibb.co/M15NSKS/User-icon.png' width={300} height={150} alt='Gym facilites' ></Image>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        <br />
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4'> MODIFICACIÓN DE DATOS PERSONALES </Typography>
            <Image src='https://i.ibb.co/r4q3jZ7/Personal-info-icon.webp' width={300} height={150} alt='Gym facilites' ></Image>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        <br />
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4'> RUTINAS Y DIETAS DE CLIENTES </Typography>
            <Image src='https://i.ibb.co/b7sgFHc/Routines-and-diets-icon.webp' width={300} height={150} alt='Gym facilites' ></Image>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        </Container>
        <br />
        </>
    );
}