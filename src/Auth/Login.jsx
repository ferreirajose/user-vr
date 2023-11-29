import './Login.css';

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      setIsUsernameEmpty(true);
      return;
    } else {
      setIsUsernameEmpty(false);
    }

    if (!password.trim()) {
      setIsPasswordEmpty(true);
      return;
    } else {
      setIsPasswordEmpty(false);
    }

    if (typeof login === 'function') {
      login(username, password);
      navigate('/user');
    }
  };

  return (
    <div className="Login-container">
      <h2 className="Login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setIsUsernameEmpty(false);
        }}
        className={`Login-input ${isUsernameEmpty ? 'Error-border' : ''}`}
      />
      {isUsernameEmpty && <p className="Error-text">Campo obrigatório</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setIsPasswordEmpty(false);
        }}
        className={`Login-input ${isPasswordEmpty ? 'Error-border' : ''}`}
      />
      {isPasswordEmpty && <p className="Error-text">Campo obrigatório</p>}
      <button onClick={handleLogin} className="Login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
