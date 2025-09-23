import React from 'react'
import { StyledHero } from './styled/Hero.styled'
import { StyledHeroDark } from './styled/HeroDark.styled'

export default function Hero({darkMode}){

    // component to hold elements of hero page
    const HeroElements = () =>{
        return(
            <>
                <p className='hero-subtitle-upper'>hello, my name is</p>
                <h1 className='hero-title'>Bradley Hodge.</h1>
                <h3 className='hero-subtitle-lower'>I'm a Full-Stack Web Developer.</h3>
                <p className='hero-message'>I'm an ambitious web developer from Oakville, ON. <span className='text-color-change'>Specializing in React and PHP applications</span>
                    , I enjoy building websites and web-applications that are both user-friendly and powerful.
                </p>
                <a href='#contact-section' className='btn btn--get-started'>Let's get started</a>
            </>
        )
    }

    return(
        <>
            {darkMode === 'false' ?
                <StyledHero id="hero-section">
                    <HeroElements />
                </StyledHero>
            :
                <StyledHeroDark id="hero-section">
                    <HeroElements />
                </StyledHeroDark>
            }
        </>
    )
}