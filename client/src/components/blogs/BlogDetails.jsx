// src/pages/BlogDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import blogs from "../blogs/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === parseInt(id));

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog)
    return <p className="p-6 text-center text-red-600">Blog not found</p>;

  return (
    <section className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-red-600 font-medium hover:underline"
      >
        ← Back
      </button>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <span className="text-gray-500 text-sm mb-6 block">{blog.date}</span>

      <div
        className="text-gray-700 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </section>
  );
};

export default BlogDetails;