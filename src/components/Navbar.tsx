import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
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

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    padding: scrolled ? '15px 30px' : '30px 40px',
                    transition: 'all 0.4s ease',
                    pointerEvents: isMenuOpen ? 'none' : 'auto' // Disable header interaction when menu is open
                }}
            >
                <div
                    className={scrolled ? "glass" : ""}
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        background: scrolled ? 'rgba(255, 255, 255, 0.65)' : 'transparent',
                        backdropFilter: scrolled ? 'blur(12px)' : 'none',
                        borderRadius: scrolled ? 'var(--radius-full)' : '0',
                        padding: '10px 30px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
                        border: scrolled ? '1px solid rgba(255,255,255,0.4)' : 'none'
                    }}
                >
                    <a href="#" style={{
                        fontSize: '1.5rem',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: 'var(--wine)',
                        letterSpacing: '-0.5px'
                    }}>
                        Ryn's Journal
                    </a>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav" style={{ display: 'flex', gap: '30px' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    color: 'var(--text-main)',
                                    position: 'relative'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button - Only visible when menu is closed */}
                    <button
                        className="hamburger"
                        onClick={() => setIsMenuOpen(true)}
                        style={{ display: 'none', color: 'var(--wine)', pointerEvents: 'auto' }}
                        aria-label="Open Menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </motion.header>

            {/* Full Screen Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'var(--oatmilk)',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '30px',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Mobile Menu Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                            <span style={{
                                fontSize: '1.5rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                color: 'var(--wine)'
                            }}>
                                Ryn's Journal
                            </span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    padding: '10px',
                                    background: 'var(--wine-soft)',
                                    borderRadius: '50%',
                                    color: 'var(--wine)',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                                    style={{
                                        fontSize: '2rem',
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: 'var(--wine)',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Decoration */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'var(--matcha-light)',
                            opacity: 0.2,
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .hamburger { display: block !important; }
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background: var(--wine);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .nav-link:hover {
                    color: var(--wine) !important;
                }
            `}</style>
        </>
    );
};

export default Navbar;
