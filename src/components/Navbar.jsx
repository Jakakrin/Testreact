import { Navbar, Nav, Container, Col, Button, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from "../img/logo.png";
import { Component } from "react";
import "../components/Navbar.css";


class NavBarExample extends Component {
  // const NavBarExample = () => {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        {/* <Navbar className="navBg " variant="black " expand="lg">
 
              <Navbar.Brand as={Link} to="/">
                <img className="inglogo" src={logo} />
              </Navbar.Brand>
          

           
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-3">
                  <Nav.Link as={Link} to="/">
                    หน้าหลัก
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    เกี่ยวกับเรา
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    คลังพระเครือง
                  </Nav.Link>
                </Nav>

              </Navbar.Collapse>
      </Navbar>

       */}
        <nav>
          <a href="/home">
            <img className="inglogo" src={logo} alt="" />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="/home">
                  หน้าหลัก
                </a>
              </li>
              <li>
                <a href="/about">เกี่ยวกับเรา</a>
              </li>
              <li>
                <a href="/contact">คลังพระเครือง</a>
              </li>
              <li>
                <Button variant="outline-success" align="right">
                  สมัครสมาชิก
                </Button>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
        <section>
          <Outlet></Outlet>
        </section>
      </>
    );
  }
}
export default NavBarExample;
