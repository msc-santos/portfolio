// bases: 
// https://github.com/mayankagarwal09/dev-portfolio 
// possible logo and favicon: https://icons8.com/icon/WgWwZwRLfZsr/face

import { Container, Grid } from "@mui/material";
import Header from "src/components/Header";
import ParticlesComponent from "src/components/Particles";
import About from "src/pages/About";
import Home from "src/pages/home";
import Skills from "src/pages/Skills";

function App() {
    return (
        <Grid container style={{ position: "relative", overflow: "hidden" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div style={{ position: "absolute" }} >
              <ParticlesComponent />
            </div>
            <div style={{ position: "relative", width: '100%' }} >
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
  