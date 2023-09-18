'use client'
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import ResponsiveAppBar from "./user-header";
import Image from "next/image";
import BasicModal from "./gym-modal";

export default function GymView(){
    return(
        <>
        <ResponsiveAppBar/>
        <Container>
        <Typography variant="h2" component={"h1"} sx={{color:'#fafafa'}}>
          Bienvenido de nuevo, [Nombre de usuario]
        </Typography>
        
        <Paper sx={{bgcolor: '#181818', color:'#fafafa', mb:2}}>
            <Typography variant='h4' sx={{m:2, textAlign:'center'}}> CLIENTES </Typography>
            <Image src='https://i.ibb.co/SyzTQmq/gym-client.png' width={300} height={150} alt='Client icon' style={{border:'2px solid white'}} ></Image>
            <Typography variant='body1' sx={{m:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!.</Typography>
            <BasicModal/>
        </Paper>
        
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4' sx={{m:2, textAlign:'center'}}> INGRESOS </Typography>
            <Image src='https://i.ibb.co/xzjwq6p/Fitness-money-icon.webp' width={300} height={150} alt='Income icon' style={{border:'2px solid white'}}></Image>
            <Typography variant='body1' sx={{p:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
        </Paper>

            <Box sx={{color:'#fafafa'}}> 
            
            <Typography variant='h3' sx={{textDecoration:'underline'}}>Modificación de datos</Typography>
            <Typography>En esta sección podrás modificar información relacionada a los clientes, como su contraseña o sus datos personales, siempre y cuando se soliciten dichos cambios.</Typography>

            </Box>

            <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4' sx={{m:2, textAlign:'center'}}> MODIFICACIÓN DE CONTRASEÑA </Typography>
            <Image src='https://i.ibb.co/nRpygfh/Lock-icon.png' width={300} height={150} alt='Password icon' style={{border:'2px solid white'}} ></Image>
            <Typography variant='body1' sx={{m:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        <br />
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4' sx={{m:2, textAlign:'center'}}> MODIFICACIÓN DE USUARIO/CORREO ELECTRÓNICO </Typography>
            <Image src='https://i.ibb.co/M15NSKS/User-icon.png' width={300} height={150} alt='Mail icon' style={{border:'2px solid white'}}></Image>
            <Typography variant='body1' sx={{m:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        <br />
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4' sx={{m:2, textAlign:'center'}}> MODIFICACIÓN DE DATOS PERSONALES </Typography>
            <Image src='https://i.ibb.co/r4q3jZ7/Personal-info-icon.webp' width={300} height={150} alt='Personal info icon' style={{border:'2px solid white'}} ></Image>
            <Typography variant='body1' sx={{m:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        <br />
        <Paper sx={{bgcolor: '#181818', color:'#fafafa'}}>
            <Typography variant='h4'sx={{m:2, textAlign:'center'}}> RUTINAS Y DIETAS DE CLIENTES </Typography>
            <Image src='https://i.ibb.co/b7sgFHc/Routines-and-diets-icon.webp' width={300} height={150} alt='Gym facilites' style={{border:'2px solid white'}} ></Image>
            <Typography variant='body1' sx={{m:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis delectus aspernatur ab incidunt minima eos, libero, modi laudantium beatae necessitatibus unde voluptates suscipit tempora! Maxime voluptatem dicta illum consequuntur!</Typography>
            <BasicModal/>
        </Paper>
        </Container>
        <br />
        </>
    );
}