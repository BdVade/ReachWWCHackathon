import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import CreateAuction from '../containers/CreateAuction';

const Landing = () => {
  const [upload, setUpload] = useState(false);
  const [connect, setConnect] = useState(false);
  const showUpload = () => {
    setUpload(!upload);
  };
  const showConnect = () => {
    setConnect(!connect);
  };
  const particlesInit = async main => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = container => {
    console.log(container);
  };
  return (
    <div className="bg-hero-pattern h-fit">
      <NavBar connect={showConnect} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Hero create={showUpload} />
      <>{upload === false ? '' : <CreateAuction closemodal={showUpload} />}</>
    </div>
  );
};

export default Landing;
