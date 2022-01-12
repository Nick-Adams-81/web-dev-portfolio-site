import Layout from "../Components/Layout";
import Container from 'react-bootstrap/Container';
import HomeLinks from '../Components/HomeLinks';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <Layout>
                <div className="body">
                    <h1>HOME</h1>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <div className="mx-auto" id="image-container">
                                    <img src="../images/nick.jpg" height={370} width={300} className="animate__animated animate__fadeIn center" id="image" />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={12} md={8} style={{}}>
                                <div>

                                    <h2 className="animate__animated animate__fadeIn">About me</h2>
                                    <h4 className="animate__animated animate__fadeIn">I am a software developer based out of Dallas, TX, I strive to make software that solves everyday issues
                                        people encounter, links to my portfolio are available in the portfolio page! Connect with me on the connect page!
                                    </h4>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <h2 className="animate__animated animate__fadeIn">Tech</h2>
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
                                <HomeLinks />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>

            <style jsx>{
                `
                 .body {
                     background-color: black;
                     height: 100%;
                     margin-top: 56px
                 }

                 h1 {
                     color: #4B4E4B;
                     text-align: center;
                     margin-bottom: 25px;
                 }

                 h2 {
                     color: #4B4E4B;
                    text-align: center;
                 }

                 h3 {
                     color: #4B4E4B;
                 }

                 h4 {
                     color: #4B4E4B;
                 }

                 li {
                     color: #4B4E4B;
                     margin-left: 50px;
                 }

                 #image {
                     display: block;
                     margin-left: auto;
                     margin-right: auto;
                     margin-bottom: 20px;
                      --animate-duration: 3500ms;
                     border-radius: 3%
                    
                 }

                
            `}

            </style>

        </>
    )

}

export default Home;