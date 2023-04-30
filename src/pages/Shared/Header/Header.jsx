import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-3">
        <h2>Prime News</h2>
        <p>Truth Speaks for Itself</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        <div className="d-flex">
          <Button variant="danger">Breaking</Button>
          <Marquee className="text-danger" speed={200}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
      <Navbar className="mt-2" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#login">
              <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
