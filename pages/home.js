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
                                        people encounter, links to my portfolio are available in the projects page!
                                    </h4>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={4} style={{}}>
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
                                <div className="mx-auto" id="links">
                                    <h2 className="animate__animated animate__fadeIn">Contact me</h2>
                                    <h3 className="animate__animated animate__fadeIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg> nick.pappas.adams@gmail.com</h3>
                                    <h3 className="animate__animated animate__fadeIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>  (916) 996-1799</h3>
                                    <h3 className="animate__animated animate__fadeIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>  https://www.linkedin.com/in/nick-p-adams/</h3>
                                    <h3 className="animate__animated animate__fadeIn">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg> https://github.com/Nick-Adams-81</h3>
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
                     height: 100%;
                     margin-top: 90px;
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

                 #links {
                     display: block;

                 }
            `}

            </style>

        </>
    )

}

export default Home;