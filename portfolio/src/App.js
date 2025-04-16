import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h2>Welcome to My Portfolio</h2>
        <p>Hello! I'm Chloe Becker, a full-stack developer passionate about building web apps.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
