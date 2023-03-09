import { Typography } from "@mui/material";
import Typewriter from 'typewriter-effect';
import textsPages from 'src/constant/textsPages.json'

function Home() {

  return (
    <section id="home" className='box-content-home'>
      <Typography variant="h3" color='secondary'>
        {textsPages.home.title}
      </Typography>
      <Typography variant="h4" color='secondary'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(textsPages.home["sub-title"])
              .callFunction(() => {})
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {})
              .start();
          }}
        />
      </Typography>
    </section>
  );
}

export default Home;
  