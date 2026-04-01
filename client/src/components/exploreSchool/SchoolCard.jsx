export default function SchoolCard({ school }) {
  return (
    <div className="h-full flex flex-col rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-lg transition duration-300 overflow-hidden">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={
            school.image ||
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
          }
          alt="school"
          className="h-40 sm:h-44 md:h-48 w-full object-cover"
          loading="lazy"
        />

        <span className="absolute right-2 top-2 sm:right-3 sm:top-3 rounded-full bg-blue-500 px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white shadow">
          Verified
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-3 sm:p-4">

        {/* TOP CONTENT */}
        <div className="flex-1">
          
          {/* TAGS */}
          <div className="mb-2 flex flex-wrap gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
            <span className="rounded-full border px-2 py-0.5">
              {school.board || "N/A"}
            </span>
            <span className="rounded-full border px-2 py-0.5">
              Co-ed
            </span>
          </div>

          {/* NAME */}
          <h4 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 leading-tight min-h-[2.5rem]">
            {school.name}
          </h4>

          {/* LOCATION */}
          <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-1">
            📍 {school.district}, {school.state}
          </p>

          {/* FEES + RATING */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm sm:text-base font-bold text-red-600">
              ₹ {school.fees || "N/A"}
            </span>

            <span className="rounded-md bg-green-500 px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white">
              {school.rating || "4.0"} ★
            </span>
          </div>

        </div>

        {/* BUTTON (ALWAYS AT BOTTOM) */}
        <div className="mt-4">
          <a
            href={`/school/${school._id}`}
            className="block w-full rounded-lg bg-red-500 py-2 sm:py-2.5 text-center text-xs sm:text-sm text-white hover:bg-red-600 active:scale-95 transition"
          >
            View Details
          </a>
        </div>

      </div>
    </div>
  );
}