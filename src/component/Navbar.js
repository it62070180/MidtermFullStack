import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Navber = () => {
    return(
    <Navbar style={{ backgroundColor: "#061314" }} variant="dark">
        <Container >
            <Navbar.Brand to="/">SIWAX</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/"  className='pe-1' style={{textDecoration:'none',color:'white'}} >HomePage</Link>
                    <Link to="/category"  className='pe-1' style={{textDecoration:'none',color:'white'}} >Category</Link>
                    <Link to="/Author"  className='pe-1' style={{textDecoration:'none',color:'white'}} >Author</Link>
                </Nav>
        </Container>
    </Navbar>
 );
}

export default Navber;
