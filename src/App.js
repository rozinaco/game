import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rozina</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Game</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <About />
    </>
  )
  function About() {
    return (
      <p>This is the story all about how my life got flipped turned...</p>
    )
  }
}
export default App;
