import Layout from "../Components/Layout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tech from '../Components/HomeComponents/Tech';
import HomeInfo from "../Components/HomeComponents/HomeInfo";
import HomeImage from "../Components/HomeComponents/HomeImage";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Index() {
  return (
    <>
            <Layout>
                <div className="body">
                    <Container>
                        <div className="hero-section animate-fade-in-up">
                            <h1 className="hero-title animate-fade-in-up">Welcome to My Portfolio</h1>
                            <p className="hero-subtitle animate-fade-in-up stagger-1">Full-Stack Developer specializing in MERN stack and Java Spring Boot</p>
                        </div>

                        <Row className="content-section">
                            <Col sm={12} md={12} lg={12} className="mb-5">
                                <HomeImage />
                            </Col>
                        </Row>

                        <Row className="content-section">
                            <Col xs={12} sm={12} md={8} className="mb-4">
                                <HomeInfo />
                            </Col>
                            <Col xs={12} sm={12} md={4} className="d-flex justify-content-center">
                                <Tech />
                            </Col>
                        </Row>
                     
                    </Container>
                </div>
            </Layout>

            <style jsx>{
                `
                 .body {
                     background-color: var(--bg-primary);
                     min-height: 100vh;
                     margin-top: 56px;
                     padding: var(--space-8) 0;
                 }

                 .hero-section {
                     text-align: center;
                     margin-bottom: var(--space-16);
                     padding: var(--space-12) 0;
                 }

                 .hero-title {
                     color: var(--text-primary);
                     font-size: var(--font-size-5xl);
                     font-weight: var(--font-weight-extrabold);
                     margin-bottom: var(--space-6);
                     letter-spacing: -0.03em;
                     line-height: var(--line-height-tight);
                 }

                 .hero-subtitle {
                     color: var(--text-secondary);
                     font-size: var(--font-size-xl);
                     font-weight: var(--font-weight-normal);
                     max-width: 600px;
                     margin: 0 auto;
                     line-height: var(--line-height-relaxed);
                 }

                 .content-section {
                     margin-bottom: var(--space-12);
                 }

                 @media (max-width: 768px) {
                     .hero-title {
                         font-size: var(--font-size-4xl);
                     }
                     
                     .hero-subtitle {
                         font-size: var(--font-size-lg);
                     }
                     
                     .body {
                         padding: var(--space-6) 0;
                     }
                     
                     .hero-section {
                         margin-bottom: var(--space-12);
                         padding: var(--space-8) 0;
                     }
                 }

                 @media (max-width: 480px) {
                     .hero-title {
                         font-size: var(--font-size-3xl);
                     }
                     
                     .hero-subtitle {
                         font-size: var(--font-size-base);
                     }
                 }
            `}

            </style>

        </>
  )
}
