import { Typography, Container, Grid, useTheme, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { iconslanguages, iconsFrameworks, iconsTools } from "src/constant/iconsSkills";
import { SoftSkills, SoftSkills_two } from "src/constant/softSkills";

import textsPages from 'src/constant/textsPages.json'

import BeenhereIcon from '@mui/icons-material/Beenhere';

export default function Skills() {
  const theme = useTheme()

  return (
    <section id="skills" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
      {textsPages.skills.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.text}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.languages}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              {iconslanguages.map(item => <Grid item xs={4} sm={2} md={1} lg={1}>
                <img src={item.icon} alt={item.alt} className='skill-icons' />
              </Grid>)}
            </Grid>

            <br />
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.frameworks_technologies}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              {iconsFrameworks.map(item => <Grid item xs={4} sm={2} md={1} lg={1}>
                <img src={item.icon} alt={item.alt} className='skill-icons' />
              </Grid>)}
            </Grid>

            <br />
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.skills.tools_latforms}
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              {iconsTools.map(item => <Grid item xs={4} sm={2} md={1} lg={1}>
                <img src={item.icon} alt={item.alt} className='skill-icons' />
              </Grid>)}
            </Grid>

            <br />
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
                {textsPages.skills['sub-text']}
              </Typography>
            </Grid>

            <br />
            <ListItem>
              {SoftSkills.map((item: { title: string, icon: string }, index) => <>
                <ListItemButton
                  key={index}
                  sx={{ py: 0, color: 'rgba(255,255,255,.8)', width: '50%' }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                    <BeenhereIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                  />
                </ListItemButton>
              </>)}
            </ListItem>
            <ListItem>
              {SoftSkills_two.map((item: { title: string, icon: string }, index) => <>
                <ListItemButton
                  key={index}
                  sx={{ py: 0, color: 'rgba(255,255,255,.8)', width: '50%' }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                    <BeenhereIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                  />
                </ListItemButton>
              </>)}
            </ListItem>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
