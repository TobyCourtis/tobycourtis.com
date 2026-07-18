import './App.css';

function App() {
    return (
        <div className="page">
            <div className="card">
                <img src="/pp-square.png" alt="Toby Courtis" className="photo" />
                <h1 className="name">Toby Courtis</h1>
                <p className="role">Backend Engineer at <span className="spotify">Spotify</span></p>
                <p className="detail">Metadata pre-processing & distribution</p>
                <div className="divider" />
                <p className="personal">
                    Based in London. Outside of work you'll find me training for an Ironman or bouldering.
                </p>
                <div className="links">
                    <a href="https://www.linkedin.com/in/tobycourtis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/TobyCourtis" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:toby.courtis@gmail.com">Email</a>
                </div>
            </div>
        </div>
    );
}

export default App;
