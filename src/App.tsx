import { Container, Grid, useTheme } from "@mui/material";

import ParticlesComponent from "src/components/Particles";
import DrawerComponent from "src/components/Drawer";

import Home from "src/pages/Home";
import About from "src/pages/About";
import Skills from "src/pages/Skills";
import TalkToMe from "src/pages/TalkToMe";
import Modal from "src/components/Modal";
import GitHubProjects from "./pages/GithubProjects";

function App() {
  const theme = useTheme()
  
  return (
      <Grid container className='grid-app-content' sx={{ background: theme.palette.primary.dark }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className='grid-app-content-ts-particles' >
            <ParticlesComponent />
          </div>
          <div className='grid-app-content'>
              <DrawerComponent />
              <Home />
              <Container>
                <About />
                <Skills />
                <GitHubProjects />
                <TalkToMe />
              </Container>
          </div>
          <Modal />
        </Grid>
      </Grid>
    );
  }
  
  export default App;
  