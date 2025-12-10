import React from 'react';
import Section from './Section';
import { Award, MapPin, Heart } from 'lucide-react';

const MoreInfo: React.FC = () => {
    return (
        // Section providing additional details about the user
        <Section id="extra">
            <div className="text-center">
                <h2>More About Me</h2>

                <div className="grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    marginTop: '30px',
                    textAlign: 'left'
                }}>
                    {/* Achievements */}
                    <div className="info-card">
                        <h3><Award size={24} style={{ display: 'inline', marginRight: '10px' }} /> Achievements</h3>
                        <ul>
                            <li>Intramuros Tour</li>
                            <li>South Korea Tour</li>
                            <li>Replied by fave artists: Awra Briguela, Bea Borres & Andrea Brillantes</li>
                            <li>PCOS Survivor</li>
                        </ul>
                    </div>

                    {/* Life Motto */}
                    <div className="info-card">
                        <h3><Heart size={24} style={{ display: 'inline', marginRight: '10px' }} /> Life Motto</h3>
                        <p className="motto">"Let go and let God!"</p>
                    </div>

                    {/* Location */}
                    <div className="info-card">
                        <h3><MapPin size={24} style={{ display: 'inline', marginRight: '10px' }} /> Location</h3>
                        <p>Sebario, San Lorenzo</p>
                    </div>
                </div>
            </div>

            <style>{`
        .info-card {
            background: var(--white);
            padding: 30px;
            border-radius: var(--radius-md);
            border: 1px solid #e6c7b3;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
        }
        .info-card:hover {
            box-shadow: var(--shadow-md);
        }
        .info-card h3 {
            color: var(--wine);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .info-card ul {
            padding-left: 20px;
            list-style-type: disc;
            color: var(--text-light);
        }
        .info-card li { margin-bottom: 8px; }
        .motto {
            font-style: italic; 
            font-size: 1.2rem;
            color: var(--text-main);
            text-align: center;
            margin-top: 10px;
        }
      `}</style>
        </Section>
    );
};

export default MoreInfo;
