import React from 'react'

export default function Card(props){

    const techElements = props.techs.map(item => (
        <p key={props.techs.indexOf(item)} className="card-tech-item">{item}</p>
    ))
    
    return(
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card-bg-image" style={{backgroundImage: `url(${props.background})`}}></div>
                <p className="card-pretitle">Featured Project</p>
                <p className="card-title">{props.title}</p>
                <p className="card-description">{props.description}</p>
                <div className="card-tech-container">
                    {techElements}
                </div>
                {props.link !== 'https://bradleyhodge.ca' ?
                    <a href={props.link} target='_blank' rel='noopener noreferrer' className='btn btn--live-link'>Live View</a> :
                    <a href={props.link} className='btn btn--live-link'>Live View</a>
                }
            </div>
        </div>
    )
}