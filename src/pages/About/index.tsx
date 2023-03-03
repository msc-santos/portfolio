import { Typography } from "@mui/material";
import { themeColors } from "src/styles/theme";

export default function About() {
  return (
    <section id="about" className="box-content">
      <Typography variant="h3" style={{ color: themeColors.palette.white, textAlign: 'center' }}>
        About
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
