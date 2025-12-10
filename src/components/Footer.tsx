import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: 'var(--text-light)',
            fontSize: '0.9rem',
            marginTop: 'auto'
        }}>
            <p>&copy; {new Date().getFullYear()} Rynzel Joy Gamarcha — About Her 🍷✨</p>
        </footer>
    );
};

export default Footer;
