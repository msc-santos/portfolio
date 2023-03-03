import { Button, Stack, Toolbar, Typography } from '@mui/material';
import { themeColors } from 'src/styles/theme';

export default function Header() {

  return (
    <Toolbar style={{ 
      backgroundColor: themeColors.palette.secondary, 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
    }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Icone
        </Typography>
        <Stack direction="row" spacing={2} style={{ marginRight: 50 }}>
          <Button href="#home" color='secondary'>Home</Button>
          <Button href="#about" color='secondary'>About</Button>
          <Button href="#skills" color='secondary'>Skills</Button>
          <Button href="#education" color='secondary'>Education</Button>
          <Button href="#expirience" color='secondary'>Expirience</Button>
          <Button href="#projects" color='secondary'>Projects</Button>
          <Button href="#talk_to_me" color='secondary'>Talk to me</Button>
        </Stack>
    </Toolbar>
  )
}
