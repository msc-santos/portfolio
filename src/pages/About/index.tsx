import { Typography, Grid, useTheme, Container } from "@mui/material";

export default function About() {
  const theme = useTheme()

  return (
    <section id="about" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        About
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              Texto
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>IMG</Grid>
        </Grid>
      </Container>
    </section>
  )
}
