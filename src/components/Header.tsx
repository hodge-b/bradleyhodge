import Navbar from "./Navbar";
import { StyledHeader } from "./styled/Header.styled";
import { StyledHeaderDark } from "./styled/HeaderDark.styled";

interface HeaderProps {
  windowWidth: number;
  darkMode: boolean;
  onClick: () => void;
}

const Header = ({ windowWidth, darkMode, onClick }: HeaderProps) => {
  return (
    <>
      {!darkMode ? (
        // DEFAULT
        <StyledHeader className="sticky">
          <div className="header-home-container">
            <a href="#contact-section">
              <p className="header-home">Bradley Hodge</p>
            </a>
            <i className="ri-moon-line" onClick={onClick}></i>
          </div>
          <Navbar windowWidth={windowWidth} darkMode={darkMode} />
        </StyledHeader>
      ) : (
        // DARKMODE
        <StyledHeaderDark className="sticky">
          <div className="header-home-container">
            <a href="#contact-section">
              <p className="header-home">Bradley Hodge</p>
            </a>
            <i className="ri-sun-line" onClick={onClick}></i>
          </div>
          <Navbar windowWidth={windowWidth} darkMode={darkMode} />
        </StyledHeaderDark>
      )}
    </>
  );
};

export default Header;

