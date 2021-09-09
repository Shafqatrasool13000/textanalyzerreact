import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"


function App() {
  const [darkMode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const removeClasses=()=>{
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }
  
  const toggleModes = (cls) => {
    removeClasses();
    //Modes Logic
    document.body.classList.add("bg-"+cls);
    if (darkMode === 'dark') {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode Enabled', 'success')
      document.title = "TextUtils-Light"

    } else {
      setDarkMode('dark')
      document.body.style.backgroundColor = '#0d2f51'
      showAlert('Dark mode Enabled', 'secondary')


    }
  }


  //Show Alert when use interact with website
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title='TextAnalyzer' about='About' mode={darkMode} toggleMode={toggleModes} />
        <Alert alert={alert} />
        <Route path="/about">
          <About mode={darkMode}/>
        </Route>

        <Route exact path="/">
          <TextForm heading='Text Analyzer Text Counter, Convert uppercase to lowercase ,Check Read Time' mode={darkMode} alert={showAlert} />
        </Route>


      </Router>
    </>
  );
}

export default App;
