import React from 'react'

import Navbar from './Navbar'

export default function Header({windowWidth, darkMode, onclick}){

    return(
        <header className='sticky' style={darkMode === 'true' ? {backgroundColor: '#171e18'} : {backgroundColor: '#ffffff'}}>
            <div className="header-home-container">
                <a href='#contact-section'><p className='header-home' style={darkMode === 'true' ? {color: '#93faa1'} : {color: '#6ac46a'}}>Bradley Hodge</p></a>
                {darkMode === 'true' ? <i class='ri-sun-line' style={{color: '#93faa1'}} onClick={onclick}></i> : <i class='ri-moon-line' style={{color: '#6f7378'}} onClick={onclick}></i>}
            </div>
            <Navbar windowWidth={windowWidth} darkMode={darkMode} />
        </header>
    )
}