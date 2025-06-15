import { useLoaderData } from "react-router";
import ItemsCard from "./ItemsCard";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const LatestItems = () => {
  const items = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items by title or location
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="my-10 max-w-11/12 mx-auto">
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold">Latest Lost & Found Items</h2>
        <div className="flex items-center">
          <input
            className="bg-white py-3 px-14 rounded-full active:border-none"
            type="text"
            placeholder="Enter Title or Location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearch className="text-3xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8">
        {filteredItems.map((item, index) => (
          <ItemsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestItems;
