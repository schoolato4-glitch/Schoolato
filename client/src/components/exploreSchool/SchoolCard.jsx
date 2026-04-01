export default function SchoolCard({ school }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-lg transition duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={
            school.image ||
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
          }
          alt="school"
          className="h-40 w-full rounded-t-2xl object-cover"
        />

        <span className="absolute right-3 top-3 rounded-full bg-blue-500 px-2 py-1 text-xs text-white shadow">
          Verified
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="mb-2 flex gap-2 text-xs text-gray-500">
          <span className="rounded-full border px-2 py-0.5">
            {school.board || "N/A"}
          </span>
          <span className="rounded-full border px-2 py-0.5">
            Co-ed
          </span>
        </div>

        {/* Name */}
        <h4 className="text-base font-semibold text-gray-900 line-clamp-1">
          {school.name}
        </h4>

        {/* Location */}
        <p className="text-xs text-gray-500 mt-1">
          📍 {school.district}, {school.state}
        </p>

        {/* Fees + Rating */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-bold text-red-600">
            ₹ {school.fees || "N/A"}
          </span>

          <span className="rounded-md bg-green-500 px-2 py-1 text-xs text-white">
            {school.rating || "4.0"} ★
          </span>
        </div>

        {/* Button */}
        <div className="mt-4">
          <a
            href={`/school/${school._id}`}
            className="block w-full rounded-lg bg-red-500 py-2 text-center text-sm text-white hover:bg-red-600 transition"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}