
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform your login logic

    setUsername('');
    setPassword('');
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://www.mychoize.com/_next/static/media/login_bg.9b366799.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h2 style={{color:'red'}}>Login</h2>
        <form onSubmit={handleSubmit}>
       
          
        <label style={{ color: 'orange' }}>
      
            Username:
           
          
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ color: 'red' }} 
            />
          </label>
          <br />
          <label style={{color:"orange"}}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff9800',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
