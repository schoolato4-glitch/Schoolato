import { useEffect, useState } from "react";

export default function FilterSidebar({ setFilters }) {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/filters")
      .then((res) => res.json())
      .then((data) => {
        setStates(data.data || []);
      })
      .catch(() => setStates([]));
  }, []);

  const handleApply = () => {
    const newFilters = {};

    if (selectedState) {
      newFilters.state = selectedState;
    }

    setFilters(newFilters);
  };

  return (
    <aside className="w-72 bg-white shadow-lg rounded-2xl p-5 border border-gray-100">

      {/* 🔥 TITLE */}
      <h3 className="text-lg font-semibold text-gray-800 mb-5">
        Filters
      </h3>

      {/* 🧩 STATE FILTER */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Select State
        </label>

        <select
          className="w-full rounded-lg border border-gray-300 p-2.5 text-sm 
          focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 
          transition"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">All States</option>

          {Array.isArray(states) &&
            states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
        </select>
      </div>

      {/* 🎯 BUTTONS */}
      <div className="flex flex-col gap-3">

        <button
          onClick={handleApply}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg 
          text-sm font-medium transition shadow-sm"
        >
          Apply Filters
        </button>

        {/* 🔄 CLEAR BUTTON */}
        <button
          onClick={() => {
            setSelectedState("");
            setFilters({});
          }}
          className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 
          py-2.5 rounded-lg text-sm transition"
        >
          Clear Filters
        </button>

      </div>

    </aside>
  );
}