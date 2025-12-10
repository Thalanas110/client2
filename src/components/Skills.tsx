import React from 'react';
import Section from './Section';
import { Sparkles, Palette, PenTool, Mic, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    const skills = [
        { icon: <PenTool size={32} />, text: "Editing", desc: "Crafting visual stories" },
        { icon: <Smartphone size={32} />, text: "Content Creation", desc: "Capturing moments" },
        { icon: <Sparkles size={32} />, text: "Makeup Artistry", desc: "Expressing beauty" },
        { icon: <Mic size={32} />, text: "Singing", desc: "Melodic expression" },
        { icon: <Palette size={32} />, text: "Bracelet Making", desc: "Handmade accessories" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section id="skills">
            <div className="text-center">
                <h2>My Passions & Skills</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '25px',
                        marginTop: '40px'
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="glass skill-card"
                            whileHover={{ y: -8, scale: 1.02 }}
                            style={{
                                padding: '30px 20px',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                background: 'var(--white)',
                                padding: '15px',
                                borderRadius: '50%',
                                color: 'var(--wine)',
                                boxShadow: 'var(--shadow-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {skill.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{skill.text}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{skill.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
