import React from 'react'

export default function Hero({darkMode}){


    return(
        <section id="hero-section">
            <p className='hero-subtitle-upper' style={darkMode === 'true' ? {color: '#93faa1'} : {color: '#000000'}}>hello, my name is</p>
            <h1 className='hero-title' style={darkMode === 'true' ? {color: '#b5c4b7'} : {color: '#6ac46a'}}>Bradley Hodge.</h1>
            <h3 className='hero-subtitle-lower' style={darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}}>I'm a Full-Stack Web Developer.</h3>
            <p className='hero-message' style={darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}}>I'm an ambitious web developer from Oakville, ON. <span className='text-color-change' style={darkMode === 'true' ? {color: '#93faa1'} : {color: '#6ac46a'}}>Specializing in React and PHP applications</span>
                , I enjoy building websites and web-applications that are both user-friendly and powerful.
            </p>
            <a href='#contact-section' className='btn btn--get-started' style={darkMode === 'true' ? {border: '1px solid #93faa1',backgroundColor: '#171e18', color: '#93faa1'} : {border: '1px solid #6ac46a',backgroundColor: '#6ac46a', color: '#000000'}}>Let's get started</a>
        </section>
    )
}