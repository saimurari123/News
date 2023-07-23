import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">News India</Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/sports' className='nav-link'>sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/technology">Technology</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/business">Business</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/movies">Movies</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/education">Education</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/employment">Employment</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar