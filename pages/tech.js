import Layout from "../Components/Layout";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
                                    <Link href="https://nick-adams-81.github.io/quiz-app/">JS example</Link>
                                </Button>
                            </div>
                        </Col>

                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeInLeftBig" id="js-img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="js-logo" height={150} width={150} />
                            </div>

                        </Col>

                    </Row>



                    <Row>
                        <Col sm={12} md={3}>
                            <div className="animate__animated animate__fadeInRightBig" id="react-img">
                                <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png" alt="React-logo" height={150} width={150} />
                            </div>
                        </Col>

                        <Col sm={12} md={9}>
                            <div className="animate__animated animate__fadeInRight" id="react-info">
                                <h2>React</h2>
                                <h4>React, the leading JavaScript framework in the world, my knowledge of using hooks such as useState and useEffect is extensive,
                                    as well as integrating API data using axios, this site is built in react and the link below will take you to this site's repo.
                                    <div id="btn-1">
                                        <Button variant="outline-secondary">
                                            <Link href="https://github.com/Nick-Adams-81/web-dev-portfolio-site">JS example</Link>
                                        </Button>
                                    </div>


                                </h4>
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
            
            `}

            </style>


        </>


    )

}

export default tech;