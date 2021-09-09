import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  const [show, setShow] = useState(false)
  const { title, about, mode, toggleMode } = props;
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode === 'dark' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" onClick={() => { setShow(!show) }}></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{about}</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>

            </ul>

            <div className="d-flex ">

            <div className="bg-primary mx-2" style={{width:'2rem',height:'2rem'}} onClick={()=>{toggleMode('primary')}}></div>
            <div className="bg-danger mx-2" style={{width:'2rem',height:'2rem'}} onClick={()=>{toggleMode('danger')}}></div>
            <div className="bg-success mx-2" style={{width:'2rem',height:'2rem'}} onClick={()=>{toggleMode('success')}}></div>
            <div className="bg-warning mx-2" style={{width:'2rem',height:'2rem'}} onClick={()=>{toggleMode('warning')}}></div>
          </div>
            </div>
          
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired

}
Navbar.defaultProps = {
  title: 'TextAnalyzer',
  about: 'About'
}