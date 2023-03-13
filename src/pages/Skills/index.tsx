import { Typography, Container, Grid, useTheme } from "@mui/material";
import { iconslanguages, iconsFrameworks, iconsTools } from "src/constant/iconsSkills";

import textsPages from 'src/constant/textsPages.json'

export default function Skills() {
  const theme = useTheme()

  // TODO: Inserir as informações de SoftSkills 

  return (
    <section id="skills" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
      {textsPages.skills.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.text}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.languages}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              {iconslanguages.map(item => <Grid item xs={4} sm={2} md={1} lg={1}>
                <img src={item.icon} alt={item.alt} className='skill-icons' />
              </Grid>)}
            </Grid>

            <br />
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.frameworks_technologies}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              {iconsFrameworks.map(item => <Grid item xs={4} sm={2} md={1} lg={1}>
                <img src={item.icon} alt={item.alt} className='skill-icons' />
              </Grid>)}
            </Grid>

            <br />
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.tools_latforms}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              {iconsTools.map(item => <Grid item xs={4} sm={2} md={1} lg={1}>
                <img src={item.icon} alt={item.alt} className='skill-icons' />
              </Grid>)}
            </Grid>

            <br />
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
                {textsPages.skills['sub-text']}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
