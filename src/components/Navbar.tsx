import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'More', href: '#extra' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    padding: scrolled ? '15px 30px' : '25px 30px',
                    background: scrolled ? 'var(--white)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 1000,
                    transition: 'var(--transition)'
                }}
            >
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>ABOUT ME</h1>

                <button
                    className="hamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ display: 'none', cursor: 'pointer', color: 'var(--wine)' }}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                margin: '0 15px',
                                fontWeight: 500,
                                color: 'var(--text-main)',
                                transition: 'var(--transition)'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Mobile Nav Overlay */}
            <div
                className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: isMenuOpen ? 0 : '-100%',
                    width: '280px', // Fixed width for mobile drawer
                    height: '100vh',
                    background: 'var(--white)',
                    boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
                    padding: '80px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 999,
                    transition: 'right 0.3s ease-in-out'
                }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        style={{
                            fontSize: '1.2rem',
                            padding: '15px 0',
                            borderBottom: '1px solid #eee',
                            color: 'var(--text-main)'
                        }}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Overlay Backdrop */}
            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.4)',
                        zIndex: 998
                    }}
                />
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .hamburger { display: block !important; }
        }
        .nav-link:hover { color: var(--wine) !important; }
      `}</style>
        </>
    );
};

export default Navbar;
