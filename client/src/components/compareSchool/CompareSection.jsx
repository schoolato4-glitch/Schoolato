import { useState } from "react";

export default function CompareSection({
  title,
  data,
  isTag,
  isRating,
  isBadge
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6">
      <div
        onClick={() => setOpen(!open)}
        className="bg-red-500 text-white px-6 py-4 rounded-t-xl flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-semibold">{title}</h3>
        <span>{open ? "⌄" : "›"}</span>
      </div>

      {open && (
        <div className="grid grid-cols-3 border rounded-b-xl overflow-hidden bg-white text-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 border-r last:border-r-0 flex justify-center items-center flex-wrap gap-2"
            >

              {/* Facilities Tags */}
              {isTag && Array.isArray(item) && (
                item.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border rounded-full text-sm bg-gray-100"
                  >
                    {tag}
                  </span>
                ))
              )}

              {/* Rating */}
              {isRating && (
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-red-500">★</span>
                  <span>{item.rating}</span>
                  <span className="text-gray-400">
                    ({item.reviews})
                  </span>
                </div>
              )}

              {/* Admission Badge */}
              {isBadge && (
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  {item}
                </span>
              )}

              {/* Normal Text */}
              {!isTag && !isRating && !isBadge && (
                <span>{item}</span>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
