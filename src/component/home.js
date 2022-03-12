
import { Container } from 'react-bootstrap/'
import { Link } from "react-router-dom";

export default function HomePage(){

    return (
        <Container fluid className='bgImgroud' style={{height: '100vh'}}>
            <div className='container-fluid'>
                <div className="jumbotron" >
                    <div className="container" style={{paddingTop:'15%'}}>
                        <div className='row'>
                        <h1 className="display-4 text-light">Welcome</h1>
                        <p className="lead text-light">This is a CMS (Content Management System) webpage.</p>
                        </div>
                        <p className="lead text-light">Created by Siwakorn</p>
                        <Link className="btn btn-lg btn-secondary fw-bold border-white bg-white text-secondary" to="/category">Go to content</Link>
                    </div>
                </div>
            </div>
                
        </Container>
    )

}