import React from 'react'

export default function NavbarModal({onclickExit, darkMode}){

    return(
        <div className="modal-container">
            <div className="navbar-modal-overlay-darkness"></div>
            <div className="navbar-modal-container">
                <button className='btn btn--exit-modal' onClick={onclickExit} style={darkMode === 'true' ? {color: '#93faa1'}: {color: '#6ac46a'}}>X</button>
                <ul className='navbar-modal-list'>
                    <li className='navbar-modal-list-item'>
                        <a href='#projects-section'>
                            <div className="list-item-container" onClick={onclickExit}>
                                <p className='list-item-number' style={darkMode === 'true' ? {color: '#93faa1'}: {color: '#6ac46a'}}>-01-</p>
                                <p className='list-item-text'>Projects</p>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-modal-list-item'>
                        <a href='#about-section'>
                            <div className="list-item-container" onClick={onclickExit}>
                                <p className='list-item-number' style={darkMode === 'true' ? {color: '#93faa1'}: {color: '#6ac46a'}}>-02-</p>
                                <p className='list-item-text'>About Me</p>
                            </div>
                        </a>
                    </li>
                    <li className='navbar-modal-list-item'>
                        <a href='#contact-section'>
                            <div className="list-item-container" onClick={onclickExit}>
                                <p className='list-item-number' style={darkMode === 'true' ? {color: '#93faa1'}: {color: '#6ac46a'}}>-03-</p>
                                <p className='list-item-text'>Contact Me</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}