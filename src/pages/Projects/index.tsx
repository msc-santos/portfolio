import { Container, Typography, useTheme, Grid } from "@mui/material";
import CardComponent from 'src/components/Card'
import textsPages from 'src/constant/textsPages.json'

export default function Projects() {
  const theme = useTheme()

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
