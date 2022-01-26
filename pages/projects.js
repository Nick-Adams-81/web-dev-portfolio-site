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
                    <h1>Portfolio</h1>
                    <Row style={{ display: 'flex' }}>
                        {projects1.map(project => {
                            return (
                                <Col sm={12} md={6} lg={4} key={project.id} >
                                    <div id="card-body"  className="animate__animated animate__fadeInRightBig" key={project.id}>
                                        <Card style={{ width: '20rem', margin: '6px', backgroundColor: '#302D2D'}} id="card" className="mx-auto">
                                            <Card.Img variant="top" src={project.image} height={200} width={70} style={{padding: '5px'}}/>
                                            <Card.Body>
                                                <Card.Title style={{color: '#828282'}}>{project.title}</Card.Title>
                                                <Card.Text style={{color: '#C8C8C8'}}>{project.description}</Card.Text>
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
                     height: 100%;
                     width: 100%;
                     padding: 15px;
                     margin-top: 56px;
                   
                 }

                 #card-body {
                     margin-left: 4px;
                     margin-right: 2px;
                     --animate-duration: 2000ms;
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