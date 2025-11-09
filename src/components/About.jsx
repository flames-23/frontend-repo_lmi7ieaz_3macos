export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#1E3E62]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3E62] via-[#0B192C] to-[#000000]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-3 text-white/80 max-w-3xl">
              I’m a creative developer who blends design, animation, and engineering to deliver premium web experiences.
              I focus on performance, accessibility, and maintainable code.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-3xl font-extrabold text-white">5+</p>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-3xl font-extrabold text-white">30+</p>
                <p className="text-sm text-white/70">Projects Delivered</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-3xl font-extrabold text-white">10x</p>
                <p className="text-sm text-white/70">Attention to Detail</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-white font-semibold">Core Stack</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/80">
              <li className="rounded-lg bg-[#0B192C] px-3 py-2 border border-white/10">React</li>
              <li className="rounded-lg bg-[#0B192C] px-3 py-2 border border-white/10">TypeScript</li>
              <li className="rounded-lg bg-[#0B192C] px-3 py-2 border border-white/10">Tailwind</li>
              <li className="rounded-lg bg-[#0B192C] px-3 py-2 border border-white/10">Framer Motion</li>
              <li className="rounded-lg bg-[#0B192C] px-3 py-2 border border-white/10">FastAPI</li>
              <li className="rounded-lg bg-[#0B192C] px-3 py-2 border border-white/10">MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
