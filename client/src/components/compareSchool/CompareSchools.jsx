import { useState } from "react";
import CompareCard from "./CompareCard";
import CompareSection from "./CompareSection";

export default function CompareSchools() {
  const [hideCommon, setHideCommon] = useState(false);

  const schools = [
    {
      name: "Delhi Public School",
      location: "Mansarovar, Jaipur",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      fees: "₹15,000",
      type: "Private",
      board: "CBSE",
      classes: "Nursery to XII",
      language: "English",
      ratio: "25:1",
      campus: "approximately 5 acres",
      rating: "4.8",
      reviews: "321",
      admission: "Open",
      facilities: [
        "Smart Classes",
        "Science Lab",
        "Library",
        "Playground",
        "Computer Lab",
        "+2 more",
      ],
    },
    {
      name: "Delhi Public School",
      location: "Mansarovar, Jaipur",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      fees: "₹12,000",
      type: "Private",
      board: "CBSE",
      classes: "Nursery to VIII",
      language: "English",
      ratio: "30:1",
      campus: "approximately 2 acres",
      rating: "4.8",
      reviews: "321",
      admission: "Open",
      facilities: [
        "Smart Classes",
        "Science Lab",
        "Library",
        "Playground",
        "Sport Complex",
      ],
    },
    {
      name: "Delhi Public School",
      location: "Mansarovar, Jaipur",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      fees: "₹5000",
      type: "Government",
      board: "RBSE",
      classes: "Nursery to X",
      language: "English, Hindi",
      ratio: "32:1",
      campus: "approximately 1 acres",
      rating: "4.8",
      reviews: "321",
      admission: "Open",
      facilities: [
        "Smart Classes",
        "Science Lab",
        "Library",
        "Playground",
        "Computer Lab",
        "+2 more",
      ],
    },
  ];

  return (
    <div className="flex-1">

      {/* Top Controls */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium mb-2">ADMISSION CLASS</p>
          <select className="border px-4 py-2 rounded-lg">
            <option>Nursery</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm">Hide Common Rows</span>
          <button
            onClick={() => setHideCommon(!hideCommon)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              hideCommon ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                hideCommon ? "translate-x-6" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* School Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {schools.map((school, index) => (
          <CompareCard key={index} school={school} />
        ))}
      </div>

      {/* Comparison Sections */}
      <CompareSection title="Monthly Fees" data={schools.map(s => s.fees)} />
      <CompareSection title="School Type" data={schools.map(s => s.type)} />
      <CompareSection title="Board" data={schools.map(s => s.board)} />
      <CompareSection title="Classes Offered" data={schools.map(s => s.classes)} />
      <CompareSection title="Language Of Instruction" data={schools.map(s => s.language)} />
      <CompareSection title="Student-Teacher Ratio" data={schools.map(s => s.ratio)} />

      <CompareSection title="Campus Size" data={schools.map(s => s.campus)} />

      <CompareSection
        title="Parent Rating"
        isRating
        data={schools.map(s => ({
          rating: s.rating,
          reviews: s.reviews
        }))}
      />

      <CompareSection
        title="Admission Status"
        isBadge
        data={schools.map(s => s.admission)}
      />

      <CompareSection
        title="Facilities"
        isTag
        data={schools.map(s => s.facilities)}
      />

      {/* Enquiry Buttons */}
      <div className="grid grid-cols-3 gap-6 my -8">
        {schools.map((_, index) => (
          <button
            key={index}
            className="bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-medium"
          >
            Enquiry
          </button>
        ))}
      </div>

    </div>
  );
}
