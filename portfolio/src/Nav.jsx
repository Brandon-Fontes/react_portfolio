import React from 'react'
import { Link, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';

export default function Nav() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <p>Brandon Fontes</p>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <Link to="/">Home</Link> <span class="sr-only">(current)</span>
          <Link to="/projects">Projects</Link>
            <a class="nav-item nav-link" href="/Brandon_Fontes_Resume.PDF" target="_blank">Resume</a>
          </div>
        </div>
      </nav>

      <Route exact path="/"><Home /></Route>
      <Route path="/projects"><Projects /></Route>
      </>
    );
}
