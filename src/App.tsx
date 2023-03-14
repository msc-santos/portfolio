import { Container, Grid, useTheme } from "@mui/material";

import ParticlesComponent from "src/components/Particles";
import Header from "src/components/Header";
import DrawerComponent from "src/components/Drawer";

import Home from "src/pages/Home";
import About from "src/pages/About";
import Skills from "src/pages/Skills";
import Education from "src/pages/Education";
import Experiences from "src/pages/Experiences";
import Projects from "src/pages/Projects";
import TalkToMe from "src/pages/TalkToMe";

function App() {
  const theme = useTheme()
  
  return (
      <Grid container className='grid-app-content' sx={{ background: theme.palette.primary.dark }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className='grid-app-content-ts-particles' >
            <ParticlesComponent />
          </div>
          <div className='grid-app-content'>
              <Header />
              <DrawerComponent />
              <Home />
              <Container>
                <About />
                <Skills />
                <Education />
                <Experiences />
                <Projects />
                <TalkToMe />
              </Container>
          </div>
        </Grid>
      </Grid>
    );
  }
  
  export default App;
  