import React from 'react'

export default function Card(props){

    const techElements = props.techs.map(item => (
        <p key={props.techs.indexOf(item)} className="card-tech-item" >{item}</p>
    ))
    
    return(
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card-bg-image" style={{backgroundImage: `url(${props.background})`}}></div>
                <p className="card-pretitle" style={props.darkMode === 'true' ? {color: '#93faa1'}: {color: '#6ac46a'}}>Featured Project</p>
                <p className="card-title" style={props.darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}}>{props.title}</p>
                <p className="card-description" style={props.darkMode === 'true' ? {backgroundColor: '#222c24',color: '#969e98'} : {backgroundColor: '#e6eef7',color: '#6f7378'}}>{props.description}</p>
                <div className="card-tech-container">
                    {techElements}
                </div>
                {props.link !== 'https://bradleyhodge.ca' ?
                    <a href={props.link} target='_blank' rel='noopener noreferrer' className='btn btn--live-link' style={props.darkMode === 'true' ? {border: '1px solid #93faa1',backgroundColor: '#171e18', color: '#93faa1'} : {border: '1px solid #6ac46a',backgroundColor: '#6ac46a', color: '#000000'}}>Live View</a> :
                    <a href={props.link} className='btn btn--live-link' style={props.darkMode === 'true' ? {border: '1px solid #93faa1',backgroundColor: '#171e18', color: '#93faa1'} : {border: '1px solid #6ac46a',backgroundColor: '#6ac46a', color: '#000000'}}>Live View</a>
                }
            </div>
        </div>
    )
}