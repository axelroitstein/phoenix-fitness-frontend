import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SaludoPago() {
  return (
    <>
      <div>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction="column"
          gap={4}
          marginTop={3}
        >
          <Typography variant="h5" color={"Menu"}>
            Aquí podras pagar tu cuota mensual de Phoenix Fitness.
            <br />
          </Typography>
          <Typography variant="h5" color={"Menu"}>
            ¡Muchas gracias por elegirnos nuevamente!
          </Typography>
        </Grid>
      </div>
    </>
  );
}
