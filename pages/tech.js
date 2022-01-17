import Layout from "../Components/Layout";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import JsLogo from '../public/images/logo-javascript.svg';
import ReactLogo from '../public/images/react-1.svg';
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
                            <div className="animate__animated animate__fadeInLeft" id="js-info">
                                <h2>JavaScript</h2>
                                <h4>I have extensive knowledge in JavaScript and it's libraries(JQuery), as well as ES-5 and ES-6 standards, the link below is an example of my work with JavaScript</h4>
                                <Button variant="outline-secondary" >
                                    <Link href="https://nick-adams-81.github.io/quiz-app/">JS Example</Link>
                                </Button>
                            </div>
                        </Col>

                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeInLeft" id="js-img">
                                <Image src={JsLogo} alt="js-logo" height={150} width={150} />
                            </div>

                        </Col>

                    </Row>



                    <Row>
                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeInRight" id="react-img">
                                <Image src={ReactLogo} alt="React-logo" height={150} width={150} />
                            </div>
                        </Col>

                        <Col sm={12} md={9}>
                            <div className="animate__animated animate__fadeInRight" id="react-info">
                                <h2>React</h2>
                                <h4>React, the leading JavaScript framework in the world, my knowledge of using hooks such as useState and useEffect is extensive,
                                    as well as integrating API data using axios, this site is built in react and the link below will take you to this site's repo.
                                    <div id="btn-1">
                                        <Button variant="outline-secondary">
                                            <Link href="https://github.com/Nick-Adams-81/web-dev-portfolio-site">React Example</Link>
                                        </Button>
                                    </div>


                                </h4>
                            </div>

                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={9}>
                            <div className="animate__animated animate__fadeInLeft" id="java-info">
                                <h2>Java</h2>
                                <h4>Java, a server side language, is one of the newer technologies i've learned, i've gained much knowledge in my time at Codeup in Java, a link demonstrsating my Java work is found below!</h4>
                                <div id="btn-1">
                                    <Button variant="outline-secondary">
                                        <Link href="https://github.com/Nick-Adams-81/web-dev-portfolio-site">Java Example</Link>
                                    </Button>
                                </div>
                            </div>


                        </Col>

                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeInLeft" id="java-img">
                                <Image src={ReactLogo} alt="React-logo" height={150} width={150} />
                            </div>

                        </Col>
                    </Row>


                    <Row>
                        <Col sm={12} md={9}>
                            <p>test stuff here</p>
                            <p>lajsbckarsgcbkykyrfciy crybafqiwek ytbckydeacoulsyliucrbdoxlebhkuljdfbcyxzmxyzoclsduhcnlvoiulrdshcdjnhcfbke kegrs ,shdblhsdhughsdughhosdduyogohvhlxlrbvxhrfblvgbhdht gvbldhlgc </p>
                        </Col>

                        <Col sm={12} md={3}>
                            <p>more testlcxgk j.kv;ighjljxtvlnt jntdxlkbx.dtjbnv,d</p>
                            <p>uitvngvhvlhvlnrfsvrhslhasf,zcjn,njhrblvgluluhntchv khflhbcrbhlcrblu rbb urblux rblrx bxrcburxburbfrlbgruvb.fjlkbfv,hbfxlv,jbfxbfxk,bd,hv,bvf,bfx</p>
                        </Col>
                    </Row>
                </div>
            </Layout>

            <style jsx>{`
            .body {
                background-color: black;
                margin-top: 56px;
                height: 800px;
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
                --animate-duration: 2200ms;
               
                
            }

            #react-info {
                --animate-duration: 2200ms;
            }
            #btn-1 {
                margin-top: 15px;
            }

            #java-info {
                margin: 20px;
                --animate-duration: 2800ms;
            }

            #java-img {
                --animate-duration: 2800ms;
            }
            
            `}

            </style>


        </>


    )

}

export default tech;