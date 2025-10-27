import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-2 text-zinc-300/90">A snapshot of who I am and how I work.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Background</h3>
            <p className="mt-2 text-sm text-zinc-300/90">
              I build elegant, performant web apps with a focus on maintainable code, UX polish, and
              accessibility. I enjoy turning complex problems into simple, beautiful interfaces.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Skills</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-zinc-300/90">
              <li className="rounded bg-white/5 px-3 py-2">React</li>
              <li className="rounded bg-white/5 px-3 py-2">TypeScript</li>
              <li className="rounded bg-white/5 px-3 py-2">Tailwind</li>
              <li className="rounded bg-white/5 px-3 py-2">Node.js</li>
              <li className="rounded bg-white/5 px-3 py-2">FastAPI</li>
              <li className="rounded bg-white/5 px-3 py-2">Framer Motion</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Approach</h3>
            <p className="mt-2 text-sm text-zinc-300/90">
              I value thoughtful architecture, consistent design systems, and smooth interactions. My
              process is collaborative and feedback-driven from idea to launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
