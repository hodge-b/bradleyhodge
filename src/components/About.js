import React from 'react'
import {StyledAboutContainer} from './styled/About.styled'
import {StyledAboutContainerDark} from './styled/AboutDark.styled'

export default function About({darkMode}){

    const AboutElements = () =>{
        return(
            <>
                <div className="title-container">
                    <h2 className='main-title' ><span className='main-title--number'>-02-</span> About Me</h2>
                    <hr className='title--hr'/>
                </div>
                <div className="about-section-main-wrapper">
                    <div className="about-section-main-text">
                        <p>
                            Hi, my name is Bradley Hodge and this is my story. I have spent the last ten years creating and building
                            programs using various languages (ie. Javascript, PHP, C++, C#, Java, etc) as a hobbyist programmer. This was all thanks to
                            my facination with video games and a creative spark.
                        </p>
                        <p>
                            Today, I have a terrific grasp of programming fundamentals and coding practices from different 
                            outlets like University, websites, and Textbooks. I love the satisfaction of telling the computer what 
                            to do and to see the final result after all the hard work and late nights--with caffeine--in a working program.
                        </p>
                        <p>
                            When I'm not coding, I enjoy going for hikes, mountain biking, playing the guitar, playing Phasmophobia with my girlfriend, 
                            and playing boardgames.
                        </p>
                        <p>Here are a few of the technologies I've recently been working with:</p>
                        <div className="about-section-tech-container">
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>HTML</p>
                            </div>
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>CSS</p>
                            </div>
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>JavaScript (ES6+)</p>
                            </div> 
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>SCSS</p>
                            </div>
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>React</p>
                            </div>
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>Bootstrap</p>
                            </div>
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>PHP</p>
                            </div>
                            <div className="about-section-tech-item-container">
                                <i className="ri-tools-line"></i>
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-section-image-container">
                        <div className="about-section-image">
                            <img src={require("../images/myself.jpg")} alt="myself.jpg" />
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return(
        <section id='about-section'>
            {darkMode === 'false' ? 
                <StyledAboutContainer className="about-section-info-container">
                    <AboutElements />
                </StyledAboutContainer>
            :
                <StyledAboutContainerDark className="about-section-info-container">
                    <AboutElements />
                </StyledAboutContainerDark>
            }   
        </section>
        
    )
}