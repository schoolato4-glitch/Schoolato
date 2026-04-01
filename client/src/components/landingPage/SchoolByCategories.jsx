export default function SchoolByCategories() {
  const categories = [
    {
      title: "Private School",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "International Schools",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Boarding School",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto max-w-7xl rounded-[48px] bg-red-600 px-6 py-16 shadow-2xl md:px-14">
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-semibold text-white md:text-4xl">
          School By Categories
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-4xl text-center text-base text-red-100 md:text-lg">
          Explore Jaipur schools grouped by curriculum, facilities, teaching
          style, and more to find the right fit for your child.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <button className="text-sm font-medium text-red-600 hover:underline">
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
