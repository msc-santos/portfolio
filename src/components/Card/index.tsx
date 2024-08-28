import { useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography, Grid, Chip, Alert, CardHeader } from "@mui/material";
import textsPages from 'src/constant/textsPages.json'
import GitHubIcon from '@mui/icons-material/GitHub';

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
      <Grid item key={project.title} xs={12} sm={6} md={4}>
        <Card style={{ backgroundColor: '#333', color: '#fff' }}>
          <CardHeader
            avatar={<GitHubIcon style={{ color: '#fff' }} />}
            title={<Typography variant="h6" style={{ color: '#fff' }}>{project.title}</Typography>}
          />
          <CardContent>
            <Typography variant="body2" style={{ color: '#ccc' }}>
              {project.description || 'No description available'}
            </Typography>
            <hr />
            {project.chips?.map((text: string) => <Chip style={{ margin: 2, color: '#fff' }} label={text} />)}
            {showMessage !== '' && <Alert severity="warning">{showMessage}</Alert>}
          </CardContent>
          <CardActions>
            <Button size="small" color='secondary' style={{ color: '#fff' }} onClick={() => isShowMessage(project.link_project, 'project')} href={project.link_project} target="_blank">
              {textsPages.Projects.button_project}
            </Button>
            <Button size="small" color='secondary' style={{ color: '#fff' }} onClick={() => isShowMessage(project.github, 'repository')} href={project.github} target="_blank">
              {textsPages.Projects.button_git}
            </Button>
          </CardActions>
        </Card>
      </Grid>
  )
}

export default CardComponent;