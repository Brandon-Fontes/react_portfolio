import React from 'react';
import { Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Route path="/react_portfolio"><Home /></Route>
      <Route path="/projects"><Projects /></Route>
    </div>
  );
}