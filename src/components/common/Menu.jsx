import { Navbar, Container, Nav, Button } from "react-bootstrap";
const Menu = () => {
    return (
        <Navbar className="p-3" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Recetita</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link end to={'/'} className={'nav-item nav-link'}>Inicio</Nav.Link>
                        <Nav.Link end to={'/registro'} className={'nav-item nav-link'}>Registro</Nav.Link>
                        <Nav.Link end to={'/administrador'} className={'nav-item nav-link'}>Administrador</Nav.Link>
                        <Button className={'nav-item nav-link'}>Logout</Button>
                        <Nav.Link end to={'/login'} className={'nav-item nav-link'}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;