import React from 'react'

import Navbar from './Navbar'

export default function Header({windowWidth}){

    return(
        <header className='sticky'>
            <a href='#contact-section'><p className='header-home'>Bradley Hodge</p></a>
            <Navbar windowWidth={windowWidth} />
        </header>
    )
}