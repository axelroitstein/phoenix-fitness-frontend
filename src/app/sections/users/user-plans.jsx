'use client'
import * as React from 'react';
import styles from '../../page.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function PlanCard() {
  return (
    <>
    
    <Box sx={{ display: 'flex',
          justifyContent: 'space-around',
          p: 1,
          m: 1, textAlign:'center'}}>
    
    <Card sx={{bgcolor:'#181818', color:'#fafafa', border:' 2px solid white'}}>
      <CardContent>
        <Typography variant = 'h2' component={'h1'} color="#fafafa" gutterBottom>
          Plan Premium
        </Typography>
        <Typography variant="h4" component="div">
           Valor: $25.000
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#fafafa" variant='h6'>
          <ul className={styles.nodiscs}>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            
          </ul>
        </Typography>
        </CardContent>
      <CardActions>
      
      <Link href='../../register' style={{textDecoration:'none', color:'#181818'}}>
      <Button variant='Contained' sx={{border:'2px solid white', bgcolor:'#ffd700', "&:hover": {backgroundColor: "#ffd700", } }}> Quiero este plan </Button>
      </Link>

      </CardActions>
    </Card>

    <Card sx={{ bgcolor:'#181818', color:'#fafafa', border:' 2px solid white' }}>
      <CardContent>
        <Typography variant='h2' component={'h1'} color="#fafafa" gutterBottom>
          Plan Básico
        </Typography>

        <Typography variant="h4" component="div">
          Valor: $10.000
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#fafafa" variant='h6'>
        <ul className={styles.nodiscs}>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
        </ul>
        </Typography>

        </CardContent>
      <CardActions>
        <Link href='../../register' style={{textDecoration:'none', color:'#fafafa'}}>
          <Button variant='Contained' sx={{border:'2px solid white', bgcolor:'#ff4500', "&:hover": {backgroundColor: "#ff4500", }}}> Quiero este plan </Button>
        </Link>
      </CardActions>
    </Card>

    </Box>

    </>  
  );
}