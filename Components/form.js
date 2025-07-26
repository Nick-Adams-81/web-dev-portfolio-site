import { useState } from 'react';
import UsePost from '../Components/CustomHooks/usePost';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Forms = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

    const url = "https://eohpch928005nm4.m.pipedream.net";

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInput = { name, email, comments };
        UsePost(url, userInput);
        setName("")
        setEmail("")
        setComments("")
    }

    return (
        <>
            <div id="form" className="animate-scale-in">
                <div className="form-header">
                    <h1 className="form-title animate-fade-in-up">Let's Build Something Amazing Together!</h1>
                    <p className="form-subtitle animate-fade-in-up stagger-1">
                        I'm passionate about creating innovative solutions and collaborating on exciting projects. 
                        Whether you have a specific project in mind or just want to discuss potential opportunities, 
                        I'd love to hear from you!
                    </p>
                </div>
                
                <div className="contact-info animate-fade-in-up stagger-2">
                    <div className="info-item">
                        <div className="info-icon">💼</div>
                        <div className="info-content">
                            <h4 className="info-title">Project Collaboration</h4>
                            <p className="info-description">Ready to work on your next big idea? Let's discuss how we can bring your vision to life.</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">🤝</div>
                        <div className="info-content">
                            <h4 className="info-title">Partnership Opportunities</h4>
                            <p className="info-description">Looking for a reliable developer to join your team? I'm always open to new challenges.</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">💡</div>
                        <div className="info-content">
                            <h4 className="info-title">Technical Consultation</h4>
                            <p className="info-description">Need advice on technology choices or architecture decisions? I'm here to help.</p>
                        </div>
                    </div>
                </div>
                
                <Form onSubmit={handleSubmit} className="contact-form">
                    <Form.Group className="form-group animate-fade-in-up stagger-3" controlId="formBasicName">
                        <Form.Label className="form-label">Your Name *</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control-custom"
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="form-group animate-fade-in-up stagger-4" controlId="formBasicEmail">
                        <Form.Label className="form-label">Email Address *</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control-custom"
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="form-group animate-fade-in-up stagger-5" controlId="formBasicMessage">
                        <Form.Label className="form-label">Tell Me About Your Project *</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Describe your project, timeline, budget, or any specific requirements you have in mind. The more details, the better I can help!"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            className="form-control-custom textarea-custom"
                            rows={6}
                            required
                        />
                    </Form.Group>
                    
                    <div className="form-footer animate-fade-in-up stagger-6">
                        <p className="response-time">
                            <span className="response-icon">⚡</span>
                            I typically respond within 24 hours
                        </p>
                        <div className="button-wrapper">
                            <Button 
                                type="submit" 
                                className="submit-button"
                            >
                                Send Message
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            
            <style jsx>{`
                #form {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 100%;
                    max-width: 700px;
                    padding: var(--space-8);
                    background-color: var(--bg-card);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--border-primary);
                    box-shadow: 0 8px 32px var(--shadow-medium);
                    transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
                }

                #form:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px var(--shadow-heavy);
                }

                .form-header {
                    text-align: center;
                    margin-bottom: var(--space-8);
                }

                .form-title {
                    color: var(--text-primary);
                    font-size: var(--font-size-4xl);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--space-4);
                    letter-spacing: -0.02em;
                }

                .form-subtitle {
                    color: var(--text-secondary);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-normal);
                    line-height: var(--line-height-relaxed);
                    margin: 0;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .contact-info {
                    margin-bottom: var(--space-8);
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: var(--space-6);
                }

                .info-item {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-4);
                    padding: var(--space-4);
                    background-color: var(--bg-tertiary);
                    border-radius: var(--radius-md);
                    border: 1px solid var(--border-secondary);
                    transition: all var(--duration-normal) var(--ease-out);
                }

                .info-item:hover {
                    transform: translateY(-2px);
                    border-color: var(--border-accent);
                    box-shadow: 0 4px 12px var(--shadow-medium);
                }

                .info-icon {
                    font-size: var(--font-size-2xl);
                    flex-shrink: 0;
                    margin-top: var(--space-1);
                }

                .info-content {
                    flex: 1;
                }

                .info-title {
                    color: var(--text-primary);
                    font-size: var(--font-size-base);
                    font-weight: var(--font-weight-semibold);
                    margin-bottom: var(--space-2);
                }

                .info-description {
                    color: var(--text-secondary);
                    font-size: var(--font-size-sm);
                    line-height: var(--line-height-relaxed);
                    margin: 0;
                }

                .contact-form {
                    width: 100%;
                }

                .form-group {
                    margin-bottom: var(--space-6);
                }

                .form-label {
                    color: var(--text-primary);
                    font-weight: var(--font-weight-medium);
                    font-size: var(--font-size-base);
                    margin-bottom: var(--space-2);
                    display: block;
                }

                .form-control-custom {
                    background-color: var(--bg-tertiary) !important;
                    border: 1px solid var(--border-primary) !important;
                    color: var(--text-primary) !important;
                    border-radius: var(--radius-md) !important;
                    padding: var(--space-4) !important;
                    font-size: var(--font-size-base) !important;
                    transition: all var(--duration-normal) var(--ease-out) !important;
                }

                .form-control-custom:focus {
                    background-color: var(--bg-secondary) !important;
                    border-color: var(--border-accent) !important;
                    box-shadow: 0 0 0 3px var(--focus-ring) !important;
                    outline: none !important;
                }

                .form-control-custom::placeholder {
                    color: var(--text-muted) !important;
                }

                .textarea-custom {
                    resize: vertical;
                    min-height: 120px;
                }

                .form-footer {
                    margin-top: var(--space-8);
                }

                .response-time {
                    color: var(--text-secondary);
                    font-size: var(--font-size-sm);
                    text-align: center;
                    margin-bottom: var(--space-6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-2);
                }

                .response-icon {
                    font-size: var(--font-size-base);
                }

                .button-wrapper {
                    text-align: center;
                }

                .submit-button {
                    color: var(--text-accent) !important;
                    border-color: var(--border-accent) !important;
                    background-color: transparent !important;
                    border-radius: var(--radius-md) !important;
                    padding: var(--space-4) var(--space-8) !important;
                    font-weight: var(--font-weight-semibold) !important;
                    font-size: var(--font-size-lg) !important;
                    transition: all var(--duration-normal) var(--ease-out) !important;
                    min-width: 200px;
                    position: relative;
                    overflow: hidden;
                }

                .submit-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent);
                    transition: left var(--duration-slow) var(--ease-out);
                }

                .submit-button:hover {
                    background-color: var(--accent-primary) !important;
                    border-color: var(--accent-primary) !important;
                    color: var(--bg-primary) !important;
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 24px var(--shadow-medium) !important;
                }

                .submit-button:hover::before {
                    left: 100%;
                }

                @media (max-width: 768px) {
                    #form {
                        width: 90%;
                        padding: var(--space-6);
                    }
                    
                    .form-title {
                        font-size: var(--font-size-3xl);
                    }
                    
                    .form-subtitle {
                        font-size: var(--font-size-base);
                    }
                    
                    .contact-info {
                        grid-template-columns: 1fr;
                        gap: var(--space-4);
                    }
                    
                    .info-item {
                        flex-direction: column;
                        text-align: center;
                        gap: var(--space-3);
                    }
                    
                    .submit-button {
                        min-width: 180px;
                        padding: var(--space-3) var(--space-6) !important;
                        font-size: var(--font-size-base) !important;
                    }
                }

                @media (max-width: 480px) {
                    #form {
                        width: 95%;
                        padding: var(--space-4);
                    }
                    
                    .form-title {
                        font-size: var(--font-size-2xl);
                    }
                    
                    .form-subtitle {
                        font-size: var(--font-size-sm);
                    }
                    
                    .info-item {
                        padding: var(--space-3);
                    }
                }
            `}</style>
        </>
    )
}

export default Forms;