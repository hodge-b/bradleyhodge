import React from 'react'
import {nanoid} from 'nanoid'

export default function HamburgerButton({onclick}){

    return(
        <div id={nanoid()} className="hamburger-container" onClick={onclick}>
            <div className="hamburger-item hamburger-item-1"></div>
            <div className="hamburger-item hamburger-item-2"></div>
            <div className="hamburger-item hamburger-item-3"></div>
        </div>
    )
}