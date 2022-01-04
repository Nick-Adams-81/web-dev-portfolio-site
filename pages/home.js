import Layout from "../Components/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <Layout>
                <div className="body">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={8} style={{}}>
                                <div>
                                    <h1 className="animate__animated animate__fadeIn">About me</h1>
                                    <h4 className="animate__animated animate__fadeIn">I am a software developer based out of Dallas, TX, I strive to make software that solves everyday issues
                                        people encounter, links to my portfolio are available in the portfolio page!
                                    </h4>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={4} style={{}}>
                                <h1 className="animate__animated animate__fadeIn">Tech used</h1>
                                <ul>
                                    <li className="animate__animated animate__fadeIn">HTML</li>
                                    <li className="animate__animated animate__fadeIn">CSS</li>
                                    <li className="animate__animated animate__fadeIn">JavaScript</li>
                                    <li className="animate__animated animate__fadeIn">Python</li>
                                    <li className="animate__animated animate__fadeIn">Java</li>
                                    <li className="animate__animated animate__fadeIn">React</li>
                                </ul>
                            </Col>

                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <div className="mx-auto">
                                    <h1 className="animate__animated animate__fadeIn">Contact me</h1>
                                    <h3 className="animate__animated animate__fadeIn">Email: nick.pappas.adams@gmail.com</h3>
                                    <h3 className="animate__animated animate__fadeIn">Phone: (916) 996-1799</h3>
                                    <h3 className="animate__animated animate__fadeIn">Linkedin: https://www.linkedin.com/in/nick-p-adams/</h3>
                                </div>

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