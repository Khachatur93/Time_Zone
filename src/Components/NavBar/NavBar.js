import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { logo } from "../ImgLinks/ImgLinks";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className={style.nav} fixed="top">
      <Navbar.Brand exact>
        <img
          src={logo}
          width="130"
          height="30"
          className={style.logo}
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className={style.link}>
        <Nav>
          <NavLink to="/Main" exact className={style.nl}>
            Home
          </NavLink>
          <NavLink to="/ShopPage" exact className={style.nl}>
            Shop
          </NavLink>
          <NavLink to="/About" exact className={style.nl}>
            About
          </NavLink>

          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item className={style.nl}>Action</NavDropdown.Item>
            <NavDropdown.Item className={style.nl}>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Something else here</NavDropdown.Item>
          </NavDropdown>

          <NavLink className={style.nl} to="/Contacts" exact>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
