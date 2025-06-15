import MyItemsList from "../components/MyItemsList";
import { useLoaderData } from "react-router";

const ManageItems = () => {
  const items = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto">
      {items && items.length > 0 ? (
        <MyItemsList items={items} />
      ) : (
        <p className="text-center text-lg mt-10 text-gray-600">
          You haven't added any items yet.
        </p>
      )}
    </div>
  );
};

export default ManageItems;
