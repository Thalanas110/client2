import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
    const images = [
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
        "/five.jpg",
        "/six.jpg"
    ];

    return (
        <Section id="gallery">
            <div className="text-center">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                overflow: 'hidden',
                                borderRadius: 'var(--radius-md)',
                                position: 'relative',
                                boxShadow: 'var(--shadow-md)'
                            }}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '350px',
                                    objectFit: 'cover',
                                    transition: 'transform 0.6s ease',
                                    cursor: 'pointer'
                                }}
                            />

                            {/* Hover Overlay */}
                            <div className="overlay">
                                <ZoomIn color="white" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            marginTop: 40px;
        }
        @media (max-width: 768px) {
            .gallery-grid {
                grid-template-columns: 1fr;
            }
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(122, 30, 42, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: var(--transition);
            backdrop-filter: blur(2px);
        }
        .gallery-item:hover .overlay {
            opacity: 1;
        }
        .gallery-item:hover img {
            transform: scale(1.1);
        }
      `}</style>
        </Section>
    );
};

export default Gallery;
