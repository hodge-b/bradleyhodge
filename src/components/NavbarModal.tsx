import React from "react";

import { StyledNavbarModalContainerDark } from "./styled/NavbarModalDark.styled";

interface NavbarModal {
  onClickExit: () => void;
}

const NavbarModal = ({ onClickExit }: NavbarModal) => {
  const NavbarModalContainerElements = () => {
    return (
      <>
        <button className="btn btn--exit-modal" onClick={onClickExit}>
          X
        </button>
        <ul className="navbar-modal-list">
          <li className="navbar-modal-list-item">
            <a href="#projects-section">
              <div className="list-item-container" onClick={onClickExit}>
                <p className="list-item-number">-01-</p>
                <p className="list-item-text">Projects</p>
              </div>
            </a>
          </li>
          <li className="navbar-modal-list-item">
            <a href="#about-section">
              <div className="list-item-container" onClick={onClickExit}>
                <p className="list-item-number">-02-</p>
                <p className="list-item-text">About Me</p>
              </div>
            </a>
          </li>
          <li className="navbar-modal-list-item">
            <a href="#contact-section">
              <div className="list-item-container" onClick={onClickExit}>
                <p className="list-item-number">-03-</p>
                <p className="list-item-text">Contact Me</p>
              </div>
            </a>
          </li>
        </ul>
      </>
    );
  };

  return (
    <div className="modal-container">
      <div className="navbar-modal-overlay-darkness"></div>
      <StyledNavbarModalContainerDark className="navbar-modal-container">
        <NavbarModalContainerElements />
      </StyledNavbarModalContainerDark>
    </div>
  );
};

export default NavbarModal;

