import React from 'react';
import './App.css';
import About from "../About/About";
import Header from "../Header/Header";

function App() {
    return (
        <div className="App">
            <div className={"content"}>
                <Header/>
                <About/>
            </div>
        </div>
    );
}

export default App;
