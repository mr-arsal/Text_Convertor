
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import Alert from './components/Alert';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 1000);
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      // showAlert('Dark Mode has been enabled.', 'success')
      // document.title = "WordConvertor - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // showAlert('Light Mode has been enabled.', 'success')
      // document.title = "WordConvertor - Light Mode"
    }
  }


  return (
    
      <BrowserRouter>
        <Navbar title="WordConvertor" about="About Us" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform heading="Enter the text below" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
