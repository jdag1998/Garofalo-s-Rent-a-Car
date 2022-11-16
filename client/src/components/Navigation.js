import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default function Navigation(){
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as ={NavLink} to="/"> Task Manager </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as ={NavLink} to="/projects">Projects</Nav.Link>
                <NavDropdown title="Admin">
                <NavDropdown.Item as ={NavLink} to="/admin/users">Users</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link as ={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link as ={NavLink} to="/register">Register</Nav.Link>
                <Nav.Link as ={NavLink} to="/account">My Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        <h1>Navigation</h1>
        </Navbar>
    )
}