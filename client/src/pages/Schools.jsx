import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SchoolCard from "../components/exploreSchool/SchoolCard";

export default function Schools() {
  const [schools, setSchools] = useState([]);
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/schools?search=${search || ""}`
    )
      .then((res) => res.json())
      .then((data) => setSchools(data.data || []));
  }, [search]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="mb-6 text-xl font-semibold">
        Results for "{search}"
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {schools.length > 0 ? (
          schools.map((school) => (
            <SchoolCard key={school._id} school={school} />
          ))
        ) : (
          <p>No schools found</p>
        )}
      </div>
    </div>
  );
}