import Spline from "@splinetool/react-spline";
import { Ticket, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/50 to-black"></div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center gap-6 px-4 pt-20 md:px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20">
          <Star className="h-3 w-3 text-yellow-400" /> Rated 4.9 • Sci‑Fi Thriller
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          NEON VELOCITY
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          A renegade pilot races through a holographic metropolis to stop a
          rogue AI before it erases reality. Experience it in IMAX & 3D.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#tickets"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-colors hover:bg-red-700"
          >
            <Ticket className="h-4 w-4" /> Book Now
          </a>
          <a
            href="#showtimes"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <Play className="h-4 w-4" /> Watch Trailer
          </a>
        </div>
      </div>
    </section>
  );
}
