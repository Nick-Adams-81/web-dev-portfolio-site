import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';

const Navbars = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <>
            <Navbar 
                bg="dark" 
                expand="md" 
                variant="dark" 
                className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="/" className="navbar-brand">
                        <span className="brand-text">NickAdams</span>
                        <span className="brand-dot">.</span>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
                    
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
                        <Nav className="navbar-nav">
                            <Nav.Link href="/" className="nav-link">
                                <span className="nav-icon">🏠</span>
                                <span className="nav-text">Home</span>
                            </Nav.Link>
                            <Nav.Link href="/projects" className="nav-link">
                                <span className="nav-icon">💼</span>
                                <span className="nav-text">Portfolio</span>
                            </Nav.Link>
                            <Nav.Link href="/connect" className="nav-link">
                                <span className="nav-icon">📧</span>
                                <span className="nav-text">Connect</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <style jsx>{`
                .modern-navbar {
                    background-color: var(--bg-secondary) !important;
                    border-bottom: 1px solid var(--border-primary);
                    padding: var(--space-4) 0;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .modern-navbar.scrolled {
                    background-color: rgba(26, 26, 26, 0.95) !important;
                    box-shadow: 0 4px 20px var(--shadow-medium);
                    padding: var(--space-2) 0;
                }

                .navbar-brand {
                    color: var(--text-accent) !important;
                    font-weight: var(--font-weight-bold);
                    font-size: var(--font-size-xl);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .navbar-brand:hover {
                    color: var(--hover-primary) !important;
                    transform: scale(1.05);
                }

                .brand-text {
                    letter-spacing: -0.02em;
                }

                .brand-dot {
                    color: var(--accent-secondary);
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .navbar-nav {
                    margin-left: auto;
                    gap: var(--space-2);
                }

                .nav-link {
                    color: var(--text-secondary) !important;
                    text-decoration: none;
                    font-weight: var(--font-weight-medium);
                    font-size: var(--font-size-base);
                    padding: var(--space-3) var(--space-4) !important;
                    border-radius: var(--radius-md);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    position: relative;
                    overflow: hidden;
                }

                .nav-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent);
                    transition: left 0.5s ease;
                }

                .nav-link:hover {
                    color: var(--text-accent) !important;
                    background-color: var(--bg-tertiary);
                    transform: translateY(-2px);
                }

                .nav-link:hover::before {
                    left: 100%;
                }

                .nav-icon {
                    font-size: var(--font-size-lg);
                    transition: transform 0.3s ease;
                }

                .nav-link:hover .nav-icon {
                    transform: scale(1.2);
                }

                .nav-text {
                    font-weight: var(--font-weight-medium);
                }

                .navbar-toggler {
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-md);
                    padding: var(--space-2);
                    transition: all 0.3s ease;
                }

                .navbar-toggler:hover {
                    border-color: var(--border-accent);
                    background-color: var(--bg-tertiary);
                }

                .navbar-toggler:focus {
                    box-shadow: 0 0 0 3px var(--focus-ring);
                }

                .navbar-collapse {
                    transition: all 0.3s ease;
                }

                @media (max-width: 768px) {
                    .navbar-nav {
                        margin-left: 0;
                        margin-top: var(--space-4);
                        gap: var(--space-1);
                    }

                    .nav-link {
                        padding: var(--space-3) var(--space-4) !important;
                        justify-content: center;
                    }

                    .navbar-brand {
                        font-size: var(--font-size-lg);
                    }

                    .nav-icon {
                        font-size: var(--font-size-base);
                    }

                    .nav-text {
                        font-size: var(--font-size-sm);
                    }
                }

                @media (max-width: 480px) {
                    .modern-navbar {
                        padding: var(--space-3) 0;
                    }

                    .modern-navbar.scrolled {
                        padding: var(--space-2) 0;
                    }

                    .navbar-brand {
                        font-size: var(--font-size-base);
                    }

                    .nav-link {
                        padding: var(--space-2) var(--space-3) !important;
                    }
                }
            `}</style>
        </>
    )
}

export default Navbars;