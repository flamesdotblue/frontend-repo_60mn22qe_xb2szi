import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailto = `mailto:you@example.com?subject=${encodeURIComponent(
    'Portfolio inquiry from ' + name
  )}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;

  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s connect</h2>
          <p className="mt-2 text-zinc-300/90">Have a project or idea? I’d love to hear about it.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm text-zinc-300">
                Your name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-zinc-500 outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-zinc-500 outline-none focus:border-purple-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me a bit about your goals..."
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-zinc-500 outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-zinc-400">I typically reply within 1–2 business days.</p>
            <a
              href={mailto}
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Mail className="h-4 w-4" /> Send
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
