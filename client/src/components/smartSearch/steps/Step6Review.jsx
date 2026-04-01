import { Edit } from "lucide-react";

export default function Step6Review({ formData }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">
        Please review your preferences
      </h2>
      <p className="text-gray-600 mb-8">
        You can edit your choices if needed
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            className="bg-red-100 px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <span className="text-red-600 font-medium">{value}</span>
            <Edit size={16} className="text-red-600" />
          </div>
        ))}
      </div>
    </>
  );
}
