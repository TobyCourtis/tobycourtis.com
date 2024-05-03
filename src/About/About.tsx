import React from "react";
import './About.css'


function About() {
    return (
        <div className={"about-div"} id="about">
            <div className={"about-inner-div"}>
                <div className={"left"}>
                    <img src={'/pp-square.png'} alt="profile-pic" className={'profile-image'}/>
                </div>


                <div className={"right"}>
                    <div>
                        <h1>Hey, I'm Toby!</h1>
                        <p>I'm a software dev, currently training for an Ironman!</p>
                        <br/>

                        <p>Take a look below at some of my past and present projects ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About