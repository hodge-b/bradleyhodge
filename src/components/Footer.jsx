import React from 'react'

export default function Footer({darkMode}){

    return(
        <footer className='footer-section' style={darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}}>
            <p><small>Built by Brad Hodge</small></p>
        </footer>
    )
}