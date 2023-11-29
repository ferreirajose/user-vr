import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/layout/Menu';
import Content from './components/layout/Content';
import { useAuth } from './Auth/AuthContext';

const App = (props) => {
  const { user } = useAuth()

  return (
    <div className="App">
    <Router>
      {user && <Menu />}
      <Content />
    </Router>
  </div>
  );
};

export default App;


