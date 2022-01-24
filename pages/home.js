import Layout from "../Components/Layout";
import Container from 'react-bootstrap/Container';
import HomeLinks from '../Components/HomeComponents/HomeLinks';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tech from '../Components/HomeComponents/Tech';
import HomeInfo from "../Components/HomeComponents/HomeInfo";
import HomeImage from "../Components/HomeComponents/HomeImage";
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

                                <HomeImage />

                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={12} md={8}>

                                <HomeInfo />

                            </Col>
                            <Col xs={12} sm={12} md={4} className="d-flex justify-content-center">

                                <Tech />

                            </Col>

                        </Row>
                     
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
                     margin-top: 56px;
                     margin-bottom: 50px;
                 }

                 h1 {
                     color: #4B4E4B;
                     text-align: center;
                     margin-bottom: 25px;
                 }

            `}

            </style>

        </>
    )

}

export default Home;