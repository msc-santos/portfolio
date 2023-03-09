import { Typography, Grid, useTheme, Container } from "@mui/material";

import ImageAbout from 'src/assets/images/about-img.png'
import textsPages from 'src/constant/textsPages.json'

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
            <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.about.text}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={ImageAbout} alt="image_screen_about_me" className='about-image' />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
