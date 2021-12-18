import Layout from "../Components/Layout";
import projects1 from "./projects.json";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const projects = () => {

    //  <img src={project.image} class="card-img-top" alt="..."/>
    // <a href={project.link}>View project</a> 
    return (
        <>
            <Layout>
                <div className="body">
                    <div>
                        {projects1.map(project => {
                            return (
                                <Container>
                                    <Row>
                                        <Col xs={6} direction="horizontal" gap={3} id="card" style={{ display: 'flex', flexDirection: 'row'}}>
                                            <Card style={{ width: '18rem' }} id={project.id}>
                                                <Card.Img variant="top" src={project.image} />
                                                <Card.Body>
                                                    <Card.Title>{project.title}</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the bulk of
                                                        the card's content.
                                                    </Card.Text>
                                                    <Button variant="outline-secondary" href="" className="btn">Go somewhere</Button>
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
                     height: 750px;
                 }

    
                a {
                    text-decoration: none;
                }

                .card {
                    display: flex;
                    flex-direction: row;
                }

                .btn {
                    margin-left: 25px;
                }

        
                
               
            `}

            </style>

        </>
    )
}

export default projects;