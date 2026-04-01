import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function FilterSidebar({ setFilters }) {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [isOpen, setIsOpen] = useState(false); // 👈 for mobile toggle

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await API.get("/api/filters");
        setStates(res.data.data || []);
      } catch (error) {
        console.error(error);
        setStates([]);
      }
    };

    fetchStates();
  }, []);

  const handleApply = () => {
    const newFilters = {};
    if (selectedState) newFilters.state = selectedState;

    setFilters(newFilters);
    setIsOpen(false); // 👈 close on mobile after apply
  };

  return (
    <>
      {/* 📱 MOBILE FILTER BUTTON */}
      <div className="md:hidden mb-4 px-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border border-gray-300 rounded-lg py-2.5 text-sm shadow-sm"
        >
          🔍 Filters
        </button>
      </div>

      {/* 🧩 SIDEBAR / MOBILE PANEL */}
      <aside
        className={`
          ${isOpen ? "block" : "hidden"} 
          md:block
          w-full md:w-72 
          bg-white shadow-lg rounded-2xl p-4 sm:p-5 
          border border-gray-100
        `}
      >
        {/* TITLE */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Filters
          </h3>

          {/* ❌ Close button (mobile only) */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-500 text-lg"
          >
            ✕
          </button>
        </div>

        {/* STATE FILTER */}
        <div className="mb-5">
          <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2">
            Select State
          </label>

          <select
            className="w-full rounded-lg border border-gray-300 p-2.5 text-sm 
            focus:outline-none focus:ring-2 focus:ring-red-400 
            focus:border-red-400 transition"
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

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3">

          <button
            onClick={handleApply}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg 
            text-sm font-medium transition shadow-sm"
          >
            Apply
          </button>

          <button
            onClick={() => {
              setSelectedState("");
              setFilters({});
            }}
            className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 
            py-2.5 rounded-lg text-sm transition"
          >
            Clear
          </button>

        </div>
      </aside>
    </>
  );
}