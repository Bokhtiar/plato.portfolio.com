import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
            <Link className="navbar-brand" to={"/"}> <img className='navbar-image' src="./frontend/images/logo.jpg"  alt="svg image"/>  <span className="text-success">Bokhtiar</span> <span>Toshar</span> </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"about"} className="nav-link"><span data-hover="About">About</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"project"} className="nav-link"><span data-hover="Projects">Projects</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"resume"} className="nav-link"><span data-hover="Resume">Resume</span></Link>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>
                    <li className="nav-item">
                    <Link to={"/blog"} className="nav-link"><span data-hover="Blog">Blog</span></Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
