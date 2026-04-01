import { useState } from "react";
import FilterSidebar from "../components/exploreSchool/FilterSidebar";
import SchoolGrid from "../components/exploreSchool/SchoolGrid";

export default function ExploreSchool() {
  const [filters, setFilters] = useState({});

  return (
    <div className="bg-gray-50 px-3 sm:px-5 md:px-6 py-4 sm:py-6">

      {/* HEADER */}
      <div className="mb-5 sm:mb-6">
        <p className="text-[10px] sm:text-xs text-gray-500">
          Home / Explore Schools
        </p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-16">
          Explore Schools
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
          Browse, filter, and compare schools to find the best fit for your child.
        </p>
      </div>

      {/* LAYOUT */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">

        {/* SIDEBAR */}
        <div className="w-full md:w-72 lg:w-80">
          <FilterSidebar setFilters={setFilters} />
        </div>

        {/* GRID */}
        <div className="flex-1">
          <SchoolGrid filters={filters} />
        </div>

      </div>
    </div>
  );
}