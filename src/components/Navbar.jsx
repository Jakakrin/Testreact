import { Navbar, Nav, Container,Col ,Button} from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import logo from "../img/logo.png"
import '../components/Navbar.css'
const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg " variant="black " expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >
            <img
            className="inglogo"
            src={logo}
          />


            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
                <Nav.Link as={Link} to="/" >หน้าหลัก</Nav.Link>
                <Nav.Link as={Link} to="/about">เกี่ยวกับเรา</Nav.Link>
                <Nav.Link as={Link} to="/contact">คลังพระเครือง</Nav.Link>       

                
            </Nav>
                <Button variant="outline-success" align="right">สมัครสมาชิก</Button>   
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample