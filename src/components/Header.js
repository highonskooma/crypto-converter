import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Nav className='navbar-nav'>
          <Nav.Link href="#link1">Personal</Nav.Link>
          <Nav.Link href="#link2">Business</Nav.Link>
          <Nav.Link href="#link3">Partners</Nav.Link>
        </Nav>
        <Navbar.Brand>
          <img
            src="/logo/uphold-logo-green.png"
            width="90"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
       <Nav className='login-button'> 
          <Button variant="outline-primary">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
