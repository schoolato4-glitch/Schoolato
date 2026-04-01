import React from "react";

const stats = [
  {
    title: "1 Million",
    subtitle: "Parents Served",
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "12 K",
    subtitle: "Verified school",
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3l9 7-1.5 1.2L18 9.9V20H6V9.9L4.5 11.2 3 10l9-7z" />
      </svg>
    ),
  },
  {
    title: "500 K",
    subtitle: "Monthly Visits",
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16v12H4zM2 20h20v-2H2z" />
      </svg>
    ),
  },
  {
    title: "24/7",
    subtitle: "Support",
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1a10 10 0 00-10 10v4a3 3 0 003 3h1v-8H5a7 7 0 0114 0h-1v8h1a3 3 0 003-3v-4A10 10 0 0012 1z" />
      </svg>
    ),
  },
];

export default function WhyParentsChooseUs() {
  return (
    <section className="bg-white py-20">
      {/* WHY PARENTS CHOSE US */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Why Parents Chose Us
        </h2>
        <p className="text-gray-500 mt-3">
          We make school discovery, comparison, and admissions easier than ever before.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl py-8 flex flex-col items-center shadow-sm"
            >
              <div className="w-14 h-14 rounded-full border flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STORIES FROM HAPPY PARENTS */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="border rounded-[40px] py-14 px-6">
          <h3 className="text-3xl font-semibold text-center text-gray-900">
            Stories From Happy Parents
          </h3>
          <p className="text-center text-gray-500 mt-3">
            See how we’ve made their school admission journey smoother and stress-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                  alt="Happy Parents"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
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
