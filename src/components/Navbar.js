import React, {useState} from 'react'

import { StyledNavbar } from './styled/Navbar.styled'
import { StyledNavbarDark } from './styled/NavbarDark.styled'
import HamburgerButton from './HamburgerButton'
import NavbarModal from './NavbarModal'

export default function Navbar({windowWidth, darkMode}){

    const [isNavbarModalOpen, setIsNavbarModalOpen] = useState(false)

    const handleHamburgerClick = () => {
        setIsNavbarModalOpen(true)
    }
    const handleModalExit = () => {
        setIsNavbarModalOpen(false)
    }

    return(
        <nav>
            {windowWidth <= 768 ? 
                !isNavbarModalOpen ? 
                    <HamburgerButton onclick={handleHamburgerClick} /> : 
                    <NavbarModal onclickExit={handleModalExit} /> 
                : <div className="navbar-link-container">
                        <a href='#projects-section'>
                            { darkMode === 'false' ?
                                // DEFAULT
                                <StyledNavbar className="navbar-item-container">
                                    <p className='navbar-item-number'>-01-</p>
                                    <p className='navbar-item-text'>Projects</p>
                                </StyledNavbar>
                                :
                                // DARKMODE
                                <StyledNavbarDark className="navbar-item-container">
                                    <p className='navbar-item-number'>-01-</p>
                                    <p className='navbar-item-text'>Projects</p>
                                </StyledNavbarDark>
                            }
                        </a>
                        <a href='#about-section'>
                        { darkMode === 'false' ?
                                // DEFAULT
                                <StyledNavbar className="navbar-item-container">
                                    <p className='navbar-item-number'>-02-</p>
                                    <p className='navbar-item-text'>About Me</p>
                                </StyledNavbar>
                                :
                                // DARKMODE
                                <StyledNavbarDark className="navbar-item-container">
                                    <p className='navbar-item-number'>-02-</p>
                                    <p className='navbar-item-text'>About Me</p>
                                </StyledNavbarDark>
                            }
                        </a>
                        <a href='#contact-section'>
                        { darkMode === 'false' ?
                                // DEFAULT
                                <StyledNavbar className="navbar-item-container">
                                    <p className='navbar-item-number'>-03-</p>
                                    <p className='navbar-item-text'>Contact Me</p>
                                </StyledNavbar>
                                :
                                // DARKMODE
                                <StyledNavbarDark className="navbar-item-container">
                                    <p className='navbar-item-number'>-03-</p>
                                    <p className='navbar-item-text'>Contact Me</p>
                                </StyledNavbarDark>
                            }
                        </a>
                </div>}
        </nav>
    )
}