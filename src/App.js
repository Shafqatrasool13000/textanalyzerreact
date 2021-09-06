import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  const [darkMode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  //Button toggle to light mode and dark mode
  const toggleModes = () => {
 
    if(darkMode==='dark'){
      setDarkMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode Enabled','success')
      document.title="TextUtils-Light"
      
    }else{
      setDarkMode('dark')
      document.body.style.backgroundColor='#0d2f51'
      showAlert('Dark mode Enabled','secondary')
      // setInterval(() => {
      // document.title="TextUtils-Amazing"
        
      // }, 1300);
      // setInterval(() => {
        
      //   document.title="TextUtils-good"
      // }, 2000);
      
    }
  }
  const redModes = () => {
 
    if(darkMode==='dark'){
      setDarkMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode Enabled','success')
    }else{
      setDarkMode('dark')
      document.body.style.backgroundColor='#360c0c'
      showAlert('Red mode Enabled','danger')
    }
  }
  const greenModes = () => {
 
    if(darkMode==='dark'){
      setDarkMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode Enabled','success')
    }else{
      setDarkMode('dark')
      document.body.style.backgroundColor='#1d563c'
      showAlert('Green mode Enabled','success')
    }
  }

  //Show Alert when use interact with website
  const showAlert=(message,type)=>{
 setAlert({
   msg:message,
   type:type
 })
 setTimeout(() => {
   setAlert(null)
 }, 2000);
  }
  
  
 return (
    <>
    <Router>

      <Navbar title='textUtils' about='About' mode={darkMode} toggleMode={toggleModes} toggleRed={redModes} toggleGreen={greenModes} />
      <Alert alert={alert}/>
      <Route path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForm heading='Enter your text to analyze below' mode={darkMode} alert={showAlert}/>
          </Route>
     
      
    </Router>
    </>
  );
}

export default App;
