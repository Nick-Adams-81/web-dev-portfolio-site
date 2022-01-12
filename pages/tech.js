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
                    <h1> tech page test</h1>
                </div>
            </Layout>


            <style jsx>{`
            .body {
                background-color: black;
                height: 800px;
            }
            
            `}

            </style>


        </>


    )

}

export default tech;