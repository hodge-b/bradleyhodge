import React from 'react'

export default function SideSkirts(){

    return(
        <div className="sideskirt-component">
            <div className="sideskirt-left-container">
                <p className="sideskirt--text sideskirt--text--left">
                    <a href="https://www.linkedin.com/in/bradley-hodge-4a1146240/" target='_blank' rel="noopener noreferrer">
                        <i className="ri-linkedin-line"></i>
                    </a>
                    <a href="https://github.com/hodge-b" target='_blank' rel="noopener noreferrer">
                        <i className='ri-github-line'></i>
                    </a>
                    <a href="https://codepen.io/vermicyde" target='_blank' rel="noopener noreferrer">
                        <i className='ri-codepen-line'></i>
                    </a>
                </p>
                <div className='sideskirt--line'></div>
            </div>
            <div className="sideskirt-right-container">
                <a href="mailto:bradley_hodge@hotmail.com">
                    <p className='sideskirt--text sideskirt--text--right'>bradley_hodge@hotmail.com</p>
                </a>
                <div className='sideskirt--line sideskirt--line--right'></div>
            </div>
        </div>
    )
}