import { Typography, useTheme } from "@mui/material";

export default function Education() {
  const theme = useTheme()

  return (
    <section id="education" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        Education
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
