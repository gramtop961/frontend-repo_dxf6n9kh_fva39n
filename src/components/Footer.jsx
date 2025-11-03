import { Film, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <Film className="h-5 w-5 text-red-500" />
              <span className="font-semibold">CineVerse</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/70">
              Immerse yourself in the world of Neon Velocity — a futuristic, holographic journey.
            </p>
            <div className="mt-3 text-xs text-white/60">Release Date: July 25, 2025</div>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a className="hover:text-white" href="#">Contact</a></li>
              <li><a className="hover:text-white" href="#">Terms & Conditions</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Follow</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a className="inline-flex items-center gap-1 hover:text-white" href="#"><ExternalLink className="h-3 w-3"/> Instagram</a></li>
              <li><a className="inline-flex items-center gap-1 hover:text-white" href="#"><ExternalLink className="h-3 w-3"/> X/Twitter</a></li>
              <li><a className="inline-flex items-center gap-1 hover:text-white" href="#"><ExternalLink className="h-3 w-3"/> YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">© 2025 Neon Velocity. All rights reserved.</div>
      </div>
    </footer>
  );
}
