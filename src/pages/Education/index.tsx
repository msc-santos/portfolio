import { Container, Grid, Typography, useTheme } from "@mui/material";
import CustomizedTimeline from "src/components/TimeLine";

import textsPages from 'src/constant/textsPages.json'

export default function Education() {
  const theme = useTheme()

  const contentTimeLine = [{
    title: textsPages.education.card_one.title,
    date: textsPages.education.card_one.date,
    where: textsPages.education.card_one.where
  }, {
    title: textsPages.education.card_two.title,
    date: textsPages.education.card_two.date,
    where: textsPages.education.card_two.where
  }]

  return (
    <section id="education" className="box-content">
     <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        {textsPages.education.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <CustomizedTimeline contentTimeLine={contentTimeLine} />
        </Grid>
      </Container>
    </section>
  )
}
