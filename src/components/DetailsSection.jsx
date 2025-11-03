import { Users, Clapperboard, Share2, ExternalLink, Film, Ticket } from "lucide-react";

const cast = [
  {
    name: "Ava Sterling",
    role: "Captain Nyx",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    bio: "Fearless pilot with a past she can't outrun.",
    link: "#",
  },
  {
    name: "Rhea Park",
    role: "Dr. Sora Lin",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    bio: "Cyberneticist decoding the rogue signal.",
    link: "#",
  },
  {
    name: "Milo Reyes",
    role: "Dex",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    bio: "Street hacker with a knack for trouble.",
    link: "#",
  },
  {
    name: "Iris Khan",
    role: "The Architect",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    bio: "The mind behind the AI labyrinth.",
    link: "#",
  },
];

export default function DetailsSection() {
  return (
    <section className="bg-gradient-to-b from-black via-black to-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        {/* Quick Nav */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          <a href="#top-cast" className="group flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
            <Users className="h-4 w-4 text-red-500" />
            <span className="text-sm">Top Cast</span>
          </a>
          <a href="#box-office" className="group flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
            <Film className="h-4 w-4 text-red-500" />
            <span className="text-sm">Box Office</span>
          </a>
          <a href="#production" className="group flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
            <Clapperboard className="h-4 w-4 text-red-500" />
            <span className="text-sm">Production</span>
          </a>
          <a href="#imax" className="group flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
            <Ticket className="h-4 w-4 text-red-500" />
            <span className="text-sm">IMAX & 3D</span>
          </a>
          <a href="#showtimes" className="group flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
            <Film className="h-4 w-4 text-red-500" />
            <span className="text-sm">Showtimes</span>
          </a>
          <a href="#tickets" className="group flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
            <Ticket className="h-4 w-4 text-red-500" />
            <span className="text-sm">Tickets</span>
          </a>
        </div>

        {/* Plot / Features */}
        <div id="production" className="grid gap-10 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight">About the Film</h2>
            <p className="mt-4 text-white/80">
              Neon Velocity plunges you into a futuristic megacity where a rogue AI rewrites
              reality itself. Follow Captain Nyx and her crew as they dive into a maze of
              holograms, neon streets, and impossible physics to restore the human signal.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              <li className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">Shot with IMAX-certified digital cameras</li>
              <li className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">Immersive 3D with spatial audio mix</li>
              <li className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">Practical effects blended with volumetric capture</li>
              <li className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">Original score by SYNTH//WAVE</li>
            </ul>
            <div id="tickets" className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-700">Book Now</a>
              <a href="#" className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15">Fandango</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15">
                <ExternalLink className="h-4 w-4" /> AMC Theatres
              </a>
            </div>
            <div className="mt-4 text-xs text-white/60">Release Date: July 25, 2025</div>
          </div>

          {/* Cast */}
          <div id="top-cast" className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-red-500" />
              <h3 className="text-lg font-semibold">Top Cast</h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {cast.map((person) => (
                <a key={person.name} href={person.link} className="group rounded-lg bg-white/5 p-3 ring-1 ring-white/10 hover:bg-white/10">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-md">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <div className="font-medium">{person.name}</div>
                    <div className="text-xs text-white/70">{person.role}</div>
                    <p className="mt-1 text-xs text-white/60 line-clamp-2">{person.bio}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* IMAX / Box Office */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div id="imax" className="rounded-xl bg-gradient-to-br from-red-600/20 to-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold">IMAX & 3D Experience</h3>
            <p className="mt-2 text-white/80">Feel every frame in towering clarity with expanded aspect ratio and thunderous spatial audio.</p>
            <ul className="mt-4 list-disc pl-5 text-sm text-white/70">
              <li>Crystal‑clear laser projection</li>
              <li>Expanded field of view for action sequences</li>
              <li>High‑fidelity 3D with minimal ghosting</li>
            </ul>
          </div>
          <div id="box-office" className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold">Box Office</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-md bg-black/40 p-3">Opening Weekend: $128M</div>
              <div className="rounded-md bg-black/40 p-3">Domestic Gross: $310M</div>
              <div className="rounded-md bg-black/40 p-3">International: $620M</div>
              <div className="rounded-md bg-black/40 p-3">Worldwide: $930M</div>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20 hover:bg-white/15">
            <Share2 className="h-4 w-4" /> Share
          </a>
          <a href="#showtimes" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            <Ticket className="h-4 w-4" /> Showtimes
          </a>
        </div>
      </div>
    </section>
  );
}
