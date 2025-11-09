import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FF6500]"></span>
              Available for freelance projects
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Building immersive, modern websites that stand out
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              I craft interactive experiences with a strong focus on performance, accessibility, and design. Let's create something extraordinary together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-[#FF6500] text-black font-semibold px-5 py-2.5 hover:opacity-90 transition">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-white/10 bg-black/40 text-white font-semibold px-5 py-2.5 hover:bg-white/10 transition">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative h-[380px] lg:h-[520px]">
            {/* Gradient overlay that doesn't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B192C]/20 to-[#000000]/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
