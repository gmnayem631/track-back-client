import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const RecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();

  const userItems = items.filter((item) => item.contact === user?.email);

  if (!user) {
    return <p>Please log in to view your recovered items.</p>;
  }

  if (userItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-4xl text-neutral my-5 font-semibold">
          No recovered items found
        </h2>
        <p className="text-neutral text-lg">
          You haven't marked any item as recovered yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your Recovered Items
      </h2>
      <div className="overflow-x-auto rounded-2xl bg-white">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th></th>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Category</th>
              <th>Recovered On</th>
            </tr>
          </thead>
          <tbody>
            {userItems.map((item, index) => (
              <tr key={item._id} className="hover">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecoveredItems;
