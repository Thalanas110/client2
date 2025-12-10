import React from 'react';
import Section from './Section';
import { Mail, Facebook, Instagram, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const socialLinks = [
        { icon: <Mail size={24} />, text: "Email Me", href: "mailto:ryngamarcha@gmail.com", color: '#D44638' },
        { icon: <Facebook size={24} />, text: "Facebook", href: "https://www.facebook.com/rynzeljoy.gamarcha.12", color: '#4267B2' },
        { icon: <Instagram size={24} />, text: "Instagram", href: "https://www.instagram.com/definitelynotrynzel?igsh=aDZ4bjRuZ3l1c2Jm", color: '#E1306C' },
        { icon: <Video size={24} />, text: "TikTok", href: "https://www.tiktok.com/@rynhotasfckkk", color: '#000000' },
    ];

    return (
        <Section id="contact">
            <div className="text-center" style={{ marginBottom: '50px' }}>
                <h2>Let's Connect</h2>
                <p style={{ color: 'var(--text-light)', marginBottom: '40px' }}>
                    Feel free to reach out for collaborations or just to say hi!
                </p>

                <div className="contact-links" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '30px'
                }}>
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass contact-btn"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.05, backgroundColor: 'var(--white)' }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                padding: '15px 30px',
                                borderRadius: 'var(--radius-full)',
                                textDecoration: 'none',
                                color: 'var(--text-main)',
                                border: '1px solid rgba(255,255,255,0.8)'
                            }}
                        >
                            <span style={{ color: link.color }}>{link.icon}</span>
                            <span style={{ fontWeight: 500, fontSize: '1.1rem' }}>{link.text}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Contact;
