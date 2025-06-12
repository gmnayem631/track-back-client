import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="my-10 bg-secondary py-8 rounded-2xl">
      <div className="flex flex-col gap-5 w-1/2 mx-auto">
        <h2 className="text-4xl font-bold text-neutral text-center ">
          Loved By Our Clients
        </h2>
        <p className="text-center ">
          TrackBack is trusted by universities, events, and small businesses to
          simplify lost and found management. From reporting to recovery — we
          make it fast, easy, and reliable. Get started and see how TrackBack
          can work for you.
        </p>
      </div>

      <div className="client-reviews grid grid-cols-2 gap-12 max-w-11/12 mx-auto my-6">
        {/* review 1 */}
        <div className="card1 bg-base-300 text-neutral text-center rounded-xl py-6 px-4 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">Emily R.</h2>
          <p className="text-lg">General Manager</p>
          <div className="flex text-[#FFD700] justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="">
            <FaQuoteLeft className="text-secondary inline" />
            TrackBack has made it incredibly easy to manage lost and found
            items. It's fast, reliable, and our customers love the convenience
            <FaQuoteRight className="text-secondary inline" />
          </p>
        </div>{" "}
        {/* review 2 */}
        <div className="card1 bg-base-300 text-neutral text-center rounded-xl py-6 px-4 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">Carlos M.</h2>
          <p className="text-lg">Hotel Front Desk Supervisor</p>
          <div className="flex text-[#FFD700] justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="">
            <FaQuoteLeft className="text-secondary inline" />
            We used to spend hours tracking lost items manually. With TrackBack,
            it's done in minutes. Total game changer.
            <FaQuoteRight className="text-secondary inline" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
