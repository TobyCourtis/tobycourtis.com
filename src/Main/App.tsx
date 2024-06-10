import React, {useEffect} from 'react';
import './App.css';
import About from "../About/About";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Languages from "../Languages/Languages";
import Contact from "../Contact/Contact";
import GitHubContributions from "../GitHubContributions/GitHubContributions";
import ReactGA from "react-ga4";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function App() {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname
        });
    }, []);

    return (
        <div className="App" id="home">
            <Header/>
            <About/>
            <Projects/>
            <Languages/>
            <GitHubContributions/>
            <Contact/>
            <Footer/>
            <ScrollToTopButton/>
        </div>
    );
}

export default App;
