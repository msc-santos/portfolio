import { Button, Stack, Toolbar, Typography } from '@mui/material';
import { themeColors } from 'src/styles/theme';

export default function Header() {
  return (
    <Toolbar style={{ backgroundColor: themeColors.palette.secondary }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Icone
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button href="#home" color='secondary'>Home</Button>
          <Button href="#graduation" color='secondary'>Graduation</Button>
          <Button href="#skills" color='secondary'>Skills</Button>
          <Button href="#projects" color='secondary'>Projects</Button>
          <Button href="#talk_to_me" color='secondary'>Talk to me</Button>
        </Stack>
    </Toolbar>
  )
}
