export default function StepHeader() {
  return (
    <div className="flex items-center gap-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
        alt="ACE"
        className="w-28"
      />
      <div>
        <h1 className="text-4xl font-semibold">
          Hi, I am ACE, Admission Consultant of Schooling
        </h1>
        <p className="text-gray-600 mt-2">
          I will recommend the best schools!
        </p>
      </div>
    </div>
  );
}
