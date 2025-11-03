import { Ticket, Film, Star, Calendar } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { label: "Top Casts", href: "#top-cast" },
    { label: "Box Office", href: "#box-office" },
    { label: "Production Info", href: "#production" },
    { label: "IMAX & 3D", href: "#imax" },
    { label: "Showtimes", href: "#showtimes" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <Film className="h-6 w-6 text-red-500" />
            <span className="font-semibold tracking-wide">CineVerse</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#tickets"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700 transition-colors"
            >
              <Ticket className="h-4 w-4" /> Book Now
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-white/10">
        <nav className="flex items-center justify-between gap-4 overflow-x-auto p-3 text-xs text-white/80">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href="#ratings" className="flex items-center gap-1 text-yellow-400">
            <Star className="h-3 w-3" /> 4.9
          </a>
          <a href="#showtimes" className="flex items-center gap-1 text-white/80">
            <Calendar className="h-3 w-3" /> Today
          </a>
        </nav>
      </div>
    </header>
  );
}
