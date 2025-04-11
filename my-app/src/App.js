import React, { useState, useEffect } from 'react';
import './App.css'; 
import logo from './images/full-logo.png'; 

function App() {
  const [completedWeeks, setCompletedWeeks] = useState([false, false, false, false]);
  const [formData, setFormData] = useState({
    avatar_id: '',
    title: '',
    name: '',
    progress: 0,
    deadline: '',
    token: ''
  });

  useEffect(() => {
    const totalWeeks = completedWeeks.length;
    const completedCount = completedWeeks.filter(Boolean).length;
    const progressPercentage = (completedCount / totalWeeks) * 100;
    setFormData((prevData) => ({ ...prevData, progress: Math.round(progressPercentage) }));
  }, [completedWeeks]);

  const toggleWeek = (index) => {
    // Check if the selected week is the next in order
    const isNextWeek = completedWeeks.slice(0, index).every(Boolean);
    if (!isNextWeek) {
      alert('Please complete previous weeks in order to proceed.');
      return; // Stop if the order is not followed
    }

    const newCompletedWeeks = [...completedWeeks];
    newCompletedWeeks[index] = !newCompletedWeeks[index];
    setCompletedWeeks(newCompletedWeeks);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidUUID = (uuid) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate avatar_id format
    if (!isValidUUID(formData.avatar_id)) {
      alert('Invalid Avatar ID format. Please use the format: 8c134b8e-eba2-48e7-a648-8bf4458a517d');
      return; // Stop the submission if the format is invalid
    }

    // Validate token presence
    if (!formData.token) {
      alert('Unauthorized access: Token is required.');
      return; // Stop the submission if the token is missing
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/generate-video/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to the avatar page after successful submission
        window.location.href = 'https://playground.gan.ai/avatar';
      } else {
        if (response.status === 403) {
          alert('Unauthorized: Invalid token.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          EdTech <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="https://developer.gan.ai/introduction" target="_blank" rel="noopener noreferrer">API Documentation</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#Pricing">Pricing</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Log In</button>
          <button className="signup">Sign Up</button>
        </div>
      </header>

      <h1 className="title">AI-Powered Learning for Tomorrow's Leaders</h1>
      <p className="subtitle">Empowering students with personalized, interactive learning.</p>
      <button className="get-started">Get Started</button>

      <ul className="week-list">
        {completedWeeks.map((completed, index) => (
          <li key={index} className={`week-item ${completed ? 'completed' : ''}`} onClick={() => toggleWeek(index)}>
            Week {index + 1} <span className="tick">{completed ? '✔️' : '❌'}</span>
          </li>
        ))}
      </ul>

      <div className="progress-display">
        <h2>Your Progress so far:</h2>
        <div className="circular-progress">
          <div className="progress-circle" style={{ background: `conic-gradient(#4caf50 ${formData.progress}%, #e0e0e0 ${formData.progress}%)` }}>
            <span className="progress-text">{formData.progress.toFixed(0)}%</span>
          </div>
        </div>
        {completedWeeks.every(Boolean) && (
          <div className="celebration-message">
            🎉 Congratulations! You've completed all weeks! 👏
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="data-form">
        <h2>Personalized AI Assistant Intake Form | Powered by Gan.AI</h2>
        <input type="text" name="avatar_id" placeholder="Avatar ID" value={formData.avatar_id} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="progress" value={formData.progress} readOnly />
        <input type="text" name="deadline" placeholder="Deadline" value={formData.deadline} onChange={handleChange} required />
        <input type="text" name="token" placeholder="Token" value={formData.token} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;