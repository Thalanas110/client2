import React from 'react';
import Section from './Section';

const Hero: React.FC = () => {
    return (
        <Section id="about" className="hero-section">
            <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '60px' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>About Me</h2>

                <div style={{
                    background: 'var(--white)',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid #e6c7b3',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative'
                }}>
                    {/* Decorative Sparkle (CSS-based or simple SVG) */}
                    <div style={{ position: 'absolute', top: -15, left: -15, fontSize: '2rem' }}>✨</div>
                    <div style={{ position: 'absolute', bottom: -15, right: -15, fontSize: '2rem' }}>🍷</div>

                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                        Hi! I'm <strong>Rynzel Joy Gamarcha</strong> — but you can call me <strong>Ryn</strong> or <strong>Joy</strong>.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                        I’m 21 years old and a girl who LOVES studio ghibli movies, matcha, arts and stuffs, and doing makeups, transforming myself into something new.
                        This space is a soft, elegant reflection of who I am.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
