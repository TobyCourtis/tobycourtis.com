import React from "react";
import './About.css'


function About() {
    return (
        <div className={"about-div"}>
            <div className={"about-inner-div"}>
                <div className={"left"}>
                    <img src={'/pp-square.png'} alt="profile-pic" className={'profile-image'}/>
                </div>


                <div className={"right"}>
                    <div>
                        <h1>Hi, I'm Toby!</h1>
                        <p>Software Dev, currently training for an Ironman!</p>
                        <br/>

                        <p>Take a look below at some of my past and present projects ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About