import React from 'react'
import { StyledCardContainer } from './styled/Card.styled'
import { StyledCardContainerDark } from './styled/CardDark.styled'

export default function Card(props){

    const techElements = props.techs.map(item => (
        <p key={props.techs.indexOf(item)} className="card-tech-item" >{item}</p>
    ))
    
    return(
        <div className="card-wrapper">
            {props.darkMode === 'false' ? 
                <StyledCardContainer className="card-container">
                    <div className="card-bg-image" style={{backgroundImage: `url(${props.background})`}}></div>
                    <p className="card-pretitle">Featured Project</p>
                    <p className="card-title">{props.title}</p>
                    <p className="card-description">{props.description}</p>
                    <div className="card-tech-container">
                        {techElements}
                    </div>
                    <div className="card-link-container">
                        {props.link !== 'https://bradleyhodge.ca' ?
                        <a href={props.link} target='_blank' rel='noopener noreferrer' className='btn btn--live-link'>Live View</a> :
                        <a href={props.link} className='btn btn--live-link'>Live View</a>
                        }
                        <a href={props.codeLink} target='_blank' rel='noopener noreferrer' className='btn btn--live-link'>View Code</a>
                    </div>
                </StyledCardContainer>
            :
                <StyledCardContainerDark className="card-container">
                    <div className="card-bg-image" style={{backgroundImage: `url(${props.background})`}}></div>
                    <p className="card-pretitle">Featured Project</p>
                    <p className="card-title">{props.title}</p>
                    <p className="card-description">{props.description}</p>
                    <div className="card-tech-container">
                        {techElements}
                    </div>
                    <div className="card-link-container">
                        {props.link !== 'https://bradleyhodge.ca' ?
                        <a href={props.link} target='_blank' rel='noopener noreferrer' className='btn btn--live-link'>Live View</a> :
                        <a href={props.link} className='btn btn--live-link'>Live View</a>
                        }
                        <a href={props.codeLink} target='_blank' rel='noopener noreferrer' className='btn btn--live-link'>View Code</a>
                    </div>
                </StyledCardContainerDark>
            }
        </div>
    )
}