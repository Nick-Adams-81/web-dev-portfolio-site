import Layout from "../Components/Layout";
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import JsLogo from '../public/images/logo-javascript.svg';
import ReactLogo from '../public/images/react-1.svg';
import PythonLogo from '../public/images/Python-logo-notext.svg';
import JavaLogo from '../public/images/java.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const tech = () => {
    return (
        <>

            <Layout>
                <div className="body">

                    <Row>

                        <Col sm={12} md={9}>
                            <div className="animate__animated animate__fadeIn" id="js-info">
                                <h2>JavaScript</h2>
                                <h4>I have extensive knowledge in JavaScript and it's libraries(JQuery), as well as ES-5 and ES-6 standards, the link below is an example of my work with JavaScript</h4>
                                <Button variant="outline-secondary" id="link" href="https://nick-adams-81.github.io/quiz-app/">
                                    JS Example
                                </Button>
                            </div>
                        </Col>

                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeIn" id="js-img">
                                <Image src={JsLogo} alt="js-logo" height={150} width={150} />
                            </div>

                        </Col>

                    </Row>



                    <Row>
                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeIn" id="react-img">
                                <Image src={ReactLogo} alt="React-logo" height={150} width={150} />
                            </div>
                        </Col>

                        <Col sm={12} md={9}>
                            <div className="animate__animated animate__fadeIn" id="react-info">
                                <h2>React</h2>
                                <h4>React, the leading JavaScript framework in the world, my knowledge of using hooks such as useState and useEffect is extensive,
                                    as well as integrating API data using axios, this site is built in react and the link below will take you to this site's repo.
                                    <div id="btn-1">
                                        <Button variant="outline-secondary" id="link" href="https://github.com/Nick-Adams-81/web-dev-portfolio-site">
                                           React Example
                                        </Button>
                                    </div>


                                </h4>
                            </div>

                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={9}>
                            <div className="animate__animated animate__fadeIn" id="java-info">
                                <h2>Java</h2>
                                <h4>Java, a server side language, is one of the newer technologies i've learned, i've gained much knowledge in my time at Codeup using Java and Java frameworks such as Spring, a link to my Java work is below!</h4>
                                <div id="btn-1">
                                    <Button variant="outline-secondary" id="link" href="https://github.com/Nick-Adams-81/Spring-Blog">
                                        Java Example
                                    </Button>
                                </div>
                            </div>


                        </Col>

                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeIn" id="java-img">
                                <Image src={JavaLogo} alt="Java-logo" height={150} width={150} />
                            </div>

                        </Col>
                    </Row>


                    <Row>
                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeIn" id="python-img">
                                <Image src={PythonLogo} alt="Python-logo" height={150} width={150} />
                            </div>
                        </Col>

                        <Col sm={12} md={9}>
                            <div className="animate__animated animate__fadeIn" id="python-info">
                                <h2>Python</h2>
                                <h4>Python is a server side language, my experience is limited to a couple of small projects, a link to one of them is below!</h4>
                                <Button variant="outline-secondary" id="link" href="https://github.com/Nick-Adams-81/python-scraper">
                                    Python Example
                                </Button>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Layout>

            <style jsx>{`
            .body {
                background-color: black;
                margin-top: 56px;
                margin-bottom: 30px;
                height: 100%;
                width: 100%;
            } 

            #js-info {
                margin: 20px;
            }

            #js-img {
                margin-top: 20px;
                 --animate-duration: 1000ms;
            }

    
            #react-img {
                margin: 20px;
                --animate-duration: 2000ms;
                
            }

            #react-info {
                --animate-duration: 2000ms;
                margin: 20px;
            }
            #btn-1 {
                margin-top: 15px;
            }

            #java-info {
                margin: 20px;
                --animate-duration: 2600ms;
            }

            #java-img {
                --animate-duration: 2600ms;
            }

            #python-info {
                --animate-duration: 3000ms;
            }

            #python-img {
                  margin: 20px;
                  --animate-duration: 3000ms;
            }

            h2 {
                color: #4B4E4B;
            }

            h4 {
                color: #4B4E4B;
            }

            #link {
                color: grey;
                text-decoration: none;
            }
            
            `}

            </style>


        </>


    )

}

export default tech;