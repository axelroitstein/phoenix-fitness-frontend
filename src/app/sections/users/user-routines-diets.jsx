import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RoutineDietCard() {
  return (
    <>
    
    <Box sx={{width:250}}>
    
    <Card sx={{bgcolor:'#181818', color:'#fafafa'}}>
      <CardContent>
        <Typography variant = 'h2' component={'h1'} color="#fafafa" gutterBottom>
          Día 1
        </Typography>
        <Typography variant="h5" component="div">
          Lorem Ipsum
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#fafafa">
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </Typography>
        </CardContent>
     
    </Card>

    <Card sx={{ bgcolor:'#181818', color:'#fafafa' }}>
      <CardContent>
        <Typography variant='h2' component={'h1'} color="#fafafa" gutterBottom>
          Día 2
        </Typography>
        <Typography variant="h5" component="div">
          Lorem Ipsum
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#fafafa">
        <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
        </ul>
        </Typography>
        </CardContent>
      
    </Card>

    </Box>

    </>  
  );
}