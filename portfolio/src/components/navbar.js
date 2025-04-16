import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import './Navbar.css';

function Navbar() {
    return (
        <Router>
            <nav className="navbar">
                <h1>My Portfolio</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>

            <div className="page-content">
                <Routes>
                    {/* Home route is blank because it’s already in App.js */}
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;
