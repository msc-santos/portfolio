import { Typography, useTheme } from "@mui/material";

export default function About() {
  const theme = useTheme()

  return (
    <section id="about" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        About
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
