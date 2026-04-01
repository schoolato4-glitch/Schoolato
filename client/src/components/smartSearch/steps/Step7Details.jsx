import { useState } from "react";

export default function Step7Details() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="max-w-md mx-auto text-left">

      <h2 className="text-xl font-semibold mb-6 text-center">
        Your recommendation is almost ready
      </h2>

      {/* Name */}
      <div className="mb-4">
        <label className="text-sm font-medium">Name*</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border rounded-md px-3 py-2 mt-1"
        />
      </div>

      {/* Mobile */}
      <div className="mb-4">
        <label className="text-sm font-medium">Mobile Number*</label>
        <input
          type="text"
          placeholder="Enter your mobile number"
          className="w-full border rounded-md px-3 py-2 mt-1"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-2 text-sm text-gray-600 mt-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p>
          By selecting this option, you will be signed in for a smoother
          experience
        </p>
      </div>
    </div>
  );
}