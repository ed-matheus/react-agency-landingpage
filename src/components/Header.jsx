import './Header.css'

const Header = () => {
    return (
        <>
            <div className="main_container">
                <nav className="navbar navbar-expand-lg px-4 py-3">
                    <div className="container-fluid d-flex align-items-center ">
                        <a class="navbar-brand" href="#">
                            <img src="/img/logo.svg" alt="sunnyside logo" />
                        </a>

                        <div>
                            <button className="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <img src="/img/icon-hamburger.svg"></img>
                            </button>
                            <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                                <ul className="navbar-nav">
                                    <li className="nav-item me-5">
                                        <a href="#">About</a>
                                    </li>
                                    <li className="nav-item me-5">
                                    <a href="#">Services</a>
                                    </li>
                                    <li className="nav-item me-5">
                                        <a href="#">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className='btn px-3 py-2'>contact</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header