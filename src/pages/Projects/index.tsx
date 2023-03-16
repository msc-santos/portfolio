import { Container, Typography, useTheme, Grid } from "@mui/material";
import CardComponent from 'src/components/Card'
import textsPages from 'src/constant/textsPages.json'

import Project_one from 'src/assets/images/segunda_via.png'
import Project_two from 'src/assets/images/wgm.png'
import Project_three from 'src/assets/images/escala_app_2.png'
import Project_four from 'src/assets/images/smartphone.png'
import Project_five from 'src/assets/images/dark_portfolio.png'

export default function Projects() {
  const theme = useTheme()

  const data = textsPages.Projects.projects
  
  data[0].image = Project_one
  data[1].image = Project_two
  data[2].image = Project_three
  data[3].image = Project_four
  data[4].image = Project_five

  return (
    <section id="projects" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        {textsPages.Projects.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={2}>
          {textsPages.Projects.projects.map(project => <CardComponent project={project} />)}
        </Grid>
      </Container>
    </section>
  )
}
