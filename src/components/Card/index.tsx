import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Chip } from "@mui/material";

const CardComponent = ({ project }: any) => {
  return (
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Card>
          <CardMedia
            component="img"
            alt={project.alt}
            height={project.size}
            image={project.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color='primary'>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color='secondary'>Projeto</Button>
            <Button size="small" color='secondary'>GitHub</Button>
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