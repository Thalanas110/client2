import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <Section id="about" className="hero-section">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'center', gap: '50px' }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--matcha-dark)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}
                    >
                        Welcome to my Journal
                    </motion.span>

                    <h1 style={{ margin: '20px 0', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                        Hi, I'm <span style={{ color: 'var(--wine)' }}>Rynzel</span>
                    </h1>

                    <div className="glass" style={{
                        padding: '30px',
                        borderRadius: 'var(--radius-md)',
                        marginTop: '30px',
                        position: 'relative'
                    }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                            Also known as <strong>Joy</strong>. A 21-year-old creative soul who finds magic in Studio Ghibli movies, comfort in matcha, and expression through makeup art.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            TRANSFORMING • CREATING • LIVING
                        </p>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    {/* Decorative Background Blob */}
                    <div style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, var(--wine-soft) 0%, transparent 70%)',
                        borderRadius: '50%',
                        zIndex: -1
                    }} />

                    {/* Main Image Container */}
                    <div style={{
                        width: '350px',
                        height: '450px',
                        borderRadius: '200px 200px 20px 20px',
                        overflow: 'hidden',
                        border: '4px solid var(--white)',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <img
                            src="/two.jpg"
                            alt="Rynzel Joy Gamarcha"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="glass"
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            right: '20px',
                            padding: '15px 25px',
                            borderRadius: 'var(--radius-full)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        <span>✨</span>
                        <span style={{ fontWeight: 600, color: 'var(--wine)' }}>Creative Spirit</span>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
