import React, {useState} from 'react'

import HamburgerButton from './HamburgerButton'
import NavbarModal from './NavbarModal'

export default function Navbar({windowWidth}){

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
                            <a href='#about-section'>
                                <div className="navbar-item-container">
                                    <p className='navbar-item-number'>-01-</p>
                                    <p className='navbar-item-text'>About Me</p>
                                </div>
                            </a>
                            <a href='#projects-section'>
                                <div className="navbar-item-container">
                                    <p className='navbar-item-number'>-02-</p>
                                    <p className='navbar-item-text'>Projects</p>
                                </div>
                            </a>
                            <a href='#contact-section'>
                                <div className="navbar-item-container">
                                    <p className='navbar-item-number'>-03-</p>
                                    <p className='navbar-item-text'>Contact Me</p>
                                </div>
                            </a>
                </div>}
        </nav>
    )
}