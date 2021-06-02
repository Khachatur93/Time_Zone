import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import style from "./NavBar.module.css";
import { logo } from "../ImgLinks/ImgLinks";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className={style.nav} fixed="top">
      <Navbar.Brand href="#">
        <img
          src={logo}
          width="100"
          height="25"
          className={style.logo}
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className={style.link}>
        <Nav>
          <Nav.Link className={style.nl} href="#action1">
            Home
          </Nav.Link>
          <Nav.Link className={style.nl} href="#action2">
            Shop
          </Nav.Link>
          <Nav.Link className={style.nl} href="#action2">
            About
          </Nav.Link>

          <NavDropdown
            className={style.nl}
            title="Link"
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item className={style.nl} href="#action3">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item className={style.nl} href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className={style.nl} href="#action2">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
