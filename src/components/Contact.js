import React from 'react'

export default function Contact({darkMode}){

    return(
        <section id="contact-section">
            <div className="title-container">
                <h2 className='main-title' style={darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}}><span className='main-title--number' style={darkMode === 'true' ? {color: '#93faa1'}: {color: '#6ac46a'}}>-03-</span> Let's Get In Touch</h2>
                <hr className='title--hr title--hr--contact'/>
            </div>
            <div className="contact-section-main-container">
                <h2 className='contact-section-subtitle' style={darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}}>Let's Talk!</h2>
                <p style={darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}}>I am currently <span className='text-color-change' style={darkMode === 'true' ? {color: '#93faa1'} : {color: '#6ac46a'}}>looking for new opportunities with React</span> to showcase my abilities 
                    and evolve my knowledge within the framework. 
                    Feel free to send me an e-mail.</p>
                <div className='contact-section-sub-container'>
                    <a href='mailto:bradley_hodge@hotmail.com' className='btn btn--say-hi' style={darkMode === 'true' ? {backgroundColor: '#171e18', color: '#93faa1'} : {backgroundColor: '#6ac46a', color: '#000000'}}>Say Hi</a>
                </div>
            </div>
        </section>
    )
}