import React from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="w-full h-[10vh] relative">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />

      <i className="text-zinc-400 text-3xl ri-close-fill"></i>
      <div className="absolute w-[50%] h-[50vh] bg-red-100 top-[90%] overflow-auto">
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
