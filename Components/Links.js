import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Links = () => {
  return (
    <>
      <div id="container">
        <div className="navigation-wrapper animate-fade-in-up">
          <h1 className="page-title animate-fade-in-up">Navigation</h1>
          <p className="page-subtitle animate-fade-in-up stagger-1">Choose where you'd like to go</p>
          
          <Row className="nav-grid">
            <Col xs={12} sm={6} md={3} className="nav-item-wrapper">
              <Link href="/home">
                <a className="nav-link animate-fade-in-left stagger-2">
                  <div className="nav-icon">🏠</div>
                  <span className="nav-text">Home</span>
                </a>
              </Link>
            </Col>

            <Col xs={12} sm={6} md={3} className="nav-item-wrapper">
              <Link href="/tech">
                <a className="nav-link animate-fade-in-left stagger-3">
                  <div className="nav-icon">⚡</div>
                  <span className="nav-text">Tech</span>
                </a>
              </Link>
            </Col>

            <Col xs={12} sm={6} md={3} className="nav-item-wrapper">
              <Link href="/projects">
                <a className="nav-link animate-fade-in-left stagger-4">
                  <div className="nav-icon">💼</div>
                  <span className="nav-text">Portfolio</span>
                </a>
              </Link>
            </Col>

            <Col xs={12} sm={6} md={3} className="nav-item-wrapper">
              <Link href="/connect">
                <a className="nav-link animate-fade-in-left stagger-5">
                  <div className="nav-icon">📧</div>
                  <span className="nav-text">Connect</span>
                </a>
              </Link>
            </Col>
          </Row>
        </div>
      </div>

      <style jsx>
        {`
          #container {
            background-color: var(--bg-primary);
            display: flex;
            min-height: 100vh;
            margin-top: 56px;
            align-items: center;
            justify-content: center;
            padding: var(--space-8) 0;
          }

          .navigation-wrapper {
            text-align: center;
            max-width: 800px;
            width: 100%;
            padding: 0 var(--space-4);
          }

          .page-title {
            color: var(--text-primary);
            font-size: var(--font-size-5xl);
            font-weight: var(--font-weight-extrabold);
            margin-bottom: var(--space-4);
            letter-spacing: -0.03em;
          }

          .page-subtitle {
            color: var(--text-secondary);
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-normal);
            margin-bottom: var(--space-12);
            line-height: var(--line-height-relaxed);
          }

          .nav-grid {
            margin-top: var(--space-8);
          }

          .nav-item-wrapper {
            margin-bottom: var(--space-6);
          }

          .nav-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all var(--duration-normal) var(--ease-out);
            padding: var(--space-8);
            border-radius: var(--radius-lg);
            background-color: var(--bg-card);
            border: 1px solid var(--border-primary);
            box-shadow: 0 4px 12px var(--shadow-light);
            min-height: 160px;
            position: relative;
            overflow: hidden;
          }

          .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
            transform: scaleX(0);
            transition: transform var(--duration-normal) var(--ease-out);
          }

          .nav-link:hover {
            color: var(--text-accent);
            background-color: var(--bg-tertiary);
            border-color: var(--border-accent);
            box-shadow: 0 8px 24px var(--shadow-medium);
            transform: translateY(-4px);
          }

          .nav-link:hover::before {
            transform: scaleX(1);
          }

          .nav-icon {
            font-size: var(--font-size-4xl);
            margin-bottom: var(--space-4);
            transition: transform var(--duration-normal) var(--ease-out);
          }

          .nav-link:hover .nav-icon {
            transform: scale(1.1);
          }

          .nav-text {
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-semibold);
            letter-spacing: 0.02em;
          }

          @media (max-width: 768px) {
            .page-title {
              font-size: var(--font-size-4xl);
            }
            
            .page-subtitle {
              font-size: var(--font-size-base);
            }
            
            .nav-link {
              padding: var(--space-6);
              min-height: 120px;
            }
            
            .nav-icon {
              font-size: var(--font-size-3xl);
            }
            
            .nav-text {
              font-size: var(--font-size-base);
            }
          }

          @media (max-width: 480px) {
            .page-title {
              font-size: var(--font-size-3xl);
            }
            
            .navigation-wrapper {
              padding: 0 var(--space-2);
            }
          }
        `}
      </style>
    </>
  )
}

export default Links;


