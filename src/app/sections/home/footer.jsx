import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";


import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Phoenix Fitness
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legales
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Política de privacidad
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PAutas de convivencia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Términos y condiciones
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Defensa al consumidor
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Redes sociales
            </Typography>   
           
        </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Phoenix Group ® Copyright "}
            {new Date().getFullYear()}
            {". Todos los derechos reservados."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}