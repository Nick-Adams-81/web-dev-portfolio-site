import Layout from "../Components/Layout";
import projects1 from "./projects.json";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';


const projects = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'success';
            case 'In Development': return 'warning';
            case 'In Progress': return 'info';
            default: return 'secondary';
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Full Stack': return 'primary';
            case 'Frontend': return 'info';
            case 'Backend': return 'dark';
            case 'Game Development': return 'danger';
            case 'AI': return 'success';
            default: return 'secondary';
        }
    };

    return (
        <>
            <Layout>
                <div className="body">
                    <Container>
                        <div className="page-header animate-fade-in-up">
                            <h1 className="page-title animate-fade-in-up">My Portfolio</h1>
                            <p className="page-subtitle animate-fade-in-up stagger-1">A collection of my recent projects showcasing full-stack development, frontend applications, and innovative solutions</p>
                        </div>
                        
                        <div className="stats-section animate-fade-in-up stagger-2">
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <div className="stat-number">7</div>
                                    <div className="stat-label">Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">4</div>
                                    <div className="stat-label">Technologies</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">3</div>
                                    <div className="stat-label">Completed</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">2</div>
                                    <div className="stat-label">In Development</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="projects-container">
                            <Row className="projects-grid">
                                {projects1.map((project, index) => {
                                    return (
                                        <Col xs={12} sm={6} lg={4} key={project.id} className="project-col mb-4">
                                            <div className={`card-wrapper animate-fade-in-left stagger-${index + 3}`}>
                                                <Card className="project-card">
                                                    <div className="card-image-wrapper">
                                                        <Card.Img variant="top" src={project.image} className="card-image"/>
                                                        <div className="card-overlay">
                                                            <div className="overlay-content">
                                                                <Badge bg={getStatusColor(project.status)} className="status-badge">
                                                                    {project.status}
                                                                </Badge>
                                                                <Badge 
                                                                    bg={getCategoryColor(project.category)} 
                                                                    className="category-badge"
                                                                >
                                                                    {project.category}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Card.Body className="card-body">
                                                        <div className="card-header">
                                                            <Card.Title className="card-title">{project.title}</Card.Title>
                                                            <Card.Subtitle className="card-subtitle">{project.subtitle}</Card.Subtitle>
                                                        </div>
                                                        <Card.Text className="card-description">{project.description}</Card.Text>
                                                        
                                                        <div className="technologies-section">
                                                            <div className="tech-tags">
                                                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                                    <Badge key={techIndex} bg="secondary" className="tech-badge">
                                                                        {tech}
                                                                    </Badge>
                                                                ))}
                                                                {project.technologies.length > 3 && (
                                                                    <Badge bg="light" text="dark" className="tech-badge">
                                                                        +{project.technologies.length - 3}
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="card-actions">
                                                            <Button 
                                                                variant="outline-primary" 
                                                                href={project.link} 
                                                                className="project-button"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                View Project
                                                            </Button>
                                                            {project.github && (
                                                                <Button 
                                                                    variant="outline-secondary" 
                                                                    href={project.github} 
                                                                    className="github-button"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    GitHub
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>
            </Layout>

            <style jsx>{
                `
                 .body {
                     background-color: var(--bg-primary);
                     min-height: 100vh;
                     margin-top: 56px;
                     padding: var(--space-8) 0;
                 }

                 .page-header {
                     text-align: center;
                     margin-bottom: var(--space-12);
                     padding: var(--space-12) 0;
                 }

                 .page-title {
                     color: var(--text-primary);
                     font-size: var(--font-size-5xl);
                     font-weight: var(--font-weight-extrabold);
                     margin-bottom: var(--space-6);
                     letter-spacing: -0.03em;
                 }

                 .page-subtitle {
                     color: var(--text-secondary);
                     font-size: var(--font-size-xl);
                     font-weight: var(--font-weight-normal);
                     max-width: 700px;
                     margin: 0 auto;
                     line-height: var(--line-height-relaxed);
                 }

                 .stats-section {
                     margin-bottom: var(--space-16);
                 }

                 .stats-grid {
                     display: grid;
                     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                     gap: var(--space-6);
                     max-width: 600px;
                     margin: 0 auto;
                 }

                 .stat-item {
                     text-align: center;
                     padding: var(--space-6);
                     background-color: var(--bg-card);
                     border-radius: var(--radius-lg);
                     border: 1px solid var(--border-primary);
                     transition: all var(--duration-normal) var(--ease-out);
                 }

                 .stat-item:hover {
                     transform: translateY(-4px);
                     border-color: var(--border-accent);
                     box-shadow: 0 8px 24px var(--shadow-medium);
                 }

                 .stat-number {
                     color: var(--text-accent);
                     font-size: var(--font-size-4xl);
                     font-weight: var(--font-weight-bold);
                     margin-bottom: var(--space-2);
                 }

                 .stat-label {
                     color: var(--text-secondary);
                     font-size: var(--font-size-sm);
                     font-weight: var(--font-weight-medium);
                     text-transform: uppercase;
                     letter-spacing: 0.05em;
                 }

                 .projects-container {
                     margin-top: var(--space-8);
                 }

                 .projects-grid {
                     margin: 0;
                     row-gap: var(--space-8);
                 }

                 .project-col {
                     padding: 0 var(--space-3);
                 }

                 .card-wrapper {
                     height: 100%;
                     display: flex;
                 }

                 .project-card {
                     background-color: var(--bg-card);
                     border: 1px solid var(--border-primary);
                     border-radius: var(--radius-lg);
                     box-shadow: 0 4px 12px var(--shadow-light);
                     transition: all var(--duration-normal) var(--ease-out);
                     height: 100%;
                     display: flex;
                     flex-direction: column;
                     overflow: hidden;
                     max-width: 400px;
                     margin: 0 auto;
                 }

                 .project-card:hover {
                     transform: translateY(-6px);
                     box-shadow: 0 12px 32px var(--shadow-medium);
                     border-color: var(--border-accent);
                 }

                 .card-image-wrapper {
                     position: relative;
                     overflow: hidden;
                     flex-shrink: 0;
                 }

                 .card-image {
                     width: 100%;
                     height: 160px;
                     object-fit: cover;
                     transition: transform var(--duration-normal) var(--ease-out);
                 }

                 .project-card:hover .card-image {
                     transform: scale(1.05);
                 }

                 .card-overlay {
                     position: absolute;
                     top: var(--space-3);
                     right: var(--space-3);
                     display: flex;
                     flex-direction: column;
                     gap: var(--space-1);
                 }

                 .overlay-content {
                     display: flex;
                     flex-direction: column;
                     gap: var(--space-1);
                 }

                 .status-badge,
                 .category-badge {
                     font-size: var(--font-size-xs);
                     font-weight: var(--font-weight-medium);
                     padding: var(--space-1) var(--space-2);
                 }

                 .card-body {
                     padding: var(--space-5);
                     display: flex;
                     flex-direction: column;
                     flex-grow: 1;
                 }

                 .card-header {
                     margin-bottom: var(--space-3);
                 }

                 .card-title {
                     color: var(--text-primary);
                     font-weight: var(--font-weight-semibold);
                     font-size: var(--font-size-lg);
                     margin-bottom: var(--space-1);
                     letter-spacing: -0.01em;
                     line-height: var(--line-height-tight);
                 }

                 .card-subtitle {
                     color: var(--text-accent);
                     font-size: var(--font-size-sm);
                     font-weight: var(--font-weight-medium);
                     margin-bottom: 0;
                 }

                 .card-description {
                     color: var(--text-secondary);
                     font-size: var(--font-size-sm);
                     line-height: var(--line-height-relaxed);
                     margin-bottom: var(--space-4);
                     flex-grow: 1;
                     display: -webkit-box;
                     -webkit-line-clamp: 3;
                     -webkit-box-orient: vertical;
                     overflow: hidden;
                 }

                 .technologies-section {
                     margin-bottom: var(--space-4);
                 }

                 .tech-tags {
                     display: flex;
                     flex-wrap: wrap;
                     gap: var(--space-1);
                 }

                 .tech-badge {
                     font-size: var(--font-size-xs);
                     font-weight: var(--font-weight-medium);
                     padding: var(--space-1) var(--space-2);
                     border-radius: var(--radius-sm);
                 }

                 .card-actions {
                     display: flex;
                     gap: var(--space-2);
                     margin-top: auto;
                 }

                 .project-button,
                 .github-button {
                     flex: 1;
                     border-radius: var(--radius-md);
                     padding: var(--space-2) var(--space-3);
                     font-weight: var(--font-weight-medium);
                     font-size: var(--font-size-sm);
                     transition: all var(--duration-normal) var(--ease-out);
                     text-decoration: none;
                     text-align: center;
                     white-space: nowrap;
                 }

                 .project-button {
                     color: var(--text-accent);
                     border-color: var(--border-accent);
                     background-color: transparent;
                 }

                 .project-button:hover {
                     background-color: var(--accent-primary) !important;
                     border-color: var(--accent-primary) !important;
                     color: var(--bg-primary) !important;
                     transform: translateY(-2px);
                     box-shadow: 0 6px 16px var(--shadow-medium);
                 }

                 .github-button {
                     color: var(--text-secondary);
                     border-color: var(--border-secondary);
                     background-color: transparent;
                 }

                 .github-button:hover {
                     background-color: var(--bg-tertiary) !important;
                     border-color: var(--border-accent) !important;
                     color: var(--text-primary) !important;
                     transform: translateY(-2px);
                 }

                 @media (max-width: 1200px) {
                     .project-col {
                         padding: 0 var(--space-2);
                     }
                 }

                 @media (max-width: 768px) {
                     .page-title {
                         font-size: var(--font-size-4xl);
                     }
                     
                     .page-subtitle {
                         font-size: var(--font-size-lg);
                     }
                     
                     .body {
                         padding: var(--space-6) 0;
                     }
                     
                     .page-header {
                         margin-bottom: var(--space-8);
                         padding: var(--space-8) 0;
                     }
                     
                     .stats-grid {
                         grid-template-columns: repeat(2, 1fr);
                         gap: var(--space-4);
                     }
                     
                     .stat-item {
                         padding: var(--space-4);
                     }
                     
                     .stat-number {
                         font-size: var(--font-size-3xl);
                     }
                     
                     .projects-grid {
                         row-gap: var(--space-4);
                     }
                     
                     .project-col {
                         padding: 0 var(--space-2);
                         margin-bottom: var(--space-4);
                     }
                     
                     .card-body {
                         padding: var(--space-4);
                     }
                     
                     .card-actions {
                         flex-direction: column;
                     }
                     
                     .project-button,
                     .github-button {
                         width: 100%;
                     }
                 }

                 @media (max-width: 480px) {
                     .page-title {
                         font-size: var(--font-size-3xl);
                     }
                     
                     .page-subtitle {
                         font-size: var(--font-size-base);
                     }
                     
                     .stats-grid {
                         grid-template-columns: 1fr;
                     }
                     
                     .project-col {
                         padding: 0;
                         margin-bottom: var(--space-4);
                     }
                     
                     .card-image {
                         height: 140px;
                     }
                 }
   
            `}

            </style>

        </>
    )
}

export default projects;