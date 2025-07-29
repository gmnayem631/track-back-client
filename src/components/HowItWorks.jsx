import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaUserShield, FaHandshake } from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList className="text-secondary text-4xl" />,
    title: "Report a lost or found item",
    description:
      "Fill the declaration and give as much detail as possible (the location of loss, the type of item, the description) to help the algorithm to identify it quickly",
  },
  {
    icon: <FaUserShield className="text-secondary text-4xl" />,
    title: "Prove ownership of the item",
    description:
      'Once the lost item "matched", prove who you are thanks to a security question (ex: describe the shell of your phone, ...). Then, our partner who found this item will be able to validate that this is yours',
  },
  {
    icon: <FaHandshake className="text-secondary text-4xl" />,
    title: "Get it back!",
    description:
      "As soon as you are authenticated, you receive the information to pick it up or have it delivered. Remember to communicate the reference's number found",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-12 text-center max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-10 text-neutral">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="card bg-white rounded-2xl shadow-xl p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="bg-white p-6 rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
