import React from 'react'
import { Link, Nav } from 'react-router-dom'

export default function () {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
            <Link className="navbar-brand" to={"/"}><i className='uil uil-user'></i> Marvel</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#about" className="nav-link"><span data-hover="About">About</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="nav-link"><span data-hover="Projects">Projects</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" className="nav-link"><span data-hover="Resume">Resume</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>
                    <li className="nav-item">
                    <Link to={"/blog"} className="nav-link"><span data-hover="Blog">Blog</span></Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-lg-auto">
                    <div className="ml-lg-4">
                    <div className="color-mode d-lg-flex justify-content-center align-items-center">
                        <i className="color-mode-icon"></i>
                        Color mode
                    </div>
                    </div>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
