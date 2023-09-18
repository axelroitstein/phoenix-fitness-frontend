
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material';

export default function MediaCard(props) {
  return (
    <>

    <Card sx={{ maxWidth: 345, bgcolor:'#181818', color:'#fafafa' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ibb.co/M9q39NV/People-at-the-gym.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Clases en grupo
        </Typography>
        <Typography variant="body2" color="#fafafa">
          Disfruta de actividades grupales como clases de Spinning, Yoga y meditación, entrenamiento funcional, Zumba Fitness y más.
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, bgcolor:'#181818', color:'#fafafa' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ibb.co/FxH3LD0/Gym-structure-1080x675.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Equipo y tecnología
        </Typography>
        <Typography variant="body2" color="#fafafa">
          Nuestro gimnasio está equipado con lo último en tecnología, lo cual incluye máquinas cardiovasculares, el poder tomar clases virtuales, un sistema de sonido e iluminación para crear un ambiente óptimo durante tus clases y entrenamientos, etc.
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, bgcolor:'#181818', color:'#fafafa' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ibb.co/pWpsNcp/people-sitting-on-floor-in-gymnasium-eating-salads-royalty-free-image-758281093-1550159353.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Servicios disponibles
        </Typography>
        <Typography variant="body2" color="#fafafa">
          Contamos con servicios adicionales para ayudar a tu transformación, tales como entrenamientos personalizados, nutrición y asesoramiento dietético para una vida saludable, áreas de descanso y relajación, entre otras cosas.
        </Typography>
      </CardContent>
    </Card>
    
    
    </>
    
  );
}