import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='bg-slate-950'>
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
