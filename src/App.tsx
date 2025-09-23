import { useState } from "react";

import Header from "./components/Header";
import SideSkirts from "./components/SideSkirts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { StyledMain } from "./components/styled/App.styled";
import { StyledMainDark } from "./components/styled/AppDark.styled";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);

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
        <Projects darkMode={darkMode} />
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
