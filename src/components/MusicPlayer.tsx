import { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Audio playback failed:", error);
                    // Browsers might block playing if not triggered by user interaction
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 2000
        }}>
            <audio ref={audioRef} loop src="https://www.bensound.com/bensound-music/bensound-cute.mp3" />

            <button
                onClick={togglePlay}
                style={{
                    background: 'var(--wine)',
                    color: 'white',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-lg)',
                    transition: 'var(--transition)',
                    animation: isPlaying ? 'pulse 2s infinite' : 'none'
                }}
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? <Pause size={24} /> : <Music size={24} />}
            </button>
            <style>{`
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(122, 30, 42, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(122, 30, 42, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(122, 30, 42, 0); }
                }
            `}</style>
        </div>
    );
};

export default MusicPlayer;
