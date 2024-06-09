import React from "react";
import './About.css';

function About() {
    const handleAboutButtonClick = (id: string) => {
        window.location.hash = '#' + id;
    };

    return (
        <div className={"about-div content"} id="about">
            <div className={"about-inner-div"}>
                <div className={"left"}>
                    <img src={'/pp-square.png'} alt="profile-pic" className={'profile-image'}/>
                </div>
                <div className={"right"}>
                    <div>
                        <p>Hey,</p>
                        <h1>I'm Toby!</h1>
                        <p>A <span className={'highlight-text'}>Full Stack Software Dev</span>, currently</p>
                        <p>training for an Ironman triathlon.</p>
                        <p>Take a look at some of my work ...</p>
                        <div className={'about-buttons-div'}>
                            <button
                                className={'about-button contact-me'}
                                onClick={() => handleAboutButtonClick('contact')}
                            >
                                Contact me
                            </button>
                            <button
                                className='about-button see-work'
                                onClick={() => handleAboutButtonClick('projects')}
                            >
                                See my work
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
