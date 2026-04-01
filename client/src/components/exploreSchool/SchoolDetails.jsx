import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

export default function SchoolsDetails() {
  const { id } = useParams();
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const res = await API.get(`/api/schools/${id}`);
        setSchool(res.data);
      } catch (err) {
        console.error(err);
        setSchool(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSchool();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 md:p-10 text-center text-gray-500">
        Loading school details...
      </div>
    );
  }

  if (!school) {
    return (
      <div className="p-6 md:p-10 text-center text-red-500">
        School not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-6 md:py-8 px-3 sm:px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={
              school.image ||
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
            }
            alt="school"
            className="w-full h-52 sm:h-64 md:h-72 mt-8 object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white max-w-[90%]">
            <h1 className="text-lg sm:text-xl md:text-3xl font-bold leading-tight">
              {school.name}
            </h1>

            <p className="text-xs sm:text-sm mt-1">
              📍 {school.district}, {school.state}
            </p>

            <div className="flex flex-wrap gap-2 mt-2 text-[10px] sm:text-xs">
              <span className="bg-blue-500 px-2 py-1 rounded">
                {school.academic_details?.["Board for Class 10th"]}
              </span>
              <span className="bg-green-500 px-2 py-1 rounded">
                Co-ed
              </span>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-5">

            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <h2 className="text-base sm:text-lg font-semibold mb-2">
                About School
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {school.description}
              </p>
            </div>

            {/* Academic */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <h2 className="text-base sm:text-lg font-semibold mb-4">
                Academic Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(school.academic_details || {}).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b pb-2 text-xs sm:text-sm"
                    >
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-800 text-right">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <h2 className="text-base sm:text-lg font-semibold mb-4">
                Infrastructure
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(school.infrastructure || {}).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b pb-2 text-xs sm:text-sm"
                    >
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-800 text-right">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">

            {/* Address */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                📍 Address
              </h3>

              <p className="text-xs sm:text-sm text-gray-600">
                {school.address?.street}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {school.address?.village_town}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {school.address?.district}, {school.address?.state}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                PIN: {school.address?.pinCode}
              </p>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                Quick Info
              </h3>

              <div className="space-y-1 text-xs sm:text-sm">
                <p>🏫 {school.academic_details?.["School Type"]}</p>
                <p>📚 {school.academic_details?.Classes}</p>
                <p>🎓 {school.academic_details?.["Board for Class 10th"]}</p>
                <p>
                  👨‍🏫 {school.academic_details?.["Total Teachers"]} Teachers
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-4 sm:p-5">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                School Highlights
              </h3>

              <p className="text-xs sm:text-sm">
                📘 Library: {school.infrastructure?.["Books in Library"]}
              </p>
              <p className="text-xs sm:text-sm">
                💻 Computers: {school.infrastructure?.Computers}
              </p>
              <p className="text-xs sm:text-sm">
                ⚡ Electricity: {school.infrastructure?.Electricity}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}