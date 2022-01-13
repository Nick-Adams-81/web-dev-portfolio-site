import Layout from "../Components/Layout";
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
                        <Col sm={12} md={12}>
                            <p>test stuff here</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <p>more test</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <p>more test</p>
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
            
            `}

            </style>


        </>


    )

}

export default tech;