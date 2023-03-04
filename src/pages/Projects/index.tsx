import { Typography, useTheme } from "@mui/material";

export default function Projects() {
  const theme = useTheme()

  return (
    <section id="projects" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        Projects
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
