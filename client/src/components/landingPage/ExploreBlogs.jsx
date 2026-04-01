// src/components/ExploreBlogs.jsx
import { useNavigate } from "react-router-dom";
import blogs from "../blogs/blogData";

const ExploreBlogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleViewAll = () => {
    navigate("/blogs");
  };

  return (
    <section className="relative w-full py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b')",
        }}
      />
      <div className="absolute inset-0 bg-red-600/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center text-white mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-3">
            Explore Our Blogs
          </h2>
          <p className="text-base lg:text-lg opacity-90">
            Stay updated with trends, tips, and expert knowledge on schools and
            admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-sm lg:text-base font-medium text-gray-800 mb-2 leading-relaxed">
                  {blog.title}
                </h3>
                <span className="text-sm text-gray-500 mb-4">{blog.date}</span>
                <p className="text-gray-600 mb-4 flex-1">{blog.summary}</p>
                <button
                  onClick={() => handleReadMore(blog.id)}
                  className="mt-auto inline-flex items-center gap-2 border border-red-500 text-red-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-500 hover:text-white transition"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition"
          >
            View All Blogs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreBlogs;