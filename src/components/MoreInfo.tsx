import React from 'react';
import Section from './Section';
import { Award, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MoreInfo: React.FC = () => {
    return (
        <Section id="extra">
            <div className="text-center">
                <h2>More About Me</h2>

                <div className="grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '40px',
                    textAlign: 'left'
                }}>
                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass card"
                        style={{ padding: '30px', height: '100%' }}
                    >
                        <h3 className="card-title">
                            <span className="icon-box"><Award size={20} /></span>
                            Achievements
                        </h3>
                        <ul className="custom-list">
                            <li>Intramuros Tour</li>
                            <li>South Korea Tour</li>
                            <li>Replied by fave artists: Awra Briguela, Bea Borres & Andrea Brillantes</li>
                            <li>PCOS Survivor</li>
                        </ul>
                    </motion.div>

                    {/* Life Motto */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass card"
                        style={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <h3 className="card-title">
                            <span className="icon-box"><Heart size={20} /></span>
                            Life Motto
                        </h3>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p className="motto">"Let go and let God!"</p>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="glass card"
                        style={{ padding: '30px', height: '100%' }}
                    >
                        <h3 className="card-title">
                            <span className="icon-box"><MapPin size={20} /></span>
                            Location
                        </h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginTop: '10px' }}>
                            Sebario, San Lorenzo
                        </p>

                        <div style={{ marginTop: '20px', height: '150px', borderRadius: 'var(--radius-sm)', background: '#eee', overflow: 'hidden' }}>
                            {/* Placeholder Map Graphic or similar */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '0.9rem' }}>
                                📍 Map View
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        .card {
            border-radius: var(--radius-md);
            border: 1px solid rgba(255,255,255,0.6);
            transition: var(--transition);
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }
        .card-title {
            color: var(--wine);
            display: flex;
            align-items: center;
            gap: 15px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        .icon-box {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--wine-soft);
            color: var(--wine);
        }
        .custom-list {
            padding-left: 0;
            list-style: none;
        }
        .custom-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 25px;
            color: var(--text-light);
        }
        .custom-list li::before {
            content: '•';
            color: var(--matcha);
            font-size: 1.5rem;
            position: absolute;
            left: 0;
            top: -5px;
        }
        .motto {
            font-family: 'Playfair Display', serif;
            font-style: italic; 
            font-size: 1.8rem;
            color: var(--text-main);
            text-align: center;
            line-height: 1.4;
        }
      `}</style>
        </Section>
    );
};

export default MoreInfo;
