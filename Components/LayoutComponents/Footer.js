import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLinks from '../HomeComponents/HomeLinks'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return(
        <>
            <footer className="modern-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Nick Adams</h3>
                        <p className="footer-subtitle">Full Stack Developer</p>
                        <p className="footer-description">
                            Passionate about creating innovative solutions and building amazing user experiences.
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="section-title">Quick Links</h4>
                        <div className="footer-links">
                            <a href="/" className="footer-link">Home</a>
                            <a href="/projects" className="footer-link">Portfolio</a>
                            <a href="/connect" className="footer-link">Connect</a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="section-title">Connect</h4>
                        <div className="social-links">
                            <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">📱</span>
                                GitHub
                            </a>
                            <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">💼</span>
                                LinkedIn
                            </a>
                            <a href="mailto:contact@example.com" className="social-link">
                                <span className="social-icon">📧</span>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <p className="copyright">
                        © {currentYear} Nick Adams. All rights reserved.
                    </p>
                </div>
            </footer>

            <style jsx>{`
                .modern-footer {
                    background-color: var(--bg-secondary);
                    border-top: 1px solid var(--border-primary);
                    padding: var(--space-12) 0 var(--space-6) 0;
                    margin-top: var(--space-16);
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 var(--space-4);
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: var(--space-8);
                    margin-bottom: var(--space-8);
                }

                .footer-section {
                    display: flex;
                    flex-direction: column;
                }

                .footer-title {
                    color: var(--text-accent);
                    font-size: var(--font-size-2xl);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--space-2);
                    letter-spacing: -0.01em;
                }

                .footer-subtitle {
                    color: var(--text-secondary);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-medium);
                    margin-bottom: var(--space-4);
                }

                .footer-description {
                    color: var(--text-secondary);
                    font-size: var(--font-size-base);
                    line-height: var(--line-height-relaxed);
                    margin: 0;
                }

                .section-title {
                    color: var(--text-primary);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-semibold);
                    margin-bottom: var(--space-4);
                    letter-spacing: -0.01em;
                }

                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-2);
                }

                .footer-link {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: var(--font-size-base);
                    font-weight: var(--font-weight-medium);
                    transition: all 0.3s ease;
                    padding: var(--space-1) 0;
                }

                .footer-link:hover {
                    color: var(--text-accent);
                    transform: translateX(4px);
                }

                .social-links {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3);
                }

                .social-link {
                    display: flex;
                    align-items: center;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: var(--font-size-base);
                    font-weight: var(--font-weight-medium);
                    transition: all 0.3s ease;
                    padding: var(--space-2) 0;
                }

                .social-link:hover {
                    color: var(--text-accent);
                    transform: translateX(4px);
                }

                .social-icon {
                    margin-right: var(--space-3);
                    font-size: var(--font-size-lg);
                }

                .footer-bottom {
                    text-align: center;
                    padding-top: var(--space-6);
                }

                .footer-divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--border-primary), transparent);
                    margin-bottom: var(--space-6);
                }

                .copyright {
                    color: var(--text-muted);
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-normal);
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .modern-footer {
                        padding: var(--space-8) 0 var(--space-4) 0;
                    }
                    
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: var(--space-6);
                        text-align: center;
                    }
                    
                    .footer-title {
                        font-size: var(--font-size-xl);
                    }
                    
                    .footer-subtitle {
                        font-size: var(--font-size-base);
                    }
                    
                    .section-title {
                        font-size: var(--font-size-base);
                    }
                    
                    .footer-links,
                    .social-links {
                        align-items: center;
                    }
                    
                    .footer-link:hover,
                    .social-link:hover {
                        transform: translateY(-2px);
                    }
                }

                @media (max-width: 480px) {
                    .footer-content {
                        padding: 0 var(--space-2);
                    }
                    
                    .footer-title {
                        font-size: var(--font-size-lg);
                    }
                    
                    .footer-subtitle {
                        font-size: var(--font-size-sm);
                    }
                }
            `}</style>
        </>
    )
}

export default Footer;