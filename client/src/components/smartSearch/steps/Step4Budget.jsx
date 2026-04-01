import OptionButton from "../OptionButton";

export default function Step4Budget({ formData, setFormData }) {
  const budgets = [
    "Below 1 Lakh",
    "1 Lakh to 2 Lakh",
    "2 Lakh to 3 Lakh",
    "3 Lakh to 5 Lakh",
    "5 Lakh to 8 Lakh",
    "8 Lakh to 10 Lakh",
    "Above 10 Lakhs",
    "Flexible",
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">
        Select Your Yearly Budget(₹)
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {budgets.map((fee) => (
          <OptionButton
            key={fee}
            field="fees"
            value={fee}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>
    </>
  );
}
