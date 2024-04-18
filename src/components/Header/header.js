import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>

     
        <NavLink className='navbar-brand' to='/' >My project</NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavLink className='nav-link' to='/' >Home</NavLink>
            <NavLink className='nav-link' to='/users'>Users</NavLink>
            <NavLink className='nav-link' to='/admins'>Admins</NavLink>

          </Nav>

          <Nav>
            <button className='btn-login'>Login</button>
            <button className='btn-signup'>Sign up</button>

            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;