import Layout from "../Components/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <Layout>
                <div className="body">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={8} style={{}}>
                                <h1>About me</h1>
                                <h4>I am a software developer based out of Dallas, TX, I strive to make software that solves everyday issues
                                    people encounter, links to my portfolio are available in the portfolio page!
                                </h4>
                            </Col>
                            <Col xs={12} sm={12} md={4} style={{}}>
                                <h1>Tech used</h1>
                               <ul>
                                   <li>HTML</li>
                                   <li>CSS</li>
                                   <li>JavaScript</li>
                                   <li>Python</li>
                                   <li>Java</li>
                                   <li>React</li>
                               </ul>
                            </Col>

                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                            <h1>Contact me</h1>
                            <h3>Email: nick.pappas.adams@gmail.com</h3>
                            <h3>Phone: (916) 996-1799</h3>
                            <h3>Linkedin: https://www.linkedin.com/in/nick-p-adams/</h3>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>

            <style jsx>{
                `
                 .body {
                     background-color: black;
                     height: 750px;
                 }
            `}

            </style>

        </>
    )

}

export default Home;