import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/AboutMe';
import Feedback from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Efecto de partículas como fondo
    const container = document.querySelector('.app');
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${5 + Math.random() * 10}s`;
      container.appendChild(bubble);
    }
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
