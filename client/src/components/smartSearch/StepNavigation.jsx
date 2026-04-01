import {
  Home,
  MapPin,
  BookOpen,
  Shield,
  List,
  FileText,
  ArrowLeft,
  ArrowRight,
  FileCheck
} from "lucide-react";
import StepIndicator from "./StepIndicator";

export default function StepNavigation({ step, setStep }) {
  return (
    <div className="flex justify-between items-center mt-16">
      <button
        disabled={step === 1}
        onClick={() => setStep(step - 1)}
        className="border px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-40"
      >
        <ArrowLeft size={18} />
        Previous
      </button>

      <div className="flex gap-6">
        <StepIndicator step={step} number={1} icon={Home} />
        <StepIndicator step={step} number={2} icon={MapPin} />
        <StepIndicator step={step} number={3} icon={BookOpen} />
        <StepIndicator step={step} number={4} icon={Shield} />
        <StepIndicator step={step} number={5} icon={List} />
        <StepIndicator step={step} number={6} icon={FileText} />
        <StepIndicator step={step} number={7} icon={FileCheck} />
      </div>

      {step < 7 ? (
  <button
    onClick={() => setStep(step + 1)}
    className="bg-red-600 text-white px-8 py-3 rounded-lg flex items-center gap-2"
  >
    Next
    <ArrowRight size={18} />
  </button>
) : (
  <button
    className="bg-red-600 text-white px-8 py-3 rounded-lg flex items-center gap-2"
  >
    Submit
    <ArrowRight size={18} />
  </button>
)}
    </div>
  );
}
