import OptionButton from "../OptionButton";

export default function Step3Class({ formData, setFormData }) {
  const classes = [
    "Toddler",
    "Pre Nursery",
    "Nursery",
    "LKG",
    "UKG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">
        Select Your Preferred Class
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {classes.map((cls) => (
          <OptionButton
            key={cls}
            field="class"
            value={cls}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>
    </>
  );
}
