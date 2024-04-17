import React, { useEffect, useState } from "react";
import image from "../assets/shutterstock_1495957673.png";
import Blog from "../components/Blog";
import { Helmet } from "react-helmet-async";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);

  return (
    <div className="mx-auto mt-12 md:mt-[80px]">
      <Helmet>
        <title>Dream Dwellings | Blogs</title>
      </Helmet>

 <div className="bg-cover rounded-[24px]" style={{
        backgroundImage: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url("${image}")`,
      }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:py-[50px] lg:py-[114px] p-6">
            <h1 className="mb-5 md:text-[36px] lg:text-[52px] font-bold text-[#FFFFFF] lg:w-[897px] mx-auto">A sure way to get your dream home</h1>
            <p className="mb-10 md:text-[18px] lg:w-[933px] mx-auto text-white">A knowledgeable real estate agent can be your greatest asset. They will help you navigate the market, find suitable properties, and negotiate on your behalf.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
