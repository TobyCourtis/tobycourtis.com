import './Header.css'

function Header() {
    return (
        <div className={"header-div"}>
            <ol className="header-list">
                {/* left hand side */}
                <li>
                    <button className={'left'}>
                        <h1>tobycourtis.com</h1>
                    </button>
                </li>

                {/* right hand side */}
                <li className={'right'}>
                    <button>
                        <p><a className={'tilde'}>~</a>/contact</p>
                    </button>
                </li>
                <li className={'right'}>
                    <button>
                        <p><a className={'tilde'}>~</a>/projects</p>
                    </button>
                </li>
                <li className={'right'}>
                    <button>
                        <p><a className={'tilde'}>~</a>/</p>
                    </button>
                </li>
            </ol>
        </div>
    )
}

export default Header