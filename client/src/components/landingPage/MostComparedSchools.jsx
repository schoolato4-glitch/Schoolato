import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function MostComparedSchools() {
  const comparisons = [1, 2, 3]; // mock slides

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-red-600/85" />

      <div className="relative z-10 px-4 py-20">
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-semibold text-white md:text-4xl">
          Most Compared Schools
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-3xl text-center text-base text-red-100 md:text-lg">
          See which schools parents compare the most to make confident
          decisions.
        </p>

        {/* Slider Container */}
        <div className="relative mx-auto max-w-7xl rounded-3xl bg-white/20 p-6 backdrop-blur-md md:p-10">
          {/* Navigation */}
          <div className="absolute right-6 top-6 z-20 flex gap-3">
            <button className="rounded-lg bg-white p-2 shadow">
              <ChevronLeft />
            </button>
            <button className="rounded-lg bg-white p-2 shadow">
              <ChevronRight />
            </button>
          </div>

          {/* Cards */}
          <div className="flex gap-6 overflow-hidden">
            {comparisons.map((_, index) => (
              <div
                key={index}
                className="flex min-w-[680px] overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                {/* Left School */}
                <div className="flex w-1/2 flex-col items-center justify-center border-r p-6 text-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/7/7e/CISCE_logo.png"
                    alt="School"
                    className="mb-4 h-20 w-20 object-contain"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    School Name
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin size={14} />
                    Sector 15, Jaipur
                  </div>
                </div>

                {/* VS */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-lg font-semibold text-white">
                    V/S
                  </span>
                  <div className="h-full w-px bg-gray-300" />
                </div>

                {/* Right School */}
                <div className="flex w-1/2 flex-col items-center justify-center p-6 text-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/6/67/RSBSE_Logo.png"
                    alt="School"
                    className="mb-4 h-20 w-20 object-contain"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    School Name
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin size={14} />
                    Sector 15, Jaipur
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
