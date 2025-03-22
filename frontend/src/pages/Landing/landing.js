import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const Landing = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    const handleCTAClick = () => {
        navigate('/main');
    };

    return (
        <div className={`landing-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <header className="header">
                <div className="logo">ChatDoctor</div>
                <button 
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </header>

            <main className="hero-section">
                <h1 className="hero-title">
                    Analyze Your Chat Logs with AI
                </h1>
                <p className="hero-description">
                    Unlock deep insights from your conversations using advanced AI analysis.
                    Discover personality traits, sentiment patterns, and hidden meanings.
                </p>
                <button 
                    className="cta-button"
                    onClick={handleCTAClick}
                >
                    Upload Chat Log Now
                    <span className="arrow">→</span>
                </button>
            </main>

            <div className="background-pattern"></div>
        </div>
    );
};

export default Landing;
