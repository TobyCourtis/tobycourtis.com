import './Header.css';

function Header() {
    return (
        <div className={"header-div"}>
            <ol className="header-list">
                {/* left hand side */}
                <li>
                    <button className={'left'}>
                        <a href="#home"><h1>tobycourtis.com</h1></a>
                    </button>
                </li>

                {/* right hand side */}
                <li className={'right'}>
                    <button>
                        <a href="#contact">
                            <p><a className={'tilde'}>~</a>/contact</p>
                        </a>
                    </button>
                </li>
                <li className={'right'}>
                    <button>
                        <a href="#projects">
                            <p><a className={'tilde'}>~</a>/projects</p>
                        </a>
                    </button>
                </li>
                <li className={'right'}>
                    <button>
                        <a href="#about">
                            <p><a className={'tilde'}>~</a>/</p>
                        </a>
                    </button>
                </li>
            </ol>
        </div>
    )
}

export default Header