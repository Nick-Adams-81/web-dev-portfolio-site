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
                            <Col xs={12} sm={12} md={8}>
                                <p>uncnosrhobvscou;jw.erh kuwcwpkuewhlwhl.ahcjhbucl choseowlrc  p pu pursh lu</p>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <p>More test shituhsf ;wqrfhnclcj hlrku bpquyg pq ka[ow  wnf,cjhlbux,y</p>
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