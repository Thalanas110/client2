import React from 'react';
import Section from './Section';

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
                        <div key={index} className="gallery-item" style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 30px;
        }
        @media (max-width: 768px) {
            .gallery-grid {
                grid-template-columns: 1fr;
            }
        }
        .gallery-item:hover img {
            transform: scale(1.05);
        }
      `}</style>
        </Section>
    );
};

export default Gallery;
