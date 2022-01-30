
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
                <Carousel.Item interval={4000}>
                    <div id="img-1"></div>

                    <Carousel.Caption>
                        <h3>React</h3>
                        <p>
                            This site is an example of my work with React. It uses a little of everything React has to offer, functional components,
                            state management, hooks, high order array functions, and json files.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <div id="img-2"></div>
                    <Carousel.Caption>
                        <h3>JavaScript</h3>
                        <p>
                            Along with react my Javascript skills are growing daily. I've used evrything from ES-5, JQuery, ES-6, for, while, and do while loops.
                            The button below is a link to an example of my JavaScript work.
                        </p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <div id="img-3"></div>

                    <Carousel.Caption>
                        <h3>Java</h3>
                        <p>I am currently working an a Java spring project, it uses Java, spring, and thymeleaf. The app is a hiking app that shows trails near your location</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <div id="img-4"></div>
                    <Carousel.Caption>
                        <h3>Python</h3>
                        <p>My Python experience is limited but I have built a couple of small projects using this technology. I've built a bitcoin mining algorhythm and scrappers for my
                            internship with verified
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <style jsx>{`
            .carousel {
                height: 300px;
                width: 100vw%;
                margin-top: 50px;

            }
            #img-1 {
                background-image: url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60");
                height: 300px;
                background-repeat: no-repeat;
                background-size: 100%;
                color: black;
            }

            #img-2 {
                background-image: url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
                height: 300px;
                background-repeat: no-repeat;
                background-size: 100%;
            }

            #img-3 {
                background-image: url("https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amF2YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
                height: 300px;
                background-repeat: no-repeat;
                background-size: 100%;
            }
            #img-4 {
                background-image: url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
                height: 300px;
                background-repeat: no-repeat;
                background-size: 100%;
            }
          

            `}
            </style>

        </div>


    )
}

export default HomeCarousel;