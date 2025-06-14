import { useLoaderData } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const ItemDetails = ({ user }) => {
  const {
    _id,
    postType,
    thumbnail,
    title,
    description,
    category,
    location,
    date,
    contact,
  } = useLoaderData();

  const { displayName: contactName, email: contactEmail } = contact || {};
  const { displayName, email, photoURL } = user || {};

  const [recoveredDate, setRecoveredDate] = useState(new Date());
  const [recoveredLocation, setRecoveredLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const recoveryInfo = {
      itemId: _id,
      recoveredLocation,
      recoveredDate: recoveredDate.toISOString().split("T")[0],
      recoveredBy: { name: displayName, email, image: photoURL },
    };

    console.log("Recovery Info Submitted:", recoveryInfo);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
      <div className="flex justify-center">
        <img src={thumbnail} alt={title} className="h-64 rounded-md" />
      </div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-4 space-y-1">
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Contact:</strong> {contactName} ({contactEmail})
        </p>
      </div>

      <button
        className="btn btn-primary mt-6 text-neutral font-bold"
        onClick={() => document.getElementById("recovery_modal").showModal()}
      >
        {postType === "Lost" ? "Found This!" : "This is Mine!"}
      </button>

      {/* DaisyUI Modal */}
      <dialog
        id="recovery_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Submit Recovery Info</h3>
          <form method="dialog" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Recovered Location
              </label>
              <input
                type="text"
                value={recoveredLocation}
                onChange={(e) => setRecoveredLocation(e.target.value)}
                className="w-full input input-bordered"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Recovered Date
              </label>
              <DatePicker
                selected={recoveredDate}
                onChange={(date) => setRecoveredDate(date)}
                className="w-full input input-bordered"
                required
              />
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p>
                <strong>Your Info:</strong>
              </p>
              <p>Name: {displayName}</p>
              <p>Email: {email}</p>
              {photoURL && (
                <img
                  src={photoURL}
                  alt="user"
                  className="w-12 h-12 rounded-full mt-2"
                />
              )}
            </div>

            <div className="flex justify-between">
              <div className="modal-action">
                {/* This submit button will close the modal automatically */}
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
              <div className="modal-action">
                <div method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary">Close</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ItemDetails;
