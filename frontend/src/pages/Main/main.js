import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './main.css';
import axios from 'axios';
const Main = () => {
    const [file, setFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [results, setResults] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const uploadedFile = acceptedFiles[0];
        setFile(uploadedFile);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'text/plain': ['.txt'],
            'application/json': ['.json']
        },
        multiple: false
    });

    const handleAnalyze = async () => {
        if (!file) return;

        axios.post('/api/upload-file',file)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });

        
        setIsAnalyzing(true);
        // Simulated analysis - replace with actual API call
        setTimeout(() => {
            setResults({
                sentiment: {
                    score: 0.8,
                    label: 'Positive'
                },
                personality: [
                    'Analytical',
                    'Confident',
                    'Collaborative'
                ],
                keyPhrases: [
                    'problem solving',
                    'team collaboration',
                    'innovative solutions'
                ]
            });
            setIsAnalyzing(false);
        }, 2000);
    };

    const resetAnalysis = () => {
        setFile(null);
        setResults(null);
    };

    return (
        <div className="main-container">
            <div className="upload-section">
                <div 
                    {...getRootProps()} 
                    className={`dropzone ${isDragActive ? 'active' : ''} ${file ? 'has-file' : ''}`}
                >
                    <input {...getInputProps()} />
                    {!file ? (
                        <>
                            <div className="upload-icon">📄</div>
                            <p className="upload-text">
                                {isDragActive
                                    ? "Drop your chat log here..."
                                    : "Drag and drop your chat log here, or click to select"}
                            </p>
                            <p className="upload-hint">Supports .txt and .json files</p>
                        </>
                    ) : (
                        <div className="file-info">
                            <p className="file-name">{file.name}</p>
                            <button className="remove-file" onClick={(e) => {
                                e.stopPropagation();
                                resetAnalysis();
                            }}>×</button>
                        </div>
                    )}
                </div>

                {file && !isAnalyzing && !results && (
                    <button 
                        className="analyze-button"
                        onClick={handleAnalyze}
                    >
                        Analyze Chat Log
                    </button>
                )}

                {isAnalyzing && (
                    <div className="analyzing-state">
                        <div className="loading-spinner"></div>
                        <p>Analyzing your chat log...</p>
                    </div>
                )}
            </div>

            {results && (
                <div className="results-section">
                    <h2>Analysis Results</h2>
                    
                    <div className="result-card sentiment">
                        <h3>Sentiment Analysis</h3>
                        <div className="sentiment-score">
                            <span className="emoji">
                                {results.sentiment.score > 0.5 ? '😊' : '😐'}
                            </span>
                            <p>{results.sentiment.label}</p>
                        </div>
                    </div>

                    <div className="result-card personality">
                        <h3>Personality Traits</h3>
                        <ul>
                            {results.personality.map((trait, index) => (
                                <li key={index}>{trait}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="result-card key-phrases">
                        <h3>Key Phrases</h3>
                        <div className="phrases-container">
                            {results.keyPhrases.map((phrase, index) => (
                                <span key={index} className="phrase-tag">
                                    {phrase}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button 
                        className="new-analysis-button"
                        onClick={resetAnalysis}
                    >
                        Start New Analysis
                    </button>
                </div>
            )}
        </div>
    );
};

export default Main;
