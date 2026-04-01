import OptionButton from "../OptionButton";

export default function Step5Board({ formData, setFormData }) {
  const boards = [
    "CBSE",
    "ICSE",
    "State Board",
    "IB Board",
    "IGCSE",
    "No Preference",
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">
        Select Your Preferred Board
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {boards.map((board) => (
          <OptionButton
            key={board}
            field="board"
            value={board}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>
    </>
  );
}
