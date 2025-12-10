import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: 'var(--text-light)',
            fontSize: '0.95rem',
            marginTop: 'auto',
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 70%)'
        }}>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                &copy; {new Date().getFullYear()} Rynzel Joy Gamarcha — Made with <Heart size={16} fill="var(--wine)" color="var(--wine)" />
            </p>
        </footer>
    );
};

export default Footer;
