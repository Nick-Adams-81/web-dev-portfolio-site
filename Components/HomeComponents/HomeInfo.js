

const HomeInfo = () => {
    return (
        <>
            <div className="home-info animate-scale-in">
                <h2 className="section-title animate-fade-in-up">About Me</h2>
                <div className="content-wrapper animate-fade-in-up stagger-1">
                    <div className="intro-section">
                        <p className="description">
                            I am a passionate full-stack software developer with expertise in modern web technologies and a strong foundation in both frontend and backend development. My journey in software development has been driven by a desire to create innovative solutions that solve real-world problems and enhance user experiences.
                        </p>
                    </div>

                    <div className="skills-highlight animate-fade-in-up stagger-2">
                        <h3 className="skills-title">Core Competencies</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4 className="category-title">Frontend Development</h4>
                                <p className="category-description">React, JavaScript, HTML5, CSS3, responsive design, and modern UI/UX principles</p>
                            </div>
                            <div className="skill-category">
                                <h4 className="category-title">Backend Development</h4>
                                <p className="category-description">Java Spring Boot, Python, RESTful APIs, database design, and server-side logic</p>
                            </div>
                            <div className="skill-category">
                                <h4 className="category-title">Generative AI</h4>
                                <p className="category-description">Python, LangChain, Databricks, OpenAI integration, and AI-powered application development</p>
                            </div>
                            <div className="skill-category">
                                <h4 className="category-title">Tools & Technologies</h4>
                                <p className="category-description">Git, Docker, AWS, MySQL, MongoDB, and modern development workflows</p>
                            </div>
                        </div>
                    </div>

                    <div className="experience-section animate-fade-in-up stagger-3">
                        <h3 className="experience-title">What I Bring to the Table</h3>
                        <div className="experience-points">
                            <div className="experience-point">
                                <div className="point-icon">🚀</div>
                                <div className="point-content">
                                    <h4 className="point-title">Full-Stack Expertise</h4>
                                    <p className="point-description">Proficient in both frontend and backend development, capable of building complete web applications from concept to deployment.</p>
                                </div>
                            </div>
                            <div className="experience-point">
                                <div className="point-icon">💡</div>
                                <div className="point-content">
                                    <h4 className="point-title">Problem-Solving Mindset</h4>
                                    <p className="point-description">Strong analytical skills with a focus on creating efficient, scalable solutions that address real user needs.</p>
                                </div>
                            </div>
                            <div className="experience-point">
                                <div className="point-icon">🔄</div>
                                <div className="point-content">
                                    <h4 className="point-title">Continuous Learning</h4>
                                    <p className="point-description">Committed to staying current with industry trends and emerging technologies to deliver cutting-edge solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section animate-fade-in-up stagger-4">
                        <h3 className="cta-title">Ready to Collaborate?</h3>
                        <p className="cta-text">
                            I'm always excited to work on new projects and collaborate with innovative teams. Whether you need a full-stack developer for your next big idea or want to discuss potential opportunities, I'd love to hear from you!
                        </p>
                        <div className="cta-actions">
                            <a href="/projects" className="cta-button primary">View My Work</a>
                            <a href="/connect" className="cta-button secondary">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
               .home-info {
                 padding: var(--space-8);
                 background-color: var(--bg-card);
                 border-radius: var(--radius-lg);
                 border: 1px solid var(--border-primary);
                 box-shadow: 0 8px 32px var(--shadow-medium);
                 transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
               }

               .home-info:hover {
                 transform: translateY(-4px);
                 box-shadow: 0 12px 40px var(--shadow-heavy);
               }

               .section-title {
                color: var(--text-primary);
                text-align: center;
                font-weight: var(--font-weight-bold);
                font-size: var(--font-size-3xl);
                margin-bottom: var(--space-8);
                letter-spacing: -0.02em;
                position: relative;
            }

            .section-title::after {
                content: '';
                position: absolute;
                bottom: -var(--space-4);
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 3px;
                background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
                border-radius: 2px;
            }

            .content-wrapper {
                max-width: 800px;
                margin: 0 auto;
            }

            .intro-section {
                margin-bottom: var(--space-8);
            }

            .description {
                color: var(--text-secondary);
                font-weight: var(--font-weight-normal);
                font-size: var(--font-size-lg);
                line-height: var(--line-height-relaxed);
                margin-bottom: 0;
                text-align: justify;
            }

            .skills-highlight {
                margin-bottom: var(--space-8);
                padding: var(--space-6);
                background-color: var(--bg-tertiary);
                border-radius: var(--radius-lg);
                border: 1px solid var(--border-secondary);
            }

            .skills-title {
                color: var(--text-primary);
                font-size: var(--font-size-xl);
                font-weight: var(--font-weight-semibold);
                margin-bottom: var(--space-6);
                text-align: center;
            }

            .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: var(--space-6);
            }

            .skill-category {
                text-align: center;
                padding: var(--space-4);
                background-color: var(--bg-secondary);
                border-radius: var(--radius-md);
                border: 1px solid var(--border-primary);
                transition: all var(--duration-normal) var(--ease-out);
            }

            .skill-category:hover {
                transform: translateY(-2px);
                border-color: var(--border-accent);
                box-shadow: 0 4px 12px var(--shadow-medium);
            }

            .category-title {
                color: var(--text-accent);
                font-size: var(--font-size-lg);
                font-weight: var(--font-weight-semibold);
                margin-bottom: var(--space-3);
            }

            .category-description {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                line-height: var(--line-height-relaxed);
                margin: 0;
            }

            .experience-section {
                margin-bottom: var(--space-8);
            }

            .experience-title {
                color: var(--text-primary);
                font-size: var(--font-size-xl);
                font-weight: var(--font-weight-semibold);
                margin-bottom: var(--space-6);
                text-align: center;
            }

            .experience-points {
                display: flex;
                flex-direction: column;
                gap: var(--space-6);
            }

            .experience-point {
                display: flex;
                align-items: flex-start;
                gap: var(--space-4);
                padding: var(--space-4);
                background-color: var(--bg-tertiary);
                border-radius: var(--radius-md);
                border: 1px solid var(--border-secondary);
                transition: all var(--duration-normal) var(--ease-out);
            }

            .experience-point:hover {
                transform: translateX(8px);
                border-color: var(--border-accent);
                background-color: var(--bg-secondary);
            }

            .point-icon {
                font-size: var(--font-size-2xl);
                flex-shrink: 0;
                margin-top: var(--space-1);
            }

            .point-content {
                flex: 1;
            }

            .point-title {
                color: var(--text-primary);
                font-size: var(--font-size-lg);
                font-weight: var(--font-weight-semibold);
                margin-bottom: var(--space-2);
            }

            .point-description {
                color: var(--text-secondary);
                font-size: var(--font-size-base);
                line-height: var(--line-height-relaxed);
                margin: 0;
            }

            .cta-section {
                padding: var(--space-8);
                background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
                border-radius: var(--radius-lg);
                border: 1px solid var(--border-accent);
                text-align: center;
                transition: all var(--duration-normal) var(--ease-out);
            }

            .cta-section:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 24px var(--shadow-medium);
            }

            .cta-title {
                color: var(--text-primary);
                font-size: var(--font-size-2xl);
                font-weight: var(--font-weight-bold);
                margin-bottom: var(--space-4);
            }

            .cta-text {
                color: var(--text-secondary);
                font-size: var(--font-size-lg);
                line-height: var(--line-height-relaxed);
                margin-bottom: var(--space-6);
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }

            .cta-actions {
                display: flex;
                gap: var(--space-4);
                justify-content: center;
                flex-wrap: wrap;
            }

            .cta-button {
                display: inline-block;
                padding: var(--space-4) var(--space-8);
                border-radius: var(--radius-md);
                font-weight: var(--font-weight-semibold);
                font-size: var(--font-size-base);
                text-decoration: none;
                transition: all var(--duration-normal) var(--ease-out);
                border: 2px solid transparent;
            }

            .cta-button.primary {
                background-color: var(--accent-primary);
                color: var(--bg-primary);
                border-color: var(--accent-primary);
            }

            .cta-button.primary:hover {
                background-color: var(--hover-primary);
                border-color: var(--hover-primary);
                transform: translateY(-2px);
                box-shadow: 0 6px 16px var(--shadow-medium);
            }

            .cta-button.secondary {
                background-color: transparent;
                color: var(--text-accent);
                border-color: var(--border-accent);
            }

            .cta-button.secondary:hover {
                background-color: var(--accent-primary);
                color: var(--bg-primary);
                border-color: var(--accent-primary);
                transform: translateY(-2px);
                box-shadow: 0 6px 16px var(--shadow-medium);
            }

            @media (max-width: 768px) {
                .home-info {
                    padding: var(--space-6);
                }
                
                .section-title {
                    font-size: var(--font-size-2xl);
                }
                
                .description {
                    font-size: var(--font-size-base);
                }
                
                .skills-grid {
                    grid-template-columns: 1fr;
                    gap: var(--space-4);
                }
                
                .skill-category {
                    padding: var(--space-3);
                }
                
                .experience-point {
                    flex-direction: column;
                    text-align: center;
                    gap: var(--space-3);
                }
                
                .cta-section {
                    padding: var(--space-6);
                }
                
                .cta-actions {
                    flex-direction: column;
                    align-items: center;
                }
                
                .cta-button {
                    width: 100%;
                    max-width: 200px;
                }
            }

            @media (max-width: 480px) {
                .skills-highlight,
                .cta-section {
                    padding: var(--space-4);
                }
                
                .cta-title {
                    font-size: var(--font-size-xl);
                }
                
                .cta-text {
                    font-size: var(--font-size-base);
                }
            }
            `}</style>
        </>
    )
}

export default HomeInfo;