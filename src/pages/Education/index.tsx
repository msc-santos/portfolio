import { Container, Grid, Typography, useTheme } from "@mui/material";
import CustomizedTimeline from "src/components/TimeLine";

import textsPages from 'src/constant/textsPages.json'

export default function Education() {
  const theme = useTheme()

  return (
    <section id="education" className="box-content">
     <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        {textsPages.education.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <CustomizedTimeline contentTimeLine={textsPages.education.values} />
        </Grid>
      </Container>
    </section>
  )
}
