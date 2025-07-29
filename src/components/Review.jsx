import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Emily R.",
    role: "General Manager",
    text: `TrackBack has made
      it incredibly easy to manage lost and found items. It's fast,
      reliable, and our customers love the convenience`,
  },
  {
    name: "Carlos M.",
    role: "Hotel Front Desk Supervisor",
    text: `We used to spend
      hours tracking lost items manually. With TrackBack, it's done in
      minutes. Total game changer.`,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.5,
      duration: 2,
      ease: "easeOut",
    },
  }),
};

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

      <div className="client-reviews grid grid-cols-1 md:grid-cols-2 gap-12 max-w-11/12 mx-auto my-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="card1 bg-base-300 text-neutral text-center rounded-xl py-6 px-4 flex flex-col gap-3"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <h2 className="text-3xl font-semibold">{review.name}</h2>
            <p className="text-lg">{review.role}</p>
            <div className="flex text-[#FFD700] justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p>
              <FaQuoteLeft className="text-secondary inline" /> {review.text}{" "}
              <FaQuoteRight className="text-secondary inline" />
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Review;
