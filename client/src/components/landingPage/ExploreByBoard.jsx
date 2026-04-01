import icse from "../../assets/icse.webp";
import igcse from "../../assets/igcse.webp";
import cbse from "../../assets/cbse.webp";
import rsbos from "../../assets/rsbos.webp";

export default function ExploreByBoard() {

  const boards = [
    {
      name: "CBSE",
      img: cbse,
    },
    {
      name: "ICSE",
      img: icse,
    },
    {
      name: "IGCSE",
      img: igcse,
    },
    {
      name: "RSBOS",
      img: rsbos,
    },
    // {
    //   name: "ISC",
    //   img: "https://upload.wikimedia.org/wikipedia/en/7/7e/CISCE_logo.png",
    // },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
          Explore School By Board In Jaipur
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-3xl text-base text-gray-600 md:text-lg">
          Find Jaipur schools based on the board that best fits your child’s
          learning needs.
        </p>

        {/* Boards */}
        <div className="flex flex-wrap justify-center gap-12">
          {boards.map((board) => (
            <div key={board.name} className="flex flex-col items-center">
              {/* Circle */}
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-lg">
                <img
                  src={board.img}
                  alt={board.name}
                  className="h-24 w-24 object-contain"
                />
              </div>

              {/* Label */}
              <span className="mt-4 text-lg font-medium text-gray-900">
                {board.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
