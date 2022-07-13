import React, {useState} from 'react'

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
                    <NavbarModal onclickExit={handleModalExit} darkMode={darkMode} /> 
                : <div className="navbar-link-container">
                            <a href='#projects-section'>
                                <div className="navbar-item-container">
                                    <p className='navbar-item-number' style={darkMode === 'true' ?{color: '#93faa1'} : {color: '#6ac46a'}}>-01-</p>
                                    <p className='navbar-item-text' style={darkMode === 'true' ? {color: '#b5c4b7'} : {color: '#6f7378'}}>Projects</p>
                                </div>
                            </a>
                            <a href='#about-section'>
                                <div className="navbar-item-container">
                                    <p className='navbar-item-number' style={darkMode === 'true' ?{color: '#93faa1'} : {color: '#6ac46a'}}>-02-</p>
                                    <p className='navbar-item-text' style={darkMode === 'true' ? {color: '#b5c4b7'} : {color: '#6f7378'}}>About Me</p>
                                </div>
                            </a>
                            <a href='#contact-section'>
                                <div className="navbar-item-container">
                                    <p className='navbar-item-number' style={darkMode === 'true' ?{color: '#93faa1'} : {color: '#6ac46a'}}>-03-</p>
                                    <p className='navbar-item-text' style={darkMode === 'true' ? {color: '#b5c4b7'} : {color: '#6f7378'}}>Contact Me</p>
                                </div>
                            </a>
                </div>}
        </nav>
    )
}