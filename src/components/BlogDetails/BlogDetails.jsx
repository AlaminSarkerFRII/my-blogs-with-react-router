import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs] = useContext(BlogContext);

  const blog = blogs.find((blog) => blog._id === id);

  return (
    <>
      <div className="header-gradient" />
      <div className="w-2/5 mx-auto ">
        <img src={blog?.imageURL} alt="" />
      </div>
    </>
  );
};

export default BlogDetails;
