import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PersonCircle, PeopleFill, HouseFill } from 'react-bootstrap-icons';

function Navbar() {
  return (
    <Wrapper>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><span> SB</span>Finder</Link>
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="home-seeker"> <HouseFill className='icon'/>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="seeker-profile"> <PersonCircle className='icon'/>Profile</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link " to='donor-list'><PeopleFill className='icon'/>Donor's List</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    </div>
    
  </div>
</nav>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
span{
    color: red;
    font-weight: 700;
}

.icon{
  padding-right: 4px;
  font-size: 1.5rem;
  margin-bottom: 6px;
}

.collapse{
    margin-right: 30px;
}
.navbar-brand{
    margin-left: 10px;
    font-weight: 600;
    font-size: 1.5rem;
}

`