import { Button, Stack, Toolbar, Typography, useTheme } from '@mui/material';

export default function Header() {

  const theme = useTheme()

  return (
    <Toolbar id='toolbar' sx={{ background: theme.palette.primary.light }}>
        <Typography variant="h6">
            Icone
        </Typography>
        <Stack direction="row" spacing={2}>
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
