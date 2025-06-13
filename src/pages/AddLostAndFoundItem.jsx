import { FaCalendarAlt } from "react-icons/fa";

const AddItem = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-base-100 shadow-xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Add Lost & Found Item
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Post Type */}
        <div className="form-control">
          <label className="label font-semibold">Post Type</label>
          <select className="select select-bordered">
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
            type="text"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered"
          />
        </div>

        {/* Title */}
        <div className="form-control">
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            placeholder="Item title"
            className="input input-bordered"
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label font-semibold">Category</label>
          <select className="select select-bordered">
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
              type="text"
              placeholder="Select a date"
              className="input input-bordered w-full"
              readOnly
            />
            <FaCalendarAlt className="absolute top-3 right-4 text-gray-500" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="form-control">
          <label className="label font-semibold">Contact Info</label>
          <input
            type="text"
            value="John Doe (johndoe@email.com)"
            className="input input-bordered"
            readOnly
          />
        </div>

        {/* Description (Full width) */}
        <div className="form-control md:col-span-2">
          <label className="label font-semibold">Description</label>
          <textarea
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
