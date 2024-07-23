import React from 'react'
import { NavLink } from 'react-router-dom'
import profilePhoto from './Image/user.png'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a href="https://agreemtech.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src={`https://agreemtech.com/wp-content/themes/credos/assets/images/logo.png.pagespeed.ce.NIuURNT4KN.png`}
                            alt="Profile"
                            className="profile-photo"
                            style={{
                                maxWidth: '225px',
                                height: 'auto',
                                transition: 'all 1s ease',
                                width: 'auto'
                            }}
                        />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/about">About</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ ">
                                        <img src={profilePhoto} alt="Profile" className="profile-photo" style={{ width: '40px', height: '40px' }} />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
