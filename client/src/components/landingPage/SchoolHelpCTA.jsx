import { ArrowRight } from "lucide-react";

export default function SchoolHelpCTA() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <h2 className="mb-4 max-w-lg text-3xl font-semibold text-gray-900 md:text-4xl">
              Need Help To Find Which School Is Best For You
            </h2>

            <p className="mb-8 max-w-md text-base text-gray-600 md:text-lg">
              Get personalized guidance from our experienced admission
              counsellors.
            </p>

            <button className="inline-flex items-center gap-3 rounded-lg border-2 border-red-600 px-6 py-3 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white">
              Get Suggestions
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="School counselling"
                className="h-full w-full object-cover md:max-w-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
