import React from 'react'
import Navbar from './Navbar'
import { StyledHeader } from './styled/Header.styled'
import { StyledHeaderDark } from './styled/HeaderDark.styled'


export default function Header({windowWidth, darkMode, onclick}){

    return(
        <>
            {
                darkMode === 'false' ? 
                // DEFAULT
                <StyledHeader className='sticky'>
                    <div className="header-home-container">
                        <a href='#contact-section'><p className='header-home' >Bradley Hodge</p></a>
                        <i className='ri-moon-line' onClick={onclick}></i>
                    </div>
                    <Navbar windowWidth={windowWidth} darkMode={darkMode} />
                </StyledHeader> 
                :
                // DARKMODE
                <StyledHeaderDark className='sticky'>
                    <div className="header-home-container">
                        <a href='#contact-section'><p className='header-home' >Bradley Hodge</p></a>
                        <i className='ri-sun-line' onClick={onclick}></i>
                    </div>
                    <Navbar windowWidth={windowWidth} darkMode={darkMode} />
                </StyledHeaderDark>
            }
        </>
        
    )
}