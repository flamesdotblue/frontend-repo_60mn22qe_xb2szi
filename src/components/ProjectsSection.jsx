import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI',
    description:
      'A sleek component library designed for velocity and aesthetics with a strong focus on accessibility.',
    link: 'https://example.com',
    tags: ['React', 'Tailwind', 'Accessibility'],
  },
  {
    title: 'Orbit Analytics',
    description:
      'A real-time dashboard for product metrics with custom charts, alerts, and team collaboration.',
    link: 'https://example.com',
    tags: ['TypeScript', 'Vite', 'WebSockets'],
  },
  {
    title: 'Cosmic Studio',
    description:
      'A portfolio builder enabling rapid content editing, live previews, and media optimization.',
    link: 'https://example.com',
    tags: ['Next.js', 'CMS', 'Performance'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-2 text-zinc-300/90">Selected work that highlights craft and impact.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-purple-700/40 via-purple-500/20 to-transparent" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-300/90">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200"
              >
                Visit <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
