import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const MyItemsList = ({ items }) => {
  console.log(items);

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <h3 className="text-4xl font-semibold">Items You Added</h3>

      <div className="overflow-x-auto my-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Category</th>
              <th>Status</th>
              <th>Location</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.category}</td>
                <td>{item.postType}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <Link>
                      <FaRegEdit className="text-3xl text-secondary" />
                    </Link>
                    <Link>
                      <MdDelete className="text-3xl text-primary" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItemsList;
