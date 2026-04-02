// import { Search } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!query.trim()) return;

//     navigate(`/schools?search=${query}`);
//   };
//   return (
//     <section className="relative w-full">
//       {/* Hero Background */}
//       <div
//         className="relative h-[520px] w-full bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Hero Content */}
//         <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
//           <h1 className="mb-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
//             Find the best schools in your city
//           </h1>

//           <p className="mb-8 max-w-3xl text-sm text-gray-200 md:text-lg">
//             Explore top-rated institutions, read reviews, and apply for
//             admissions seamlessly.
//           </p>

//           {/* Search Bar */}
//           <div className="flex w-full max-w-3xl overflow-hidden rounded-full bg-white shadow-lg">
//             <input
//               type="text"
//               placeholder="Search Schools"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//               className="flex-1 px-6 py-4 text-gray-700 outline-none"
//             />
//             <button
//               onClick={handleSearch}
//               className="flex items-center justify-center px-6 text-red-600"
//             >
//               <Search size={22} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Budget Section */}
//       {/* <div className="relative z-20 -mt-16 px-4">
//         <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl md:p-8">
//           <h2 className="mb-6 text-center text-lg font-semibold text-gray-800 md:text-xl">
//             School by Monthly Budget in Jaipur
//           </h2>

//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-white">
//               Under ₹3k
//             </button>
//             <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:border-red-500 hover:text-red-600">
//               ₹3k - ₹6k
//             </button>
//             <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:border-red-500 hover:text-red-600">
//               ₹6k - ₹10k
//             </button>
//             <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:border-red-500 hover:text-red-600">
//               ₹10k - ₹15k
//             </button>
//             <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:border-red-500 hover:text-red-600">
//               Above ₹15k
//             </button>
//           </div>
//         </div>
//       </div> */}

//       {/* Floating Ask To AI Button */}
//       <button className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700">
//         🤖
//       </button>
//     </section>
//   );
// }


import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await API.get("/api/school/search", {
        params: {
          name: query
        }
      });

      const school = res.data;

      // Navigate to details page
      navigate(`/school/${school._id}`);

    } catch (err) {
      console.error(err);
      alert("School not found or error occurred");
    }
  };

  return (
    <section className="relative w-full">
      {/* Hero */}
      <div
        className="relative h-[520px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-3xl md:text-5xl font-semibold">
            Find the best schools in your city
          </h1>

          <p className="mb-8 text-sm md:text-lg text-gray-200">
            Explore top-rated institutions and apply easily
          </p>

          {/* Search */}
          <div className="flex w-full max-w-3xl overflow-hidden rounded-full bg-white shadow-lg">
            <input
              type="text"
              placeholder="Search Schools"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 px-6 py-4 text-gray-700 outline-none"
            />

            <button
              onClick={handleSearch}
              className="flex items-center justify-center px-6 text-red-600"
            >
              <Search size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}