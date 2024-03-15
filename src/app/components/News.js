import React from "react";
import Image from "next/image";

export default function News({ article }) {
  return (
    <a href={article.url} target="_blank" className="">
      <div className=" flex items-center justify-between px-4 py-2 space-x-1 hover:bg-sky-100 rounded-md transition duration-200 ">
        <div className=" space-y-0.5">
          <h1 className=" text-sm font-bold ">{article.title} </h1>
          <p className=" text-xs font-medium text-gray-500">
            {article.source.name}{" "}
          </p>
        </div>
      </div>
    </a>
  );
}
