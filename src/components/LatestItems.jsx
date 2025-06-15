import { useLoaderData } from "react-router";
import ItemsCard from "./ItemsCard";

const LatestItems = () => {
  const items = useLoaderData();

  return (
    <div className="my-10 max-w-11/12 mx-auto">
      <h2 className="text-4xl font-semibold">Latest Lost & Found Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8">
        {items.map((item, index) => (
          <ItemsCard key={index} item={item}></ItemsCard>
        ))}
      </div>
    </div>
  );
};

export default LatestItems;
