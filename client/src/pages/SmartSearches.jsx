import { useState } from "react";
import StepHeader from "../components/smartSearch/StepHeader";
import StepNavigation from "../components/smartSearch/StepNavigation";
import Step1SchoolType from "../components/smartSearch/steps/Step1SchoolType";
import Step2Location from "../components/smartSearch/steps/Step2Location";
import Step3Class from "../components/smartSearch/steps/Step3Class";
import Step4Budget from "../components/smartSearch/steps/Step4Budget";
import Step5Board from "../components/smartSearch/steps/Step5Board";
import Step6Review from "../components/smartSearch/steps/Step6Review";
import Step7Details from "../components/smartSearch/steps/Step7Details";

export default function SmartSearches() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    type: "",
    location: "",
    class: "",
    fees: "",
    board: "",
  });

  const renderStep = () => {
  switch (step) {
    case 1:
      return <Step1SchoolType formData={formData} setFormData={setFormData} />;

    case 2:
      return <Step2Location formData={formData} setFormData={setFormData} />;

    case 3:
      return <Step3Class formData={formData} setFormData={setFormData} />;

    case 4:
      return <Step4Budget formData={formData} setFormData={setFormData} />;

    case 5:
      return <Step5Board formData={formData} setFormData={setFormData} />;

    case 6:
      return <Step6Review formData={formData} />;

    case 7:
      return <Step7Details />;

    default:
      return null;
  }
};

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-10 flex flex-col justify-between">
      <StepHeader />

      <div className="mt-16 text-center">{renderStep()}</div>

      <StepNavigation step={step} setStep={setStep} />
    </div>
  );
}
