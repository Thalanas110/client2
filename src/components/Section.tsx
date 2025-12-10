import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
    delay?: number;
}

const Section: FC<SectionProps> = ({ id, className = '', children, delay = 0 }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                className="container"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
