import { useLoaderData } from "react-router";
import ItemsCard from "./ItemsCard";
import { IoSearch } from "react-icons/io5";

const LatestItems = () => {
  const items = useLoaderData();

  return (
    <div className="my-10 max-w-11/12 mx-auto">
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold">Latest Lost & Found Items</h2>
        <div className="flex items-center">
          <input
            className="bg-white py-3 px-14 rounded-full active:border-none"
            type="text"
            name=""
            placeholder="Enter Title or Location"
          />
          <IoSearch className="text-3xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8">
        {items.map((item, index) => (
          <ItemsCard key={index} item={item}></ItemsCard>
        ))}
      </div>
    </div>
  );
};

export default LatestItems;
