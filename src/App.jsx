import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DetailsSection from "./components/DetailsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <DetailsSection />

        {/* Showtimes Section */}
        <section id="showtimes" className="border-t border-white/10 bg-zinc-950 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Showtimes Near You</h2>
                <p className="mt-1 text-white/70">Select a format to continue booking.</p>
              </div>
              <a
                href="#tickets"
                className="hidden md:inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Book Now
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: "Standard 2D", times: ["1:15 PM", "4:00 PM", "7:30 PM"] },
                { title: "IMAX 2D", times: ["12:30 PM", "3:45 PM", "9:15 PM"] },
                { title: "IMAX 3D", times: ["2:00 PM", "6:15 PM", "10:00 PM"] },
              ].map((format) => (
                <div key={format.title} className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-lg font-medium">{format.title}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {format.times.map((t) => (
                      <button
                        key={t}
                        className="rounded-md bg-black/40 px-3 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-black/60"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
