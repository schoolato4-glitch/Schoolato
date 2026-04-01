const AboutUs = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Image Card */}
          <div className="relative z-10 w-full lg:w-1/2">
            <div className="rounded-[32px] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg cursor-pointer">
                <svg
                  className="w-7 h-7 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Red Content Box */}
          <div className="relative lg:-ml-24 mt-10 lg:mt-0 w-full lg:w-[60%] bg-red-600 text-white rounded-[48px] p-10 lg:p-14 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 md:ml-16">
              About Us
            </h2>

            <p className="text-base lg:text-lg leading-relaxed space-y-4 md:ml-16">
              <span className="block">
                Choosing the right school is one of the biggest decisions
                parents make—and we’re here to make it easier.
              </span>

              <span className="block">
                Our platform was created with a mission to simplify the school
                admission journey for families across India. We connect parents
                with reliable, up-to-date information about schools, including
                admission details, fees, facilities, ratings, and genuine parent
                feedback.
              </span>

              <span className="block">
                What makes us different is our commitment to transparency,
                trust, and personalised support.
              </span>

              <span className="block">
                We combine verified school data with real experiences shared by
                parents to help you understand every aspect of a school before
                applying. And when you need personal guidance, our team of
                expert counsellors is always ready to assist you throughout the
                admission process.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
