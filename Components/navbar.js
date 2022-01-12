import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const navbar = () => {

    return (
        <>

            <Navbar bg="dark" expand="md" variant="dark" style={{borderRadius: 2, zIndex: 1}}>
                <Container>
                    <Navbar.Brand href="/">NickAdams</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" id="links">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/tech">Tech</Nav.Link>
                            <Nav.Link href="/projects" id="link-2">Portfolio</Nav.Link>
                            <Nav.Link href="/connect" id="link-3">Connect</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}


export default navbar;