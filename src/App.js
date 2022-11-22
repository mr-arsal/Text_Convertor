
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {
  HashRouter,
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }


  return (

    <HashRouter>
      <Navbar title="WordConvertor" about="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text below" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
