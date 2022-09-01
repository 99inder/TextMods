import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  //State and Functions to give and set Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  //State and Functions to Enableor Disable Dark Mode
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#08175e";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark mode has been disabled", "success");
    }
  }

  //React return starts here
  return (
    <>
      <Router>
        <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          <Routes>
            <Route exact path="/" element={<Textbox mode={mode} showAlert={showAlert} placeholder="Enter your text here" />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
