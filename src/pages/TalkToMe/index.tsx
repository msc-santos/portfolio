import { Typography, Grid, useTheme, Container, Box, TextField, Button } from "@mui/material";
import textsPages from 'src/constant/textsPages.json'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import useMessage from "src/hooks/useMessage";

export default function TalkToMe() {
  const theme = useTheme()

  const { showMessage } = useMessage()

  // TODO: Deploy da aplicação 
  // TODO: Inserir o novo link do github do portofolio nas minhas redes sociais e currículo 

  return (
    <section id="talk_to_me" className="box-content">
      <Typography variant="h3" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
        {textsPages.TalkToMe.title}
      </Typography>
      <Container>
        <Grid container className='box-grid' spacing={4}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.TalkToMe.send.title}
            </Typography>
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.TalkToMe.send.text}
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <form action={textsPages.link_send_email} method="POST">
                <input type="hidden" name="_captcha" value="false" />
                {/* <input type="hidden" name="_next" value={textsPages.link_site} /> */}
                <input type="hidden" name="_next" value="http://localhost:3000/" />
                <TextField 
                  id="id-name" 
                  name="name"
                  label="Insert your Name" 
                  variant="outlined" 
                  type="text"
                  fullWidth 
                  required
                  sx={{ background: theme.palette.primary.contrastText, border: 'none', borderRadius: textsPages.TalkToMe.borderRadius, borderTop: textsPages.TalkToMe.borderTop }} 
                />
                <TextField 
                  id="id-email" 
                  name="email"
                  label="Insert your E-mail" 
                  variant="outlined" 
                  type="email"
                  fullWidth 
                  required
                  sx={{ background: theme.palette.primary.contrastText, border: 'none', borderRadius: textsPages.TalkToMe.borderRadius, borderTop: textsPages.TalkToMe.borderTop }} 
                />
                <TextField 
                  id="id-message" 
                  name="message"
                  label="Insert your Message" 
                  variant="outlined" 
                  type="text"
                  multiline
                  fullWidth 
                  required
                  sx={{ background: theme.palette.primary.contrastText, border: 'none', borderRadius: textsPages.TalkToMe.borderRadius, borderTop: textsPages.TalkToMe.borderTop, borderBottom: textsPages.TalkToMe.borderTop }} 
                />
                <Button fullWidth type="submit" variant="contained" color="secondary" endIcon={<SendIcon />} onClick={() => showMessage()}>{textsPages.TalkToMe.button}</Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography variant="h5" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.TalkToMe.send.title_secondary}
            </Typography>
            <Typography variant="h6" className='text-center' sx={{ color: theme.palette.primary.contrastText }}>
              {textsPages.TalkToMe.send.text_secondary}
            </Typography>
            <div className="d-row-flex">
              <Button href={textsPages.link_yout_linkedin} target="_blank">
                <LinkedInIcon color="secondary" style={{ fontSize: textsPages.TalkToMe.sizeIcons }} />
              </Button>
              <Button href={textsPages.link_your_github} target="_blank">
                <GitHubIcon color="secondary" style={{ fontSize: textsPages.TalkToMe.sizeIcons }} />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
