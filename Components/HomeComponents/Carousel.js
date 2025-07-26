
import Carousel from 'react-bootstrap/Carousel';
import ReactLogo from '../../public/images/react-1.svg';
import JsLogo from '../../public/images/logo-javascript.svg';
import JavaLogo from '../../public/images/java.png';
import PythonLogo from '../../public/images/Python-logo-notext.svg';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

const HomeCarousel = () => {
    const carouselItems = [
        {
            id: 1,
            title: "React",
            description: "This site showcases my React expertise using functional components, state management, hooks, and modern React patterns. Built with Next.js for optimal performance.",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            icon: "⚛️",
            color: "#61DAFB"
        },
        {
            id: 2,
            title: "JavaScript",
            description: "Proficient in modern JavaScript including ES6+, async/await, and functional programming. Experience with DOM manipulation and modern web APIs.",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            icon: "⚡",
            color: "#F7DF1E"
        },
        {
            id: 3,
            title: "Java",
            description: "Currently developing a Java Spring Boot hiking application with Thymeleaf templating. Experience with Spring Security, JPA, and RESTful APIs.",
            image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amF2YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            icon: "☕",
            color: "#ED8B00"
        },
        {
            id: 4,
            title: "Python",
            description: "Built various Python projects including cryptocurrency miners and web scrapers. Experience with data processing and automation tools.",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            icon: "🐍",
            color: "#3776AB"
        }
    ];

    return (
        <>
            <div className="carousel-container animate-fade-in-up">
                <div className="carousel-header">
                    <h2 className="carousel-title animate-fade-in-up">My Tech Stack</h2>
                    <p className="carousel-subtitle animate-fade-in-up stagger-1">Technologies I work with daily</p>
                </div>
                
                <Carousel className="modern-carousel animate-scale-in stagger-2">
                    {carouselItems.map((item) => (
                        <Carousel.Item key={item.id} interval={5000}>
                            <div className="carousel-slide" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="slide-overlay">
                                    <div className="slide-content">
                                        <div className="tech-icon" style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <h3 className="slide-title">{item.title}</h3>
                                        <p className="slide-description">{item.description}</p>
                                        <div className="slide-indicator">
                                            <div className="indicator-dot animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <style jsx>{`
                .carousel-container {
                    margin-top: var(--space-12);
                    margin-bottom: var(--space-8);
                }

                .carousel-header {
                    text-align: center;
                    margin-bottom: var(--space-8);
                }

                .carousel-title {
                    color: var(--text-primary);
                    font-size: var(--font-size-3xl);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--space-4);
                    letter-spacing: -0.02em;
                }

                .carousel-subtitle {
                    color: var(--text-secondary);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-normal);
                }

                .modern-carousel {
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: 0 12px 40px var(--shadow-heavy);
                }

                .carousel-slide {
                    height: 400px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .slide-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(10, 10, 10, 0.8),
                        rgba(10, 10, 10, 0.6)
                    );
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--space-8);
                }

                .slide-content {
                    text-align: center;
                    max-width: 600px;
                    color: var(--text-primary);
                }

                .tech-icon {
                    font-size: var(--font-size-5xl);
                    margin-bottom: var(--space-6);
                    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
                    transition: transform var(--duration-normal) var(--ease-out);
                }

                .slide-content:hover .tech-icon {
                    transform: scale(1.1);
                }

                .slide-title {
                    font-size: var(--font-size-4xl);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--space-4);
                    letter-spacing: -0.02em;
                }

                .slide-description {
                    font-size: var(--font-size-lg);
                    line-height: var(--line-height-relaxed);
                    color: var(--text-secondary);
                    margin-bottom: var(--space-6);
                }

                .slide-indicator {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .indicator-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color: var(--accent-primary);
                    box-shadow: 0 0 20px var(--accent-primary);
                }

                /* Custom carousel controls */
                :global(.carousel-control-prev),
                :global(.carousel-control-next) {
                    width: 60px;
                    height: 60px;
                    background-color: rgba(100, 255, 218, 0.1);
                    border-radius: 50%;
                    border: 2px solid var(--accent-primary);
                    top: 50%;
                    transform: translateY(-50%);
                    transition: all var(--duration-normal) var(--ease-out);
                }

                :global(.carousel-control-prev:hover),
                :global(.carousel-control-next:hover) {
                    background-color: rgba(100, 255, 218, 0.2);
                    transform: translateY(-50%) scale(1.1);
                }

                :global(.carousel-control-prev-icon),
                :global(.carousel-control-next-icon) {
                    filter: invert(1);
                }

                :global(.carousel-indicators) {
                    bottom: var(--space-6);
                }

                :global(.carousel-indicators button) {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color: var(--text-secondary);
                    border: none;
                    margin: 0 var(--space-2);
                    transition: all var(--duration-normal) var(--ease-out);
                }

                :global(.carousel-indicators button.active) {
                    background-color: var(--accent-primary);
                    transform: scale(1.2);
                }

                @media (max-width: 768px) {
                    .carousel-title {
                        font-size: var(--font-size-2xl);
                    }
                    
                    .carousel-subtitle {
                        font-size: var(--font-size-base);
                    }
                    
                    .carousel-slide {
                        height: 300px;
                    }
                    
                    .slide-overlay {
                        padding: var(--space-6);
                    }
                    
                    .tech-icon {
                        font-size: var(--font-size-4xl);
                        margin-bottom: var(--space-4);
                    }
                    
                    .slide-title {
                        font-size: var(--font-size-2xl);
                    }
                    
                    .slide-description {
                        font-size: var(--font-size-base);
                    }
                }

                @media (max-width: 480px) {
                    .carousel-slide {
                        height: 250px;
                    }
                    
                    .slide-overlay {
                        padding: var(--space-4);
                    }
                    
                    .tech-icon {
                        font-size: var(--font-size-3xl);
                    }
                    
                    .slide-title {
                        font-size: var(--font-size-xl);
                    }
                    
                    .slide-description {
                        font-size: var(--font-size-sm);
                    }
                }
            `}</style>
        </>
    )
}

export default HomeCarousel;