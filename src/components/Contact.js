import React from 'react'

export default function Contact(){

    return(
        <section id="contact-section">
            <div className="title-container">
                <h2 className='main-title'><span className='main-title--number'>-03-</span> Let's Get In Touch</h2>
                <hr className='title--hr title--hr--contact'/>
            </div>
            <div className="contact-section-main-container">
                <h2 className='contact-section-subtitle'>Let's Talk!</h2>
                <p>I am currently <span className='text-color-change'>looking for new opportunities with React</span> to showcase my abilities 
                    and evolve my knowledge within the framework. 
                    Feel free to send me an e-mail.</p>
                <div className='contact-section-sub-container'>
                    <a href='mailto:bradley_hodge@hotmail.com' className='btn btn--say-hi'>Say Hi</a>
                </div>
            </div>
        </section>
    )
}