import { Typography, useTheme, Container, Grid } from "@mui/material";
import CustomizedTimeline from "src/components/TimeLine";
import textsPages from 'src/constant/textsPages.json'

export default function Experiences() {
  const theme = useTheme()

  const contentTimeLine = [{
    title: textsPages.Experiences.card_four.title,
    date: textsPages.Experiences.card_four.date,
    where: textsPages.Experiences.card_four.where
  }, {
    title: textsPages.Experiences.card_three.title,
    date: textsPages.Experiences.card_three.date,
    where: textsPages.Experiences.card_three.where
  }, {
    title: textsPages.Experiences.card_two.title,
    date: textsPages.Experiences.card_two.date,
    where: textsPages.Experiences.card_two.where
  }, {
    title: textsPages.Experiences.card_one.title,
    date: textsPages.Experiences.card_one.date,
    where: textsPages.Experiences.card_one.where
  },]

  return (
    <section id="experiences" className="box-content box-content-experiences">
       <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        {textsPages.Experiences.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <CustomizedTimeline contentTimeLine={contentTimeLine} />
        </Grid>
      </Container>
    </section>
  )
}
