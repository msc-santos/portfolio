// bases: 
// https://github.com/mayankagarwal09/dev-portfolio 
// possible logo and favicon: https://icons8.com/icon/WgWwZwRLfZsr/face

import { Grid } from "@mui/material";
import Header from "src/components/Header";
import ParticlesComponent from "src/components/Particles";
import Home from "./pages/home";

function App() {
    return (
        <Grid container style={{ position: "relative", overflow: "hidden" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div style={{ position: "absolute" }} >
              <ParticlesComponent />
            </div>
            <div style={{ position: "relative" }} >
                <Header />
                <Home />
            </div>
          </Grid>
        </Grid>
    );
  }
  
  export default App;
  