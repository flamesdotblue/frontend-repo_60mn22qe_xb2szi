import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-2 font-semibold">
            <Rocket className="h-5 w-5 text-purple-300" />
            <span>Portfolio</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Your Name. Crafted with passion and a dash of stardust.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
