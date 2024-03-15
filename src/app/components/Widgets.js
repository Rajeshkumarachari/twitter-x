/* eslint-disable react/no-unescaped-entities */
"use client";
import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import News from "./News";
import Image from "next/image";

export default function Widgets() {
  const [articleNum, setArticleNum] = useState(3);
  const [newsData, setNewsData] = useState("");
  const [followData, setFollowData] = useState("");
  const [followMoreNum, setFollowMoreNum] = useState(3);
  console.log(followData);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNewsData(data?.articles);
      });
  }, []);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30&inc=name,login,picture")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFollowData(data?.results);
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
      <div className=" sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-md w-[90%] sm:xl:w-[75%] mt-3 ">
        <h4 className=" font-bold text-xl px-4 "> Who to Follow</h4>
        {followData &&
          followData.slice(0, followMoreNum).map((user) => (
            <div
              className=" flex items-center  px-4 py-2 cursor-pointer hover:bg-sky-100 rounded-lg"
              key={user.login.username}
            >
              <Image
                src={user?.picture?.thumbnail}
                alt="user images"
                width={40}
                height={40}
                className=" rounded-full"
              />
              <div className=" truncate ml-3 leading-5">
                <h4 className=" font-semibold hover:underline text-[14px] truncate ">
                  {user?.login.username}{" "}
                </h4>
                <h5 className=" text-[13px] text-gray-500 truncate ">
                  {user?.name?.first + " " + user?.name?.last}
                </h5>
              </div>
              <button className=" ml-auto bg-black text-white rounded-3xl text-sm px-3.5 py-1.5 font-bold  ">
                Follow
              </button>
            </div>
          ))}
        <button
          onClick={() => setFollowMoreNum(followMoreNum + 3)}
          className="hover:underline text-blue-400  pl-4 pb-3 hover:text-blue-500"
        >
          Show more
        </button>
      </div>
    </div>
  );
}
