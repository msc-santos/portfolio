import { Typography } from "@mui/material";
import Typewriter from 'typewriter-effect';

function Home() {

  return (
    <section id="home" className='box-content-home'>
      <Typography variant="h3" color='secondary'>
        Hello, i am Marcos, nice to meet you!
      </Typography>
      <Typography variant="h4" color='secondary'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('I am a frontend software engineer, and mobile software engineer!')
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
  