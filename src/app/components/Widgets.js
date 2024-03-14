import { SearchIcon } from "@heroicons/react/outline";

const Widgets = () => {
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
    </div>
  );
};

export default Widgets;
