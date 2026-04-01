export default function SchoolByGender() {
  const genders = [
    {
      title: "5+ Boys Schools",
      icon: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      title: "Girls School",
      icon: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    },
    {
      title: "Combined School",
      icon: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
          School By Gender
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-3xl text-base text-gray-600 md:text-lg">
          Find the right school type—boys, girls, or co-ed—based on your
          preference.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {genders.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-300 bg-white p-8 shadow-sm"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                {item.title}
              </h3>

              {/* Link */}
              <button className="text-sm font-medium text-red-600 hover:underline">
                View All School
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
