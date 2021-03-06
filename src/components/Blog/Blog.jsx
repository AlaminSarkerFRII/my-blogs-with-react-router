import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  console.log(blog);

  const { imageURL, title, blog: blogBody, admin, _id } = blog;

  const navigate = useNavigate();

  return (
    <div className="w-2/5 mx-auto items-center justify-between">
      <div className="pt-4 pb-5 rounded ">
        <img src={imageURL} alt="" />
      </div>
      <div className="blog-information">
        <h3>{title}</h3>
        <p className="w-full">
          {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
          <span
            onClick={() => navigate(`/blog/${_id}`)}
            className="text-2xl font-bold text-indigo-600 flex items-center"
          >
            Read More ..
            <p>
              <BsFillArrowRightSquareFill />
            </p>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
