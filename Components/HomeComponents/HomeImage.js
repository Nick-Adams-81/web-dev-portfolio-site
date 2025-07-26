import Image from 'next/image';
import Pic from '../../public/images/Nick_Adams.jpg';

const HomeImage = () => {
    return (
        <>
            <div className="image-container">
                <div className="image-wrapper animate-scale-in">
                    <Image 
                        src={Pic}
                        height={300}
                        width={300}
                        alt="Nick Adams - Full Stack Developer"
                        className="profile-image"
                        priority
                    />
                    <div className="image-overlay">
                        <div className="overlay-content">
                            <h3 className="overlay-title">Nick Adams</h3>
                            <p className="overlay-subtitle">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
                <div className="image-decoration">
                    <div className="decoration-circle circle-1 animate-float"></div>
                    <div className="decoration-circle circle-2 animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="decoration-circle circle-3 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>

            <style jsx>{`
                .image-container {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: var(--space-8);
                }

                .image-wrapper {
                    position: relative;
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    box-shadow: 0 12px 40px var(--shadow-heavy);
                    transition: all var(--duration-normal) var(--ease-out);
                }

                .image-wrapper:hover {
                    transform: scale(1.05);
                    box-shadow: 0 20px 60px var(--shadow-heavy);
                }

                .profile-image {
                    border-radius: var(--radius-xl);
                    transition: all var(--duration-normal) var(--ease-out);
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(100, 255, 218, 0.9),
                        rgba(0, 212, 170, 0.8)
                    );
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity var(--duration-normal) var(--ease-out);
                }

                .image-wrapper:hover .image-overlay {
                    opacity: 1;
                }

                .overlay-content {
                    text-align: center;
                    color: var(--bg-primary);
                }

                .overlay-title {
                    font-size: var(--font-size-2xl);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--space-2);
                    letter-spacing: -0.01em;
                }

                .overlay-subtitle {
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-medium);
                    opacity: 0.9;
                }

                .image-decoration {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    z-index: -1;
                }

                .decoration-circle {
                    position: absolute;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
                    opacity: 0.1;
                }

                .circle-1 {
                    width: 80px;
                    height: 80px;
                    top: -20px;
                    left: 10%;
                }

                .circle-2 {
                    width: 60px;
                    height: 60px;
                    top: 50%;
                    right: 10%;
                }

                .circle-3 {
                    width: 40px;
                    height: 40px;
                    bottom: -10px;
                    left: 20%;
                }

                @media (max-width: 768px) {
                    .image-wrapper {
                        transform: scale(0.9);
                    }
                    
                    .image-wrapper:hover {
                        transform: scale(0.95);
                    }
                    
                    .overlay-title {
                        font-size: var(--font-size-xl);
                    }
                    
                    .overlay-subtitle {
                        font-size: var(--font-size-base);
                    }
                    
                    .decoration-circle {
                        display: none;
                    }
                }

                @media (max-width: 480px) {
                    .image-wrapper {
                        transform: scale(0.8);
                    }
                    
                    .image-wrapper:hover {
                        transform: scale(0.85);
                    }
                }
            `}</style>
        </>
    )
}

export default HomeImage;