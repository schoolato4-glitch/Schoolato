import { useState } from "react";
import FilterSidebar from "../components/exploreSchool/FilterSidebar";
import SchoolGrid from "../components/exploreSchool/SchoolGrid";

export default function ExploreSchool() {
  const [filters, setFilters] = useState({}); // ✅ ADD THIS

  return (
    <div className="bg-gray-50 px-6 py-6">
      <div className="mb-6">
        <p className="text-xs text-gray-500">Home / Explore Schools</p>
        <h1 className="text-2xl font-semibold text-gray-900">
          Explore Schools
        </h1>
        <p className="text-sm text-gray-600">
          Browse, filter, and compare schools to find the best fit for your child.
        </p>
      </div>

      <div className="flex gap-6">
        {/* ✅ CONNECT THEM */}
        <FilterSidebar setFilters={setFilters} />
        <SchoolGrid filters={filters} />
      </div>
    </div>
  );
}