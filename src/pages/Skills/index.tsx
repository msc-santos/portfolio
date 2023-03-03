import { Typography, useTheme } from "@mui/material";

export default function Skills() {
  const theme = useTheme()

  return (
    <section id="skills" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        Skills
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
