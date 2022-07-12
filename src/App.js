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
    const [darkMode, setDarkMode] = useState('false');

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    function setDarkModeToggle(){
        darkMode === 'false' ? setDarkMode('true') : setDarkMode('false');
    }

    return(
        <main id='main' style={darkMode === 'true' ? {backgroundColor: '#171e18'} : {backgroundColor: '#ffffff'}}>
            <Header windowWidth={windowWidth} darkMode={darkMode} onclick={setDarkModeToggle} />
            <SideSkirts darkMode={darkMode} />
            <Hero darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <About darkMode={darkMode} /> 
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </main>
    )
}