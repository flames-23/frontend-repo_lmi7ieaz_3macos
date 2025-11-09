import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-bold tracking-tight text-xl">
              <span className="text-[#FF6500]">{`{`}</span>
              <span className="ml-1">MyPortfolio</span>
              <span className="text-[#FF6500] ml-1">{`}`}</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#FF6500] text-black font-semibold px-4 py-2 hover:opacity-90 transition"
              >
                Hire Me
              </a>
            </nav>
            <button
              className="md:hidden text-white/90"
              aria-label="Open Menu"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-2 rounded-lg hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#FF6500] text-black font-semibold px-4 py-2 hover:opacity-90 transition"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
