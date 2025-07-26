

const Tech = () => {
    const technologies = [
        { 
            name: 'React', 
            icon: '⚛️', 
            level: 90,
            category: 'Frontend',
            description: 'Modern React with hooks, context, and functional components',
            experience: '2+ years'
        },
        { 
            name: 'JavaScript', 
            icon: '⚡', 
            level: 85,
            category: 'Frontend',
            description: 'ES6+, async/await, DOM manipulation, and modern APIs',
            experience: '3+ years'
        },
        { 
            name: 'Java', 
            icon: '☕', 
            level: 85,
            category: 'Backend',
            description: 'Spring Boot, JPA, RESTful APIs, and enterprise development',
            experience: '2+ years'
        },
        { 
            name: 'Python', 
            icon: '🐍', 
            level: 80,
            category: 'Backend',
            description: 'Web development, automation, data processing, and scripting',
            experience: '2+ years'
        },
        { 
            name: 'HTML/CSS', 
            icon: '🌐', 
            level: 90,
            category: 'Frontend',
            description: 'Semantic HTML, modern CSS, responsive design, and accessibility',
            experience: '4+ years'
        },
        { 
            name: 'Node.js', 
            icon: '🟢', 
            level: 75,
            category: 'Backend',
            description: 'Express.js, server-side development, and API creation',
            experience: '1+ years'
        }
    ];

    const categories = ['Frontend', 'Backend'];
    const getCategoryColor = (category) => {
        return category === 'Frontend' ? 'var(--accent-primary)' : 'var(--accent-secondary)';
    };

    return (
        <>
            <div className="tech-container animate-scale-in">
                <h2 className="tech-title animate-fade-in-up">Technical Skills</h2>
                <p className="tech-subtitle animate-fade-in-up stagger-1">My expertise across different technology stacks</p>
                
                <div className="tech-categories">
                    {categories.map((category, catIndex) => (
                        <div key={category} className="category-section animate-fade-in-up stagger-2">
                            <h3 className="category-title" style={{ color: getCategoryColor(category) }}>
                                {category} Development
                            </h3>
                            <div className="tech-grid">
                                {technologies
                                    .filter(tech => tech.category === category)
                                    .map((tech, index) => (
                                        <div 
                                            key={tech.name} 
                                            className="tech-item animate-fade-in-left"
                                            style={{ animationDelay: `${(catIndex * 200) + (index * 100)}ms` }}
                                        >
                                            <div className="tech-header">
                                                <div className="tech-icon">{tech.icon}</div>
                                                <div className="tech-info">
                                                    <h4 className="tech-name">{tech.name}</h4>
                                                    <p className="tech-description">{tech.description}</p>
                                                    <span className="tech-experience">{tech.experience}</span>
                                                </div>
                                            </div>
                                            <div className="skill-section">
                                                <div className="skill-bar">
                                                    <div 
                                                        className="skill-progress" 
                                                        style={{ 
                                                            width: `${tech.level}%`,
                                                            background: `linear-gradient(90deg, ${getCategoryColor(category)}, ${getCategoryColor(category)}80)`
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="skill-level">{tech.level}%</span>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tech-summary animate-fade-in-up stagger-3">
                    <h3 className="summary-title">Additional Skills</h3>
                    <div className="additional-skills">
                        <div className="skill-group">
                            <h4 className="group-title">Tools & Platforms</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">AWS</span>
                                <span className="skill-tag">MySQL</span>
                                <span className="skill-tag">MongoDB</span>
                            </div>
                        </div>
                        <div className="skill-group">
                            <h4 className="group-title">Frameworks & Libraries</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Express.js</span>
                                <span className="skill-tag">Bootstrap</span>
                                <span className="skill-tag">jQuery</span>
                                <span className="skill-tag">Thymeleaf</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .tech-container {
                    background-color: var(--bg-card);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--border-primary);
                    padding: var(--space-8);
                    box-shadow: 0 8px 32px var(--shadow-medium);
                    transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
                }

                .tech-container:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px var(--shadow-heavy);
                }

                .tech-title {
                    color: var(--text-primary);
                    font-size: var(--font-size-2xl);
                    font-weight: var(--font-weight-bold);
                    text-align: center;
                    margin-bottom: var(--space-2);
                    letter-spacing: -0.01em;
                    position: relative;
                }

                .tech-subtitle {
                    color: var(--text-secondary);
                    font-size: var(--font-size-base);
                    text-align: center;
                    margin-bottom: var(--space-8);
                    line-height: var(--line-height-relaxed);
                }

                .tech-title::after {
                    content: '';
                    position: absolute;
                    bottom: -var(--space-4);
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 2px;
                    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
                    border-radius: 1px;
                }

                .tech-categories {
                    margin-bottom: var(--space-8);
                }

                .category-section {
                    margin-bottom: var(--space-8);
                }

                .category-title {
                    font-size: var(--font-size-xl);
                    font-weight: var(--font-weight-semibold);
                    margin-bottom: var(--space-6);
                    text-align: center;
                    letter-spacing: -0.01em;
                }

                .tech-grid {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-4);
                }

                .tech-item {
                    padding: var(--space-6);
                    background-color: var(--bg-tertiary);
                    border-radius: var(--radius-md);
                    border: 1px solid var(--border-secondary);
                    transition: all var(--duration-normal) var(--ease-out);
                }

                .tech-item:hover {
                    background-color: var(--bg-secondary);
                    border-color: var(--border-accent);
                    transform: translateX(8px);
                }

                .tech-header {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-4);
                    margin-bottom: var(--space-4);
                }

                .tech-icon {
                    font-size: var(--font-size-3xl);
                    flex-shrink: 0;
                    margin-top: var(--space-1);
                }

                .tech-info {
                    flex: 1;
                }

                .tech-name {
                    color: var(--text-primary);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-semibold);
                    margin-bottom: var(--space-2);
                }

                .tech-description {
                    color: var(--text-secondary);
                    font-size: var(--font-size-sm);
                    line-height: var(--line-height-relaxed);
                    margin-bottom: var(--space-2);
                }

                .tech-experience {
                    color: var(--text-accent);
                    font-size: var(--font-size-xs);
                    font-weight: var(--font-weight-medium);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .skill-section {
                    display: flex;
                    align-items: center;
                    gap: var(--space-4);
                }

                .skill-bar {
                    flex: 1;
                    height: 8px;
                    background-color: var(--border-primary);
                    border-radius: 4px;
                    overflow: hidden;
                }

                .skill-progress {
                    height: 100%;
                    border-radius: 4px;
                    transition: width var(--duration-slow) var(--ease-out);
                    transform-origin: left;
                }

                .skill-level {
                    color: var(--text-secondary);
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                    min-width: 40px;
                    text-align: right;
                }

                .tech-summary {
                    padding: var(--space-6);
                    background-color: var(--bg-tertiary);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--border-secondary);
                }

                .summary-title {
                    color: var(--text-primary);
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-semibold);
                    margin-bottom: var(--space-6);
                    text-align: center;
                }

                .additional-skills {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: var(--space-6);
                }

                .skill-group {
                    text-align: center;
                }

                .group-title {
                    color: var(--text-accent);
                    font-size: var(--font-size-base);
                    font-weight: var(--font-weight-semibold);
                    margin-bottom: var(--space-4);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-2);
                    justify-content: center;
                }

                .skill-tag {
                    background-color: var(--bg-secondary);
                    color: var(--text-secondary);
                    padding: var(--space-2) var(--space-3);
                    border-radius: var(--radius-sm);
                    font-size: var(--font-size-xs);
                    font-weight: var(--font-weight-medium);
                    border: 1px solid var(--border-primary);
                    transition: all var(--duration-normal) var(--ease-out);
                }

                .skill-tag:hover {
                    background-color: var(--accent-primary);
                    color: var(--bg-primary);
                    border-color: var(--accent-primary);
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .tech-container {
                        padding: var(--space-6);
                    }
                    
                    .tech-title {
                        font-size: var(--font-size-xl);
                    }
                    
                    .tech-item {
                        padding: var(--space-4);
                    }
                    
                    .tech-header {
                        flex-direction: column;
                        text-align: center;
                        gap: var(--space-3);
                    }
                    
                    .tech-icon {
                        font-size: var(--font-size-2xl);
                        margin-top: 0;
                    }
                    
                    .tech-name {
                        font-size: var(--font-size-base);
                    }
                    
                    .additional-skills {
                        grid-template-columns: 1fr;
                        gap: var(--space-4);
                    }
                }

                @media (max-width: 480px) {
                    .tech-container {
                        padding: var(--space-4);
                    }
                    
                    .tech-summary {
                        padding: var(--space-4);
                    }
                    
                    .skill-tags {
                        gap: var(--space-1);
                    }
                    
                    .skill-tag {
                        padding: var(--space-1) var(--space-2);
                        font-size: var(--font-size-xs);
                    }
                }
            `}</style>
        </>
    )
}

export default Tech;