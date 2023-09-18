'use client'
import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const theme = createTheme({
    palette: {
      primary: {
        main: '#333333',
      },
    },
  });

export default function MuiThemeProvider({children}){
    return(
       <ThemeProvider theme = {theme}>
        <CssBaseline/>
        {children}
        </ThemeProvider>
    )
}