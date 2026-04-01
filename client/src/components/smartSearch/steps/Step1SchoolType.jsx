import OptionButton from "../OptionButton";

export default function Step1SchoolType({ formData, setFormData }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">
        What type of school are looking for?
      </h2>
      <div className="flex justify-center gap-8">
        <OptionButton
          field="type"
          value="Day School"
          formData={formData}
          setFormData={setFormData}
        />
        <OptionButton
          field="type"
          value="Boarding School"
          formData={formData}
          setFormData={setFormData}
        />
        <OptionButton
          field="type"
          value="International School"
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </>
  );
}
