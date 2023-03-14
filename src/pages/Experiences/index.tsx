import { Typography, useTheme, Container, Grid } from "@mui/material";
import CustomizedTimeline from "src/components/TimeLine";
import textsPages from 'src/constant/textsPages.json'

export default function Experiences() {
  const theme = useTheme()

  return (
    <section id="experiences" className="box-content">
       <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        {textsPages.Experiences.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <CustomizedTimeline contentTimeLine={textsPages.Experiences.values} />
        </Grid>
      </Container>
    </section>
  )
}
