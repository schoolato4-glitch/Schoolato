import { ArrowRight, Search, ArrowLeftRight, GraduationCap, List } from "lucide-react";

export default function MakeAdmissionEasier() {
  const steps = [
    {
      title: "Search",
      desc: "Discover Top Schools based on your preferences. From Academics to Extra-curricular activities, discover the best school for your child",
      btn: "Search Now",
      icon: <Search size={28} className="text-red-600" />,
      active: false,
    },
    {
      title: "Compare",
      desc: "Compare different Schools Side-by-side to choose the most preferred for your child. View rankings, fees and more to make an informed decision",
      btn: "Compare Now",
      icon: <ArrowLeftRight size={28} className="text-red-600" />,
      active: true,
    },
    {
      title: "Enroll",
      desc: "Seamlessly enroll your child in the School of your preferred choice. Submit relevant documents and track your application",
      btn: "Enroll Now",
      icon: <GraduationCap size={28} className="text-red-600" />,
      active: false,
    },
    // {
    //   title: "Track your Application",
    //   desc: "Stay updated on the status of your child’s School application. Get instant notifications for interactions, acceptance and more",
    //   btn: "Track Now",
    //   icon: <List size={28} className="text-red-600" />,
    //   active: false,
    // },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Heading */}
        <h2 className="mb-3 text-3xl font-semibold text-gray-900 md:text-4xl">
          Make Your Admission Easier
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-16 max-w-3xl text-base text-gray-600 md:text-lg">
          Get all the tools and guidance you need for a smooth school admission
          journey.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`rounded-2xl border-2 p-8 text-center transition ${
                step.active ? "border-red-600" : "border-gray-300"
              }`}
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                {step.desc}
              </p>

              {/* Button */}
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-red-600 px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
              >
                {step.btn}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}