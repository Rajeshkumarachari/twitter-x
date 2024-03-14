import Image from "next/image";
import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
export default function Post({ post }) {
  return (
    <div className=" flex p-3 cursor-pointer border-b border-gray-200 ">
      {/* {img} */}
      <Image
        src={post.userImg}
        alt="user_image"
        className="h-12 rounded-full w-12 mr-4   "
      />

      {/* {right sde} */}
      <div className="">
        {/* {Header} */}

        <div className="flex items-center justify-between">
          {/* {post user nfo} */}
          <div className=" flex items-center space-x-2 whitespace-nowrap">
            <h4 className=" font-bold text-[15px] sm:text-[16px] hover:underline ">
              {post.name}{" "}
            </h4>
            <span className=" text-sm sm:text-[15px]  ">@{post.username}-</span>
            <span className=" text-sm sm:text-[15px]  hover:underline ">
              {post.timestamp}{" "}
            </span>
          </div>
          {/* {dot icon} */}
          <DotsHorizontalIcon className=" h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>
        <p className=" text-gray-800 text-[15px] sm:text-[16px] mb-2 ">
          {post.text}{" "}
        </p>
        <Image
          src={post.img}
          alt="post_image"
          className=" rounded-xl mr-2"
          width={400}
          height={200}
        />
        {/* {icons} */}
        <div className=" flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-700 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-green-700 hover:bg-green-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
