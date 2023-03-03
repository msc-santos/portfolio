// bases: 
// https://github.com/mayankagarwal09/dev-portfolio 
// possible logo and favicon: https://icons8.com/icon/WgWwZwRLfZsr/face

import { Container, Grid, useTheme } from "@mui/material";
import Header from "src/components/Header";
import ParticlesComponent from "src/components/Particles";
import About from "src/pages/About";
import Home from "src/pages/home";
import Skills from "src/pages/Skills";

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
              <Home />
              <Container>
                <About />
                <Skills />
              </Container>
          </div>
        </Grid>
      </Grid>
    );
  }
  
  export default App;
  