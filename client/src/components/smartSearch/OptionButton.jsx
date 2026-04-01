export default function OptionButton({ value, field, formData, setFormData }) {
  const isActive = formData[field] === value;

  return (
    <button
      onClick={() => setFormData({ ...formData, [field]: value })}
      className={`px-6 py-3 border rounded-lg font-medium transition ${
        isActive
          ? "border-red-600 text-red-600 bg-red-50"
          : "border-gray-300 hover:border-red-400"
      }`}
    >
      {value}
    </button>
  );
}
