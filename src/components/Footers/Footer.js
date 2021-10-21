
/*eslint-disable*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import { Row, Container } from "reactstrap";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  
} from "reactstrap";


function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, by Aiden Zich
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
