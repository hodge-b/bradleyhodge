import React, {useState} from 'react'
import '../src/styles/styles.css'

import Header from './components/Header'
import SideSkirts from './components/SideSkirts'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    return(
        <main id='main'>
            <Header windowWidth={windowWidth} />
            <SideSkirts />
            <Hero />
            <About />
            <Projects /> 
            <Contact />
            <Footer />
        </main>
    )
}