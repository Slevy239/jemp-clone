import React from 'react';
import './App.css';
import Home from './pages/main';
import Footer from './components/Footer/footer';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  return (
    <div className='App'>

      <div className="page-container">
        <div className='content-wrap'>

          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
