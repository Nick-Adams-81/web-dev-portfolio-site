import Layout from "../Components/Layout";
import projects1 from "./projects.json";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const projects = () => {

    return (
        <>
            <Layout>
                <div className="body">
                    <div style={{ display: 'flex' }}>
                        {projects1.map(project => {
                            return (
                                <div id="card-body" key={project.id}>
                                    <Card style={{ width: '18rem', margin: '5px' }} id="card">
                                        <Card.Img variant="top" src={project.image} />
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                            <Button variant="outline-secondary" href={project.link} className="btn" style={{ marginLeft: '28%' }}>View Here</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
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
                     width: 100%;
                     display: inline-block;
                 }

                 #card-body {
                     background-color: green;
                     width: 100%;
                 }
   
            `}

            </style>

        </>
    )
}

export default projects;