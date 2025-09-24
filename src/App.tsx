import { useEffect, useState } from "react";

import Header from "./components/Header";
import SideSkirts from "./components/SideSkirts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { StyledMain } from "./components/styled/App.styled";
import { StyledMainDark } from "./components/styled/AppDark.styled";

import type { ProjectFields } from "api/getContentful";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);
  const [contentfulData, setContentfulData] = useState<ProjectFields | null>(
    null,
  );

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE ?? "";
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/api/getContentful`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        setContentfulData(data);
      } catch (error) {
        console.error("Failed to fetch contentful data: ", error);
      }
    })();
  }, []);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const setDarkModeToggle = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  const AppElements = () => {
    return (
      <>
        <Header
          windowWidth={windowWidth}
          darkMode={darkMode}
          onClick={setDarkModeToggle}
        />
        <SideSkirts darkMode={darkMode} />
        <Hero darkMode={darkMode} />
        <Projects projectData={contentfulData} darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </>
    );
  };

  return (
    <>
      {!darkMode ? (
        <StyledMain id="main">
          <AppElements />
        </StyledMain>
      ) : (
        <StyledMainDark id="main">
          <AppElements />
        </StyledMainDark>
      )}
    </>
  );
};

export default App;
