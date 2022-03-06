import { Navbar, Container, Nav } from "react-bootstrap";
// import AuthContext from "../store/AuthContext";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

function HeadNavbar() {
  // const authctx = useContext(AuthContext);
  // const navigate = useNavigate();
  // console.log("authctx", authctx);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
          <Navbar.Brand href='/'>Google Form Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Questions</Nav.Link>
            <Nav.Link href='/'>Responses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeadNavbar;
