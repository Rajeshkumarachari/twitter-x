/* eslint-disable react/no-unescaped-entities */
"use client";
import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import News from "./News";

export default function Widgets() {
  const [articleNum, setArticleNum] = useState(3);
  const [newsData, setNewsData] = useState("");
  console.log(newsData);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNewsData(data.articles);
      });
  }, []);
  return (
    <div className=" xl:w-[600px] hidden lg:inline ml-8 mt-2">
      <div className=" w-[90%] xl:w-[75%] sticky top-0 bg-white py-1/5 z-50  ">
        <div className=" flex items-center p-3 rounded-xl  relative">
          <SearchIcon className="h-5 z-50 text-gray-500 " />
          <input
            type="text"
            placeholder="Search Twitter"
            className=" absolute inset-0 border-gray-500 text-gray-700 pl-10 rounded-lg focus:shadow-lg  focus:bg-white bg-gray-50 "
          />
        </div>
      </div>
      <div className=" text-gray-700 space-y-3 bg-gray-100 rounded-md pt-2 w-[90%] xl:w-[75%] ">
        <h1 className=" font-bold text-xl px-4">What's happening ! </h1>

        {newsData &&
          newsData
            .slice(0, articleNum)
            .map((article) => <News key={article.author} article={article} />)}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className=" hover:underline text-blue-400  pl-4 pb-3 hover:text-blue-500"
        >
          Show more
        </button>
      </div>
    </div>
  );
}
