import React from "react";

const ItemsCard = ({ item }) => {
  const {
    thumbnail,
    postType,
    title,
    description,
    category,
    location,
    date,
    contact,
  } = item;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={thumbnail} alt="Shoes" className="w-[100px]" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <div className="">
            {postType === "Found" ? (
              <div className="badge badge-secondary text-neutral font-semibold">
                {postType}
              </div>
            ) : (
              <div className="badge badge-primary text-neutral font-semibold">
                {postType}
              </div>
            )}
          </div>
        </div>
        <p>{description}</p>
        <div className="">
          Category:{" "}
          <div className="badge badge-outline font-semibold">{category}</div>
        </div>
        <div className="">
          Location:{" "}
          <span className="font-semibold text-neutral">{location}</span>
        </div>
        <div className="">
          Date: <span className="font-semibold text-neutral">{date}</span>
        </div>
        <div className="">
          Contact:{" "}
          <span className="font-semibold text-neutral">{contact.email}</span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
