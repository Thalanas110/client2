import React from 'react';
import Section from './Section';
import { Sparkles, Palette, PenTool, Mic, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
    const skills = [
        { icon: <PenTool size={20} />, text: "Editing" },
        { icon: <Smartphone size={20} />, text: "Content Creation" },
        { icon: <Sparkles size={20} />, text: "Makeup Artistry" },
        { icon: <Mic size={20} />, text: "Singing" },
        { icon: <Palette size={20} />, text: "Bracelet Making" },
    ];

    return (
        <Section id="skills">
            <div className="text-center">
                <h2>My Skills</h2>
                <div className="skills-grid" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '30px'
                }}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card"
                            style={{
                                background: 'var(--white)',
                                padding: '15px 30px',
                                borderRadius: 'var(--radius-full)', // Pill shape
                                border: '1px solid #e6c7b3',
                                boxShadow: 'var(--shadow-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1.1rem',
                                transition: 'var(--transition)',
                                cursor: 'default'
                            }}
                        >
                            <span style={{ color: 'var(--wine)' }}>{skill.icon}</span>
                            {skill.text}
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md) !important;
            background: var(--cream) !important;
        }
      `}</style>
        </Section>
    );
};

export default Skills;
