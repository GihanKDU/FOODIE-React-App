import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
    <Navbar expand="lg" className=" Navbar web-view">
      <Container>
        <Navbar.Brand className='font-bold font-32 font-logo' href="#home">FOODIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Button className='button-primary ml-20'>Signin</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;