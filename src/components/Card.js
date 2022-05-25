import React from 'react'
import {Link} from 'react-router-dom'

export default function Card(props){

    const techElements = props.techs.map(item => (
        <p key={props.techs.indexOf(item)} className="card-tech-item">{item}</p>
    ))
    
    return(
        <div className="card-container">
            <div className="card-bg-image" style={{backgroundImage: `url(${props.background})`}}></div>
            <p className="card-pretitle">Featured Project</p>
            <p className="card-title">{props.title}</p>
            <p className="card-description">{props.description}</p>
            <div className="card-tech-container">
                {techElements}
            </div>
            <Link to={props.link}><p className="card-live-link">Live View</p></Link>
        </div>
    )
}