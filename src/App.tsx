import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import MoreInfo from './components/MoreInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Skills />
        <Gallery />
        <MoreInfo />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
