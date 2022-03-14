import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';


const Navber = () => {
    return(
    <Navbar style={{ backgroundColor: "#061314" }} variant="dark">
        <Container>
        <Navbar.Brand href="/">SIWAX</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/">HomePage</Nav.Link>
        <Nav.Link href="/category">Category</Nav.Link>
        <Nav.Link href="/Author">Author</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
 );
}

export default Navber;
