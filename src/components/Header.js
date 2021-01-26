import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from './../logo.png';

const Styles = styled.div`
  .navbar { background-color: #1b1112; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <img src={logo} alt={"logo"} width="40px" height="40px"/> 
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">User</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)