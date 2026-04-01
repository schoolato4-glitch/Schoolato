import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const handleClick = (e, path) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    window.location.href = path;
  };

  return (
    <footer className="bg-white border-t text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="h-10 w-28 bg-red-600 rounded-md flex items-center justify-center font-bold text-white text-lg mb-4">
            <a href="/">Schoolato</a>
          </div>
            <p className="text-sm mb-4">
              Your trusted partner in finding the perfect school for your
              child’s bright future.
            </p>
            <div className="flex gap-3 text-blue-600 mt-auto">
              <FaFacebookF className="w-5 h-5" />
              <FaTwitter className="w-5 h-5" />
              <FaInstagram className="w-5 h-5" />
              <FaLinkedinIn className="w-5 h-5" />
              <FaYoutube className="w-5 h-5" />
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection
            title="Quick Links"
            links={[
              { label: "Search Schools", path: "/explore-schools" },
              { label: "Blogs", path: "/blogs" },
            ]}
            handleClick={handleClick}
          />

          {/* About Us */}
          <FooterSection
            title="About Us"
            links={[
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms of Use", path: "/terms-and-conditions" },
            ]}
            handleClick={handleClick}
          />

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope /> contact@company.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> (414) 687 - 5892
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  794 Mcallister St <br />
                  San Francisco, 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Schools Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 text-sm">
          <FooterList
            title="Boarding Schools in Popular Cities"
            items={[
              "Boarding Schools in Bangalore",
              "Boarding Schools in Pune",
              "Boarding Schools in Jaipur",
              "Boarding Schools in Delhi",
              "Boarding Schools in Goa",
              "Boarding Schools in Mumbai",
              "Boarding Schools in Kolkata",
              "Boarding Schools in Patna",
              "Boarding Schools in Chennai",
            ]}
            linkTo="/explore-schools"
            handleClick={handleClick}
          />

          <FooterList
            title="Day Schools in Popular Cities"
            items={[
              "Schools in Bangalore",
              "Schools in Pune",
              "Schools in Jaipur",
              "Schools in Delhi",
              "Schools in Goa",
              "Schools in Mumbai",
              "Schools in Kolkata",
              "Schools in Patna",
              "Schools in Chennai",
            ]}
            linkTo="/explore-schools"
            handleClick={handleClick}
          />

          <FooterList
            title="CBSE Schools in Popular Cities"
            items={[
              "CBSE Schools in Bangalore",
              "CBSE Schools in Pune",
              "CBSE Schools in Jaipur",
              "CBSE Schools in Delhi",
              "CBSE Schools in Goa",
              "CBSE Schools in Mumbai",
              "CBSE Schools in Kolkata",
              "CBSE Schools in Patna",
              "CBSE Schools in Chennai",
            ]}
            linkTo="/explore-schools"
            handleClick={handleClick}
          />

          <FooterList
            title="International Schools in Popular Cities"
            items={[
              "International Schools in Bangalore",
              "International Schools in Pune",
              "International Schools in Jaipur",
              "International Schools in Delhi",
              "International Schools in Goa",
              "International Schools in Mumbai",
              "International Schools in Kolkata",
              "International Schools in Chennai",
            ]}
            linkTo="/explore-schools"
            handleClick={handleClick}
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>Copyright © 2022 Schoolato</p>
          <p className="mt-2 md:mt-0">
            All Rights Reserved |{" "}
            <a
              href="/terms-and-conditions"
              onClick={(e) => handleClick(e, "/terms-and-conditions")}
              className="text-blue-600 hover:underline"
            >
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a
              href="/privacy-policy"
              onClick={(e) => handleClick(e, "/privacy-policy")}
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Reusable Section Component for Quick Links / About Us
function FooterSection({ title, links, handleClick }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.path}
              onClick={(e) => handleClick(e, item.path)}
              className="text-blue-600 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Reusable Footer List Component for Schools
function FooterList({ title, items, linkTo, handleClick }) {
  return (
    <div>
      <h4 className="font-semibold mb-3 border-b pb-1 inline-block">{title}</h4>
      <ul className="space-y-2 mt-3">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={linkTo}
              onClick={(e) => handleClick(e, linkTo)}
              className="text-blue-600 hover:underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}