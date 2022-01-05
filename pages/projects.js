import Layout from "../Components/Layout";
import projects1 from "./projects.json";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const projects = () => {

    return (
        <>
            <Layout>
                <div className="body">
                    <h1>Projects</h1>
                    <Row style={{ display: 'flex' }}>
                        {projects1.map(project => {
                            return (
                                <Col sm={12} md={6} lg={4}>
                                    <div id="card-body" key={project.id} className="animate__animated animate__fadeInRight">
                                        <Card style={{ width: '20rem', margin: '6px' }} id="card" className="mx-auto">
                                            <Card.Img variant="top" src={project.image} />
                                            <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                                <Card.Text>{project.description}</Card.Text>
                                                <Button variant="outline-secondary" href={project.link} className="btn" style={{ marginLeft: '28%' }}>View Here</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Layout>

            <style jsx>{
                `
                 .body {
                     background-color: black;
                     height: 100vh%;
                     width: 1000px%;
                 }

                 #card-body {
                     margin-left: 4px;
                     margin-right: 2px;
                 }

                 h1 {
                     text-align: center;
                     color: #4B4E4B;
                     margin-bottom: 25px;
                 }
   
            `}

            </style>

        </>
    )
}

export default projects;