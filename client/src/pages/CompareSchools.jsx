import CompareSchoolsComponent from "../components/compareSchool/CompareSchools";
import MostComparedSchools from "../components/landingPage/MostComparedSchools";

export default function CompareSchools() {
  return (
    <div className="bg-gray-50 px-6 py-6">

      {/* Header Section */}
      <div className="mb-6">
        <p className="text-xs text-gray-500">
          Home / Compare Schools
        </p>

        <h1 className="text-2xl font-semibold text-gray-900">
          Compare Schools
        </h1>

        <p className="text-sm text-gray-600">
          Compare key details side by side to choose the best school for your child.
        </p>
      </div>

      <CompareSchoolsComponent/>
      <MostComparedSchools/>
    </div>
  );
}
