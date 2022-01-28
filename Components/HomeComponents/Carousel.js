
import Carousel from 'react-bootstrap/Carousel';
import ReactLogo from '../../public/images/react-1.svg';
import JsLogo from '../../public/images/logo-javascript.svg';
import JavaLogo from '../../public/images/java.png';
import PythonLogo from '../../public/images/Python-logo-notext.svg';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';


const HomeCarousel = () => {
    return (

        <div className="carousel">
            <Carousel>
                <Carousel.Item interval={2500}>
                    <Image
                        className="d-block w-100"
                        id="img-1"
                        src={ReactLogo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>React</h3>
                        <p>This site is an example of my work with React. It uses a little of everything React has to offer, functional components,
                            state management, hooks, high order array functions, and json files.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image
                        className="d-block w-100"
                        src={JsLogo}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>JavaScript</h3>
                        <p>
                            Along with react my Javascript skills are growing daily. I've used evrything from ES-5, JQuery, ES-6, for, while, and do while loops.
                            The button below is a link to an example of my JavaScript work.
                        </p>
                    
                        <Button variant="outline-secondary" type="submit" id="button" style={{ marginTop: 20, color: '#DEDEDE' }}>
                            View JS
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image
                        className="d-block w-100"
                        src={JavaLogo}
                        height="150px"
                        width="150px"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image
                        className="d-block w-100"
                        src={PythonLogo}
                        height="150px"
                        width="150px"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <style jsx>{`
            .carousel {
                height: 300px;
                width: 100%;
                margin-top: 50px;

            }

            `}
            </style>

        </div>


    )
}

export default HomeCarousel;