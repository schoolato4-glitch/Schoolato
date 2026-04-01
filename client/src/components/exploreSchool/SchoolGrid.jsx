// import { useEffect, useState } from "react";
// import SchoolCard from "./SchoolCard";

// export default function SchoolGrid({ filters }) {
//   const [schools, setSchools] = useState([]);
//   const [sortOption, setSortOption] = useState("popular");

//   useEffect(() => {
//     let url = "http://localhost:5000/api/schools";

//     const query = new URLSearchParams();

//     if (filters?.state) query.append("state", filters.state);
//     if (filters?.district) query.append("district", filters.district);
//     if (filters?.board) query.append("board", filters.board);

//   fetch(`${url}?${query.toString()}`)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("API error: " + res.status);
//     }
//     return res.json();
//   })
//   .then((data) => {
//   console.log("API DATA:", data); // 👈 ADD THIS
//   setSchools(Array.isArray(data) ? data : data.data || []);
// })
//   .catch((err) => console.log(err));
//   }, [filters]);

//   // Sorting logic
//   const sortedSchools = [...schools].sort((a, b) => {
//     if (sortOption === "low") return (a.fees || 0) - (b.fees || 0);
//     if (sortOption === "high") return (b.fees || 0) - (a.fees || 0);
//     return 0;
//   });

//   return (
//     <section className="flex-1">
//       {/* Header */}
//       <div className="mb-4 flex items-center justify-between">
//         <p className="text-sm text-gray-600">
//           Showing {sortedSchools.length} Schools
//         </p>

//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="rounded-md border border-gray-300 p-1 text-sm"
//         >
//           <option value="popular">Most Popular</option>
//           <option value="low">Price Low to High</option>
//           <option value="high">Price High to Low</option>
//         </select>
//       </div>

//       {/* School Grid */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {sortedSchools.length > 0 ? (
//           sortedSchools.map((school) => (
//             <SchoolCard key={school._id} school={school} />
//           ))
//         ) : (
//           <p className="text-gray-500">No schools found</p>
//         )}
//       </div>

//       {/* Help Card */}
//       <div className="mt-6 rounded-xl bg-red-500 p-6 text-white">
//         <h3 className="mb-1 text-lg font-semibold">
//           Need Help with Admission to This School?
//         </h3>
//         <p className="mb-4 text-sm opacity-90">
//           Get personalized guidance from our admission experts.
//         </p>

//         <div className="flex gap-3">
//           <button className="rounded bg-white px-4 py-2 text-sm font-medium text-red-500">
//             Talk to a Counselor
//           </button>
//           <button className="rounded border border-white px-4 py-2 text-sm">
//             Call: +91 9876543210
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import SchoolCard from "./SchoolCard";

export default function SchoolGrid({ filters }) {
  const [schools, setSchools] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let url = "http://localhost:5000/api/schools";

    const query = new URLSearchParams();

    if (filters?.state) query.append("state", filters.state);
    if (filters?.district) query.append("district", filters.district);

    query.append("page", page);
    query.append("limit", 6);

    const finalUrl = `${url}?${query.toString()}`;

    fetch(finalUrl)
      .then((res) => res.json())
      .then((data) => {
        setSchools(data.data || []);
        setTotalPages(data.totalPages || 1);
      })
      .catch((err) => console.log(err));
  }, [filters, page]);

  // ✅ Reset page on filter change
  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <section className="flex-1 px-4">

      {/* 🔥 HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Schools
        </h2>

        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold">{schools.length}</span> results
        </p>
      </div>

      {/* 🧩 GRID */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {schools.length > 0 ? (
          schools.map((school) => (
            <div className="transform transition duration-300 hover:scale-105">
              <SchoolCard key={school._id} school={school} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No schools found
          </div>
        )}
      </div>

      {/* 🎯 PAGINATION */}
      <div className="mt-10 flex items-center justify-center gap-3">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded-lg border text-sm transition 
            ${page === 1 
              ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
              : "bg-white hover:bg-red-500 hover:text-white border-gray-300"}`}
        >
          ⬅ Prev
        </button>

        <span className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg">
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded-lg border text-sm transition 
            ${page === totalPages 
              ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
              : "bg-white hover:bg-red-500 hover:text-white border-gray-300"}`}
        >
          Next ➡
        </button>

      </div>
    </section>
  );
}