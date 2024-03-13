import Image from "next/image";
import x from "../favicon.ico";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";
import user from "../userlogo.png";

export default function Sidebar() {
  const sidebarIcons = [
    {
      id: 1,
      text: "Home",
      logo: HomeIcon,
    },
    {
      id: 2,
      text: "Explorer",
      logo: HashtagIcon,
    },
    {
      id: 3,
      text: "Notification",
      logo: BellIcon,
    },
    {
      id: 4,
      text: "Messages",
      logo: InboxIcon,
    },
    {
      id: 5,
      text: "Bookmark",
      logo: BookmarkIcon,
    },
    {
      id: 6,
      text: "Lists",
      logo: ClipboardIcon,
    },
    {
      id: 7,
      text: "Profile",
      logo: UserIcon,
    },
    {
      id: 8,
      text: "More",
      logo: DotsCircleHorizontalIcon,
    },
  ];
  return (
    <div className=" hidden sm:flex flex-col p-2 xl:items-start fixed h-full ">
      <div className="hoverEffect p-0 hover:bg-gray-600">
        <Image
          src={x}
          alt="logo"
          width={70}
          height={70}
          className=" rounded-md "
        ></Image>
      </div>
      <div className=" mt-4 mb-2.5 xl:items-start">
        {sidebarIcons.map((icon) => (
          <SidebarMenuItem key={icon.id} text={icon.text} Icon={icon.logo} />
        ))}
      </div>
      <button className=" bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline ">
        Tweet
      </button>
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
        <Image
          src={user}
          alt="user logo"
          className=" h-12 w-12 rounded-full lx:mr-2"
        ></Image>
        <div className=" leading-5  hidden xl:inline">
          <h4 className=" font-bol  d">K Rajesh</h4>
          <p className=" text-gray-500 ">@karamala rajesh</p>
        </div>
        <DotsHorizontalIcon className=" h-4 xl:ml-8 hidden xl:inline " />
      </div>
    </div>
  );
}
