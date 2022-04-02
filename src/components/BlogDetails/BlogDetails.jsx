import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs] = useContext(BlogContext);

  // back button navigate

  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog._id === id);

  return (
    <>
      <div className="bg-orange-200 w-full h-28 t-0" />
      <div>
        <button
          onClick={() => navigate(-1)}
          className="text-3xl pl-5 text-pink-700"
        >
          Back To Previous Page
        </button>
      </div>
      <div className="w-2/5 mx-auto ">
        <img src={blog?.imageURL} alt="" />
      </div>
      <div className="blog-details w-2/5 mx-auto">
        <p className="font-bold">{blog?.title}</p>
        <p>{blog?.blog}</p>
      </div>
    </>
  );
};

export default BlogDetails;
