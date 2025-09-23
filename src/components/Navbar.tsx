import { useState } from "react";

import { StyledNavbar } from "./styled/Navbar.styled";
import { StyledNavbarDark } from "./styled/NavbarDark.styled";
import HamburgerButton from "./HamburgerButton";
import NavbarModal from "./NavbarModal";

interface NavbarProps {
  windowWidth: number;
  darkMode: boolean;
}

const Navbar = ({ windowWidth, darkMode }: NavbarProps) => {
  const [isNavbarModalOpen, setIsNavbarModalOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavbarModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleModalExit = () => {
    setIsNavbarModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav>
      {windowWidth <= 768 ? (
        !isNavbarModalOpen ? (
          <HamburgerButton onClick={handleHamburgerClick} />
        ) : (
          <NavbarModal onclickExit={handleModalExit} />
        )
      ) : (
        <div className="navbar-link-container">
          <a href="#projects-section">
            {!darkMode ? (
              // DEFAULT
              <StyledNavbar className="navbar-item-container">
                <p className="navbar-item-number">-01-</p>
                <p className="navbar-item-text">Projects</p>
              </StyledNavbar>
            ) : (
              // DARKMODE
              <StyledNavbarDark className="navbar-item-container">
                <p className="navbar-item-number">-01-</p>
                <p className="navbar-item-text">Projects</p>
              </StyledNavbarDark>
            )}
          </a>
          <a href="#about-section">
            {!darkMode ? (
              // DEFAULT
              <StyledNavbar className="navbar-item-container">
                <p className="navbar-item-number">-02-</p>
                <p className="navbar-item-text">About Me</p>
              </StyledNavbar>
            ) : (
              // DARKMODE
              <StyledNavbarDark className="navbar-item-container">
                <p className="navbar-item-number">-02-</p>
                <p className="navbar-item-text">About Me</p>
              </StyledNavbarDark>
            )}
          </a>
          <a href="#contact-section">
            {!darkMode ? (
              // DEFAULT
              <StyledNavbar className="navbar-item-container">
                <p className="navbar-item-number">-03-</p>
                <p className="navbar-item-text">Contact Me</p>
              </StyledNavbar>
            ) : (
              // DARKMODE
              <StyledNavbarDark className="navbar-item-container">
                <p className="navbar-item-number">-03-</p>
                <p className="navbar-item-text">Contact Me</p>
              </StyledNavbarDark>
            )}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

