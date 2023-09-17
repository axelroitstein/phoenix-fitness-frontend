import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PlanCard() {
  return (
    <>
    
    <Box sx={{width:250, display:'grid', placeItems:'center'}}>
    
    <Card sx={{bgcolor:'#181818', color:'#fafafa'}}>
      <CardContent>
        <Typography variant = 'h2' component={'h1'} color="#fafafa" gutterBottom>
          Plan Premium
        </Typography>
        <Typography variant="h5" component="div">
          $10.000
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
      <CardActions>
      <Button variant='Contained' sx={{border:'2px solid white', bgcolor:'#ffd700', color:'#181818', "&:hover": {backgroundColor: "#ffd700", } }}> Quiero este plan </Button>
      </CardActions>
    </Card>

    <Card sx={{ bgcolor:'#181818', color:'#fafafa' }}>
      <CardContent>
        <Typography variant='h2' component={'h1'} color="#fafafa" gutterBottom>
          Plan Básico
        </Typography>
        <Typography variant="h5" component="div">
          $25.000
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
      <CardActions>
      <Button variant='Contained' sx={{border:'2px solid white', bgcolor:'#ff4500', "&:hover": {backgroundColor: "#ff4500", }}}> Quiero este plan </Button>
      </CardActions>
    </Card>

    </Box>

    </>  
  );
}