import { Typography } from "@mui/material";
import { themeColors } from "src/styles/theme";

export default function Skills() {
  return (
    <section id="skills" className="box-content">
      <Typography variant="h3" style={{ color: themeColors.palette.white, textAlign: 'center' }}>
        Skills
      </Typography>
      <div>
        <div>Texto</div>
        <div>Imagem</div>
      </div>
    </section>
  )
}
