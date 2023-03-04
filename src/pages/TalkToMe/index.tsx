import { Typography, useTheme } from "@mui/material";

export default function TalkToMe() {
  const theme = useTheme()

  return (
    <section id="talk_to_me" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        Talk to me
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
