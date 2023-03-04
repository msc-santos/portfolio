import { Typography, useTheme } from "@mui/material";

export default function Expirience() {
  const theme = useTheme()

  return (
    <section id="expirience" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        Expirience
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
