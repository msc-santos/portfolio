import { AppBar, Button, Container, Grid, IconButton, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { NavBar } from 'src/interfaces/NavBar';
import { optionsMenu } from 'src/constant/options'

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import useMenu from 'src/hooks/useMenu';

// import Logo from 'src/assets/logo.png'

export default function Header() {
  const { open, handleOpen } = useMenu()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ background: theme.palette.primary.light }}>
        <Container>
          <Grid container>
            <Grid item xs={11} sm={11} md={5} lg={5}>
              {/* <img
                src={Logo}
                alt='logo'
              /> */}
              Logo
            </Grid>
            <Grid item xs={1} sm={1} md={7} lg={7}>
              {!isMobile ? <Stack direction="row" spacing={2}>
                {optionsMenu.map((item: NavBar) => <Button key={item.path} href={item.path} color='secondary'>{item.label}</Button>)}
              </Stack> : <Stack direction="row" spacing={2}>
              <IconButton color="secondary" aria-label="upload picture" component="label" onClick={() => handleOpen()}>
                {open ? <MenuOpenIcon /> : <MenuIcon />}
              </IconButton>
              </Stack>}
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
