import { Typography, Grid, useTheme, Container, CardMedia } from "@mui/material";

import textsPages from 'src/constant/textsPages.json'

export default function About() {
  const theme = useTheme()

  return (
    <section id="about" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        {textsPages.about.title}
      </Typography>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.about.text}
            </Typography>
            <br />
            <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.about['sub-text']}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CardMedia
              component="img"
              alt="image_screen_about_me"
              image='/about-img.png'
              className="about-image"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
