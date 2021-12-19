import Layout from "../Components/Layout";
import projects1 from "./projects.json";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const projects = () => {

    return (
        <>
            <Layout>
                <div className="body">
                    <div style={{display: 'flex'}} xs={12}  sm={6} md={6} lg={6}>
                        {projects1.map(project => {
                            return (
                                <Container>
                                    <Row >
                                        <Col  style={{flexDirection: 'column'}}>
                                            <Card style={{ width: '18rem', margin: '10px' }} id={project.id} id="card">
                                                <Card.Img variant="top" src={project.image} />
                                                <Card.Body>
                                                    <Card.Title>{project.title}</Card.Title>
                                                    <Card.Text>{project.description}</Card.Text>
                                                    <Button variant="outline-secondary" href={project.link} className="btn" style={{ marginLeft: '28%'}}>View Here</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        })}
                    </div>
                </div>
            </Layout>

            <style jsx>{
                `
                 .body {
                     background-color: black;
                     height: 100%;
                     width:100%;
                 }

    
                a {
                    text-decoration: none;
                }  
               
            `}

            </style>

        </>
    )
}

export default projects;