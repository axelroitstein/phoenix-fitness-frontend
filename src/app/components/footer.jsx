"use client";
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
            ? theme.palette.grey[100]
            : theme.palette.grey[400],
        p: 0.2,
      }}
      marginTop={15.1}
    >
      <Container maxWidth="s">
        <Grid container spacing={0.1}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              textAlign={"center"}
            >
              Nosotros
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              Phoenix Fitness es un gimnasio fundado por un equipo de
              apasionados expertos en fitness. Nuestro personal altamente
              capacitado está dedicado a brindarte la orientación y el apoyo
              necesarios para que cada día te acerques más a tu mejor versión.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              textAlign={"center"}
            >
              Contactanos
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              Av. Constituyentes 5475, Tigre.
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              Email: info@example.com
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              Telefono: +54 9 11-0098-2231
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              textAlign={"center"}
            >
              Seguinos
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              Seguinos:{" "}
              <a
                href="https://www.instagram.com/leomessi/?hl=es"
                target="_blank"
              >
                Instagram
              </a>
              <br />
              Seguinos:{" "}
              <a href="https://twitter.com/Argentina?lang=en" target="_blank">
                Twitter
              </a>
              <br />
              Seguinos:{" "}
              <a href="https://www.facebook.com/leomessi" target="_blank">
                Facebook
              </a>
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit"></Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            ></Link>
            <Link href="https://www.twitter.com/" color="inherit"></Link>
          </Grid>
        </Grid>
        <Box mt={0.1} textAlign={"center"}>
          <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link color="inherit" href="localhost:3000">
              Phoenix Fitness
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
