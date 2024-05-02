import React from 'react';
import './App.css';
import About from "../About/About";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Languages from "../Languages/Languages";
import Contact from "../Contact/Contact";

function App() {
    return (
        <div className="App">
            <div className={"content"}>
                <Header/>
                <About/>
                <Projects/>
                <Languages />
                {/*<Technologies />*/}
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
