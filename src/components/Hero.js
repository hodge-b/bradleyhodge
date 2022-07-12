import React from 'react'

export default function Hero(){

    return(
        <section id="hero-section">
            <p className='hero-subtitle-upper'>hello, my name is</p>
            <h1 className='hero-title'>Bradley Hodge.</h1>
            <h3 className='hero-subtitle-lower'>I'm a Full-Stack Web Developer.</h3>
            <p className='hero-message'>I'm an ambitious web developer from Oakville, ON. <span className='text-color-change'>Specializing in React and PHP applications</span>
                , I enjoy building websites and web-applications that are both user-friendly and powerful.
            </p>
            <a href='#contact-section' className='btn btn--get-started'>Let's get started</a>
        </section>
    )
}