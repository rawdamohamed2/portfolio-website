import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const getCssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const AnimatedBg = () => {
  const [init, setInit] = useState(false);
  const [options, setOptions] = useState({});

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  
  const updateOptions = () => {
    const particleColor = getCssVar("--font-color") || "#ffffff";
    const linkColor = getCssVar("--linkColor") || "#00FFF7";

    setOptions({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: true,
        zIndex: -2,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            duration: 0.4,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: { value:  particleColor },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 6,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 70,
        },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    });
  };


  useEffect(() => {
    updateOptions();
    const observer = new MutationObserver(() => {
      updateOptions();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!init) return null;
  return <Particles id="tsparticles" options={options} />;
};

export default AnimatedBg;

