import { useNavigate, Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'


function Header(props) {
  let navigate = useNavigate()
  let token = localStorage.getItem('token')
  
  const onClickLogout =() =>{
    localStorage.removeItem('token')
    navigate("/")
  }
 
  return (
    
    <>
      <Navbar bg="dark" variant="dark" className='nav'>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/home" className='link'>
          <img
            alt="logo"
            src="https://cdn.dribbble.com/users/2592071/screenshots/7327591/logo-artboard_2_4x_4x.png"
            width="50"
            height="30"
            className="d-inline-block align-top dev-logo "
          />{' '}
          
          DevHubs
          </Link>
        </Navbar.Brand>
        <div className='btn-container'>
          <Link className='profile-lnk' to="/myprofile">My profile</Link>
          <button type='button' className='btn btn-primary logout-btn' onClick={onClickLogout}>Logout</button>
        </div>
      </Container>
    </Navbar>   
    </>
  );
}

export default Header;