import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Offcanvas,
  Button,
} from "react-bootstrap";
import TokenService from "../Services/TokenService";
import logo from "../img/logo.jpg";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navi = () => {
  const auth = TokenService.getToken();

  function handleSignOut() {
    TokenService.deleteToken();
    window.location = "/welcome";
  }

  return (
    <Navbar bg="light" expand={false}>
      <Container className="shadow p-4 w-100">
        <Container className="w-25 ">
          <Navbar.Brand href="/">
            <Image src={logo} fluid style={{ width: "300px" }} />
          </Navbar.Brand>
        </Container>
        <Container className="w-50" align="center">
          <h3>Afet Yardım Sistemi</h3>
        </Container>
        <Container className="w-25 " align="end">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="m-4 px-4">
                Afet Yardım Sistemi
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item className=" my-2">
                  {auth ? <SignedIn signOut={handleSignOut} /> : <SignedOut />}
                </Nav.Item>

                

                <Nav.Link className="mx-5 my-2 px-3" href="/socialmedia">
                  Sosyal Medya
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Navi;
