import { useState } from 'react';
import { AppBar, Button, Container, Grid, IconButton, Menu, MenuItem, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { NavBar } from 'src/interfaces/NavBar';
import { optionsMenu } from './options'

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const ITEM_HEIGHT = 45;
  const open = Boolean(anchorEl);
  const style = {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: '20ch',
    },
  }
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ background: theme.palette.primary.light }}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Typography variant="h6">
                Icone
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              {!isMobile ? <Stack direction="row" spacing={2}>
                {optionsMenu.map((item: NavBar) => <Button key={item.path} href={item.path} color='secondary'>{item.label}</Button>)}
              </Stack> : <Stack direction="row" spacing={2}>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  color='secondary'
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={style}
                >
                   {optionsMenu.map((item: NavBar) => <MenuItem key={item.path} href={item.path} color='secondary'>{item.label}</MenuItem>)}
                </Menu>
              </Stack>}
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
