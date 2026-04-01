// src/pages/AllBlogs.jsx
import { useNavigate } from "react-router-dom";
import blogs from "../blogs/blogData";

const AllBlogs = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-10 text-center">All Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-medium text-gray-800 mb-2">{blog.title}</h3>
              <span className="text-gray-500 text-sm mb-4">{blog.date}</span>
              <p className="text-gray-600 mb-4 flex-1">{blog.summary}</p>
              <button
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="mt-auto inline-flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;