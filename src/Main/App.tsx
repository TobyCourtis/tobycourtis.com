import React from 'react';
import './App.css';
import About from "../About/About";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Languages from "../Languages/Languages";
import Contact from "../Contact/Contact";
import GitHubContributions from "../GitHubContributions/GitHubContributions";

function App() {
    return (
        <div className="App" id="home">
            <div className={"content"}>
                <Header/>
                <About/>
                <Projects/>
                <Languages/>
                <GitHubContributions/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
