import React, { useState, useRef, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-hot-toast";

const MyItemsList = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // defining modelRef
  const modalRef = useRef(null);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setFormData({ ...item });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/items/${selectedItem._id}`,
        formData
      );
      if (res.data.modifiedCount > 0) {
        toast.success("Item updated successfully!");
        setIsModalOpen(false);
        // Update local items list
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === selectedItem._id ? { ...item, ...formData } : item
          )
        );
      } else {
        toast.error("No changes made.");
      }
    } catch (err) {
      toast.error("Update failed.");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`http://localhost:3000/items/${id}`);
      if (res.status === 200) {
        toast.success("Item deleted successfully!");
        // Remove the deleted item from state
        setItems((prevItems) => prevItems.filter((item) => item._id !== id));
      } else {
        toast.error("Failed to delete item.");
      }
    } catch (error) {
      toast.error("Error deleting item.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <h3 className="text-4xl font-semibold">Items You Added</h3>

      <div className="overflow-x-auto my-8">
        <table className="table">
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
            {items.map((item, index) => (
              <tr key={item._id || index}>
                <th>{index + 1}</th>
                <td>{item.category}</td>
                <td>{item.postType}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="cursor-pointer"
                    >
                      <FaRegEdit className="text-3xl text-secondary" />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="cursor-pointer"
                    >
                      <MdDelete className="text-3xl text-primary" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog open ref={modalRef} className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Update Item</h3>

            <div className="grid grid-cols-2 gap-4">
              {/* <label htmlFor="">Status</label> */}
              <select
                name="postType"
                value={formData.postType || ""}
                onChange={handleChange}
                className="select select-bordered"
              >
                <option value="">Select Post Type</option>
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>

              <input
                type="text"
                name="thumbnail"
                placeholder="Image URL"
                className="input input-bordered"
                value={formData.thumbnail || ""}
                onChange={handleChange}
              />

              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                value={formData.title || ""}
                onChange={handleChange}
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered"
                value={formData.category || ""}
                onChange={handleChange}
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered"
                value={formData.location || ""}
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                className="input input-bordered"
                value={formData.date || ""}
                onChange={handleChange}
              />

              <input
                type="text"
                name="displayName"
                placeholder="Display Name"
                className="input input-bordered"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>

            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full mt-4"
              value={formData.description || ""}
              onChange={handleChange}
            ></textarea>

            <div className="modal-action">
              <button className="btn btn-outline" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyItemsList;
