const projects = [
  {
    title: 'Immersive 3D Landing',
    description: 'A high-performance landing page with interactive 3D and smooth motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'E-commerce Experience',
    description: 'Conversion-focused storefront with modern UI patterns and analytics.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Data-rich admin UI with charts, filters, and real-time updates.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0B192C]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C] via-[#1E3E62] to-[#000000]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Hand-picked projects that highlight a blend of design, engineering, and delightful details.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-[#FF6500] text-black font-semibold px-5 py-2.5 hover:opacity-90 transition"
          >
            Start a Project
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 hover:bg-black/50 transition">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FF6500]/10 to-transparent" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-[#1E3E62] text-white/90 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
