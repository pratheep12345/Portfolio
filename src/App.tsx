import React, { useState } from 'react';
import bgImg from './assets/login_background.png';
import dashboardImg from './assets/image.jpeg';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <header className="dashboard-header">
            <h2>Dashboard</h2>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </header>
          
          <main className="dashboard-main-split">
            <div className="profile-content">
              <div className="profile-avatar">PK</div>
              <h1>Pratheep Kumar</h1>
              <h3 className="profile-role">Software Developer</h3>
              <div className="profile-divider"></div>
              <p className="profile-intro">
                Hello! This is an introduction to myself. I am a passionate software developer, 
                dedicated to building high-quality, user-friendly, and modern web applications.
              </p>
            </div>
          </main>
        </div>
        
        <div className="dashboard-right">
          <img src={dashboardImg} alt="Dashboard Background" className="background-image" />
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-container">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" className="login-button">Sign In</button>
          </form>
          
          <div className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
      
      <div className="login-right">
        <img src={bgImg} alt="Abstract Background" className="background-image" />
      </div>
    </div>
  );
}

export default App;
