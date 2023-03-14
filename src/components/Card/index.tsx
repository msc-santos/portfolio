import { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Chip, Alert } from "@mui/material";
import textsPages from 'src/constant/textsPages.json'

const CardComponent = ({ project }: any) => {
  const [showMessage, setShowMessage] = useState<string>('')

  const isShowMessage = (link: string, type: string) => {
    if (type === 'project' && link === '') setShowMessage('Learning Project: Not Published!')
    if (type === 'repository' && link === '') setShowMessage('Enterprise Project: This Private Repository!')

    setTimeout(() => {
      setShowMessage('')
    }, 5000);
  }

  return (
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Card sx={{ height: 545 }}>
          {showMessage === '' && <CardMedia
            component="img"
            alt={project.alt}
            height={project.size}
            image={project.image}
          />}
          <CardContent>
            {showMessage !== '' && <Alert severity="warning">{showMessage}</Alert>}
            <Typography gutterBottom variant="h5" color='primary'>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color='secondary' onClick={() => isShowMessage(project.link_project, 'project')} href={project.link_project} target="_blank">
              {textsPages.Projects.button_project}
            </Button>
            <Button size="small" color='secondary' onClick={() => isShowMessage(project.github, 'repository')} href={project.github} target="_blank">
              {textsPages.Projects.button_git}
            </Button>
          </CardActions>
          <hr />
          <CardContent>
            {project.chips?.map((text: string) => <Chip style={{ margin: 2 }} label={text} />)}
          </CardContent>
        </Card>
      </Grid>
  )
}

export default CardComponent;