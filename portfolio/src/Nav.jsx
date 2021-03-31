import React from 'react'
import { Link } from "react-router-dom";
import resume from './resume.pdf'

export default function Nav() {
    return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<p>Brandon Fontes</p>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link to="/react_portfolio" className="nav-item nav-link">Home</Link> <span className="sr-only">(current)</span>
						<Link to="/projects" className="nav-item nav-link">Projects</Link>
						<a className="nav-item nav-link" href={resume} target="_blank">Resume</a>
					</div>
				</div>
			</nav>
		</>
    );
}
