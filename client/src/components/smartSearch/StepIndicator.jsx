export default function StepIndicator({ step, number, icon: Icon }) {
  const active = step === number;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full ${
          active ? "bg-red-600 text-white" : "bg-red-200 text-black"
        }`}
      >
        <Icon size={22} />
      </div>
      {active && (
        <span className="text-xs mt-1 font-medium">
          Step {number}/6
        </span>
      )}
    </div>
  );
}
