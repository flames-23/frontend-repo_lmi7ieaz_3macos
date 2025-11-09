import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#000000]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0B192C] to-[#1E3E62]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-2 text-white/70 max-w-xl">
              I’m open to freelance and collaboration. Reach out and I’ll get back to you within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF6500] text-black font-semibold px-5 py-2.5 hover:opacity-90 transition"
              >
                <Mail className="h-5 w-5" /> Email Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 text-white font-semibold px-5 py-2.5 hover:bg-white/10 transition"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 text-white font-semibold px-5 py-2.5 hover:bg-white/10 transition"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>

          <form className="bg-black/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/80">Name</label>
              <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6500]" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6500]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6500]" placeholder="Tell me about your project" />
            </div>
            <button type="button" className="w-full rounded-lg bg-[#FF6500] text-black font-semibold px-4 py-2.5 hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
        <p className="mt-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
