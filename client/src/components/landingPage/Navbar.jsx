// import { MapPin, ChevronDown, Menu } from "lucide-react";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-red-600 text-white">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
//         {/* Left Section */}
//         <div className="flex items-center gap-4">
//           {/* Logo Placeholder */}
//           <div className="h-8 w-24 rounded bg-gray-300" />

//           {/* Location Dropdown */}
//           {/* <button className="flex items-center gap-1 rounded-md bg-red-700 px-3 py-1 text-sm font-medium hover:bg-red-800">
//             <MapPin size={16} />
//             Jaipur
//             <ChevronDown size={16} />
//           </button> */}
//         </div>

//         {/* Center Links */}
//         <div className="hidden items-center gap-8 md:flex">
//           <a href="/explore-schools" className="text-sm font-medium hover:underline">
//             Explore Schools
//           </a>
//           {/* <a href="#" className="text-sm font-medium hover:underline">
//             Compare School
//           </a>
//           <a href="#" className="text-sm font-medium hover:underline">
//             Smart Search
//           </a> */}
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* <button className="rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-red-600 hover:bg-gray-100">
//             Sign in
//           </button> */}

//           {/* Hamburger */}
//           {/* <button className="flex items-center justify-center rounded-md p-2 hover:bg-red-700">
//             <Menu size={22} />
//           </button> */}
//         </div>

//       </div>
//     </nav>
//   );
// }


import { MapPin, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLocation = () => setLocationOpen(!locationOpen);

  const locations = ["Jaipur", "Bangalore", "Delhi", "Mumbai"];

  return (
    <nav className="w-full bg-red-600 text-white shadow-md fixed top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-6">
          <div className="h-10 w-28 bg-white rounded-md flex items-center justify-center font-bold text-red-600 text-lg">
            <a href="/">Schoolato</a>
          </div>

          {/* Location Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={toggleLocation}
              className="flex items-center gap-1 rounded-md bg-red-700 px-3 py-1 text-sm font-medium hover:bg-red-800"
            >
              <MapPin size={16} />
              Jaipur
              <ChevronDown size={16} />
            </button>

            {locationOpen && (
              <ul className="absolute left-0 mt-1 w-36 rounded-md bg-white text-red-600 shadow-lg">
                {locations.map((loc, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer px-3 py-2 hover:bg-red-100"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a
            href="/explore-schools"
            className="hover:underline transition-colors duration-200"
          >
            Explore Schools
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
         Compare School
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
           Smart Search
        </a>
          <a
            href="/blogs"
            className="hover:underline transition-colors duration-200"
          >
            Blogs
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 hover:bg-red-700 rounded-md"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-red-600 text-white px-4 py-4 space-y-3">
          <a
            href="/explore-schools"
            className="block hover:underline transition-colors duration-200"
          >
            Explore Schools
          </a>

          <a
            href="/explore-schools"
            className="block hover:underline transition-colors duration-200"
          >
            Compare Schools
          </a>
          
          <a
            href="/blogs"
            className="block hover:underline transition-colors duration-200"
          >
            Smart Search
          </a>
          
          <a
            href="/blogs"
            className="block hover:underline transition-colors duration-200"
          >
            Blogs
          </a>
        </div>
      )}
    </nav>
  );
}