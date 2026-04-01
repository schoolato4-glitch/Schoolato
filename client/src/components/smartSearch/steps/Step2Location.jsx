export default function Step2Location({ formData, setFormData }) {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        Select Your Preferred Location
      </h2>
      <p className="text-gray-600 mb-6">
        Where you are looking for school in
      </p>

      <input
        type="text"
        placeholder="Enter Location"
        value={formData.location}
        onChange={(e) =>
          setFormData({ ...formData, location: e.target.value })
        }
        className="w-1/2 px-4 py-3 border rounded-lg"
      />
    </>
  );
}
