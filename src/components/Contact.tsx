import React from 'react';
import Section from './Section';
import { Mail, Facebook, Instagram, Video } from 'lucide-react';

const Contact: React.FC = () => {
    const socialLinks = [
        { icon: <Mail size={20} />, text: "Email Me", href: "mailto:ryngamarcha@gmail.com" },
        { icon: <Facebook size={20} />, text: "Facebook", href: "https://www.facebook.com/rynzeljoy.gamarcha.12" },
        { icon: <Instagram size={20} />, text: "Instagram", href: "https://www.instagram.com/definitelynotrynzel?igsh=aDZ4bjRuZ3l1c2Jm" },
        { icon: <Video size={20} />, text: "TikTok", href: "https://www.tiktok.com/@rynhotasfckkk" }, // Using Video icon as generic for TikTok if custom svg needed we can add later
    ];

    return (
        <Section id="contact">
            <div className="text-center" style={{ marginBottom: '50px' }}>
                <h2>Contact Me</h2>
                <div className="contact-links" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '30px'
                }}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                        >
                            {link.icon}
                            <span>{link.text}</span>
                        </a>
                    ))}
                </div>
            </div>
            <style>{`
        .contact-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--wine);
            color: white;
            padding: 12px 25px;
            border-radius: var(--radius-full);
            transition: var(--transition);
            font-weight: 500;
        }
        .contact-btn:hover {
            background: var(--wine-light);
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
        }
      `}</style>
        </Section>
    );
};

export default Contact;
