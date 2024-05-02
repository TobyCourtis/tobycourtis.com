import React from 'react';
import './App.css';
import About from "../About/About";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

function App() {
    return (
        <div className="App">
            <div className={"content"}>
                <Header/>
                <About/>
                <Projects/>
            </div>
        </div>
    );
}

export default App;
