import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SchoolsDetails() {
  const { id } = useParams();
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/schools/${id}`
        );
        const data = await res.json();
        setSchool(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchool();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading school details...
      </div>
    );
  }

  if (!school) {
    return (
      <div className="p-10 text-center text-red-500">
        School not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* 🔷 HERO SECTION */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={
              school.image ||
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
            }
            alt="school"
            className="w-full h-72 object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">
              {school.name}
            </h1>
            <p className="text-sm mt-1">
              📍 {school.district}, {school.state}
            </p>

            <div className="flex gap-2 mt-3 text-xs">
              <span className="bg-blue-500 px-2 py-1 rounded">
                {school.academic_details?.["Board for Class 10th"]}
              </span>
              <span className="bg-green-500 px-2 py-1 rounded">
                Co-ed
              </span>
            </div>
          </div>
        </div>

        {/* 🔷 MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">

            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-lg font-semibold mb-2">
                About School
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {school.description}
              </p>
            </div>

            {/* Academic */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-lg font-semibold mb-4">
                Academic Details
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(school.academic_details || {}).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b pb-2 text-sm"
                    >
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-800">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-lg font-semibold mb-4">
                Infrastructure
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(school.infrastructure || {}).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b pb-2 text-sm"
                    >
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-800">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-5">

            {/* Apply Card */}
            {/* <div className="bg-white rounded-xl shadow-md p-5 sticky top-6">
              <h3 className="text-lg font-semibold mb-3">
                Apply Now
              </h3>

              <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition mb-3">
                Apply for Admission
              </button>

              <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 text-sm">
                Save School ❤️
              </button>
            </div> */}

            {/* Address */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold mb-3">📍 Address</h3>

              <p className="text-sm text-gray-600">
                {school.address?.street}
              </p>
              <p className="text-sm text-gray-600">
                {school.address?.village_town}
              </p>
              <p className="text-sm text-gray-600">
                {school.address?.district}, {school.address?.state}
              </p>
              <p className="text-sm text-gray-600">
                PIN: {school.address?.pinCode}
              </p>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold mb-3">Quick Info</h3>

              <div className="space-y-2 text-sm">
                <p>🏫 {school.academic_details?.["School Type"]}</p>
                <p>📚 {school.academic_details?.Classes}</p>
                <p>
                  🎓{" "}
                  {school.academic_details?.["Board for Class 10th"]}
                </p>
                <p>
                  👨‍🏫{" "}
                  {school.academic_details?.["Total Teachers"]} Teachers
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                School Highlights
              </h3>
              <p className="text-sm">
                📘 Library:{" "}
                {school.infrastructure?.["Books in Library"]}
              </p>
              <p className="text-sm">
                💻 Computers: {school.infrastructure?.Computers}
              </p>
              <p className="text-sm">
                ⚡ Electricity:{" "}
                {school.infrastructure?.Electricity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}