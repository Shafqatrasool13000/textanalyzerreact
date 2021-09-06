import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {


  const [show, setShow] = useState(false)
  const { title, about, mode, toggleMode ,toggleRed,toggleGreen} = props;


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
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{about}</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>

            </ul>
           
            <div className={`form-check form-switch text-${mode === 'dark' ? 'white' : "dark"}`}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode === 'dark' ? 'light' : "dark"} mode</label>
            </div>
            <div className={`form-check form-switch text-${mode === 'dark' ? 'white' : "dark"}`}>
              <input className="form-check-input" onClick={toggleRed} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode === 'dark' ? 'light' : "red"} mode</label>
            </div>
            <div className={`form-check form-switch text-${mode === 'dark' ? 'white' : "dark"}`}>
              <input className="form-check-input" onClick={toggleGreen} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode === 'dark' ? 'light' : "green"} mode</label>
            </div>
            
            {/* <form className='d-flex'>
              <input className="form-control me-2" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" >Search</button>

            </form> */}
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
  title: 'textUtils',
  about: 'About'
}