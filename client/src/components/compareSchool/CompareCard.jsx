export default function CompareCard({ school }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
      <button className="absolute top-3 right-3 bg-white border rounded-full w-8 h-8 flex items-center justify-center text-red-500">
        ✕
      </button>

      <img
        src={school.image}
        alt={school.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="font-semibold text-lg">{school.name}</h3>
        <p className="text-gray-500 text-sm mb-4">
          📍 {school.location}
        </p>

        <button className="bg-red-600 text-white w-full py-2 rounded-lg font-medium">
          View Details
        </button>
      </div>
    </div>
  );
}
