import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange, MdOutlineContactMail } from "react-icons/md";
import { Link } from "react-router";

const ItemsCard = ({ item }) => {
  const {
    _id,
    thumbnailUrl,
    postType,
    title,
    description,
    category,
    location,
    date,
    contact,
  } = item;
  console.log(item);

  return (
    <div className="card bg-white shadow-sm border border-secondary py-4 rounded-2xl">
      <figure>
        <img src={thumbnailUrl} className="w-[100px]" />
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
        <div className="flex items-center gap-3">
          <BiSolidCategory className="text-2xl text-secondary" />{" "}
          <div className="badge badge-outline font-semibold">{category}</div>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-2xl text-secondary" />{" "}
          <div className="font-semibold text-neutral">{location}</div>
        </div>
        <div className="flex items-center gap-3">
          <MdDateRange className="text-2xl text-secondary" />{" "}
          <div className="font-semibold text-neutral">{date}</div>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineContactMail className="text-2xl text-secondary" />{" "}
          <div className="font-semibold text-neutral">{contact}</div>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/items/${_id}`}
            className="btn btn-primary w-full text-neutral text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
