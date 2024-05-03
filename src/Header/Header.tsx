import './Header.css';

function Header() {
    return (
        <div className={"header-div"}>
            <ol className="header-list">
                {/* left hand side */}
                <li>
                    <button className={'left'}>
                        <a href="#home">
                            <h1>tobycourtis.com</h1>
                        </a>
                    </button>
                </li>

                {/* right hand side */}
                <li className={'right'}>
                    <button>
                        <a href="#contact">
                            <p><span className={'tilde'}>~</span>/contact</p>
                        </a>
                    </button>
                </li>
                <li className={'right'}>
                    <button>
                        <a href="#projects">
                            <p><span className={'tilde'}>~</span>/projects</p>
                        </a>
                    </button>
                </li>
                <li className={'right'}>
                    <button>
                        <a href="#about">
                            <p><span className={'tilde'}>~</span>/</p>
                        </a>
                    </button>
                </li>
            </ol>
        </div>
    )
}

export default Header