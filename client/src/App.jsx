import { Routes, Route } from "react-router-dom";
import Home from "./components/landingPage/Home";
import Navbar from "./components/landingPage/Navbar";
import ExploreByBoard from "./components/landingPage/ExploreByBoard";
import SchoolByCategories from "./components/landingPage/SchoolByCategories";
import SchoolByGender from "./components/landingPage/SchoolByGender";
import MostComparedSchools from "./components/landingPage/MostComparedSchools";
import SchoolHelpCTA from "./components/landingPage/SchoolHelpCTA";
import MakeAdmissionEasier from "./components/landingPage/MakeAdmissionEasier";
import AboutUs from "./components/landingPage/AboutUs";
import WhyParentsChooseUs from "./components/landingPage/WhyParentsChooseUs";
import ExploreBlogs from "./components/landingPage/ExploreBlogs";
import Footer from "./components/landingPage/Footer";

// 👉 ADD THIS IMPORT
import ExploreSchool from "./pages/ExploreSchool";
import CompareSchools from "./pages/CompareSchools";
import SmartSearches from "./pages/SmartSearches";
import SchoolDetails from "./components/exploreSchool/SchoolDetails";
import Schools from "./pages/Schools";
import AllBlogs from "./components/blogs/AllBlogs";
import BlogDetails from "./components/blogs/BlogDetails";
import TermsAndCondition from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ExploreByBoard />
              <SchoolByCategories />
              <SchoolByGender />
              {/* <MostComparedSchools /> */}
              <SchoolHelpCTA />
              <MakeAdmissionEasier />
              <AboutUs />
              <WhyParentsChooseUs />
              <ExploreBlogs />
            </>
          }
        />

        <Route path="/explore-schools" element={<ExploreSchool />} />
        <Route path="/compare-schools" element={<CompareSchools />} />
        <Route path="/smart-search" element={<SmartSearches />} />
        <Route path="/school/:id" element={<SchoolDetails />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/blogs" element={<AllBlogs />} />
    <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
