import axios from "axios";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // save job to the database
    axios
      .post("http://localhost:3000/items", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your Item Has Been Added",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-base-100 shadow-xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Add Lost & Found Item
      </h2>

      <form
        onSubmit={handleAddItem}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Post Type */}
        <div className="form-control">
          <label className="label font-semibold">Post Type</label>
          <select name="postType" className="select select-bordered">
            <option disabled selected>
              Choose Type
            </option>
            <option>Lost</option>
            <option>Found</option>
          </select>
        </div>

        {/* Thumbnail URL */}
        <div className="form-control">
          <label className="label font-semibold">Thumbnail (Image URL)</label>
          <input
            name="thumbnailUrl"
            type="text"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered"
          />
        </div>

        {/* Title */}
        <div className="form-control">
          <label className="label font-semibold">Title</label>
          <input
            name="title"
            type="text"
            placeholder="Item title"
            className="input input-bordered"
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label font-semibold">Category</label>
          <select name="category" className="select select-bordered">
            <option disabled selected>
              Select category
            </option>
            <option>Pets</option>
            <option>Documents</option>
            <option>Gadgets</option>
            <option>Clothing</option>
            <option>Others</option>
          </select>
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label font-semibold">Location</label>
          <input
            name="location"
            type="text"
            placeholder="e.g., Library, Campus Area"
            className="input input-bordered"
          />
        </div>

        {/* Date Lost/Found */}
        <div className="form-control">
          <label className="label font-semibold">Date Lost/Found</label>
          <div className="relative">
            <input
              type="date"
              placeholder="Select a date"
              className="input input-bordered w-full"
            />
            <FaCalendarAlt className="absolute top-3 right-4 text-gray-500" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="form-control">
          <label className="label font-semibold">Contact Info</label>
          <input name="contact" type="text" className="input input-bordered" />
        </div>

        {/* Description */}
        <div className="form-control md:col-span-2">
          <label className="label font-semibold">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            rows={4}
            placeholder="Provide a detailed description..."
          ></textarea>
        </div>

        {/* Submit Button (Full width) */}
        <div className="form-control md:col-span-2">
          <button type="submit" className="btn btn-primary w-full text-lg">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
