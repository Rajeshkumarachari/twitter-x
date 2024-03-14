import { AiOutlineLogin } from "react-icons/ai";
import Input from "./Input";


export default function Feed() {
  return (
    <div className="xl:ml-[360px] border-l border-r border-gray-200 xl:min-w-[570px] sm:ml-[73px]  flex-grow max-w-xl ">
      <div className=" flex py-2 px-3 sticky  top-0 z-50 bg-white border-b border-gray-200">
        <h2 className=" text-lg sm:text-xl font-bold cursor-pointer"> Home</h2>
        <div className=" hoverEffect flex items-center justify-center px-0 ml-auto w-12 h-12  ">
          <AiOutlineLogin className=" text-2xl" />
        </div>
      </div>
      <Input />
    </div>
  );
}
