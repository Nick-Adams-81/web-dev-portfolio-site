import "animate.css";
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Links = () => {
  return (
    <>
      <div id="container">
        
          <Row>

            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
              <Link href="/home"><a id="href-1" className="animate__animated animate__fadeIn">Home</a></Link>
            </Col>

            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
              <Link href="/tech"><a id="href-4" className="animate__animated animate__fadeIn">Tech</a></Link>
            </Col>

            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
              <Link href="/projects"><a id="href-2" className="animate__animated animate__fadeIn">Portfolio</a></Link>
            </Col>

            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
              <Link href="/connect"><a id="href-3" className="animate__animated animate__fadeIn">Connect</a></Link>
            </Col>

          </Row>

      </div>

      <style jsx>
        {`

      #container {
        background-color: black;
        display: flex;
        height: 100vh;
        margin-top: 56px;
      }

      a {
        color: #4B4E4B;
        text-decoration: none;
        align-items: center;
        justify-content: center;
      }

      a:hover {
        color: #063C06;
      }

      #href-1 {
        display: inline-block;
        font-size: 30px;
        margin: 2%;
        --animate-duration: 2500ms;
        margin-bottom: 25%;
        align-items:center;
        justify-content: center;
        
      }

      #href-2 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        --animate-duration: 5500ms;
        margin-bottom: 25%;
      }

      #href-3 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        margin-bottom: 25%;
        --animate-duration: 6500ms;
      }

      #href-4 {
        display: inline-block;
        margin: 2%;
        font-size: 30px;
        margin-bottom: 25%;
        --animate-duration: 4500ms;
      }

    `}
      </style>
    </>
  )
}

export default Links;


