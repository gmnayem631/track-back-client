import { FaHandsHelping, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-[#1e1e1e] min-h-screen py-16 px-6 relative">
      {/* Removed decorative background circles to keep bg clean */}

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-md">
          About Us
        </h1>
        <p className="text-lg mb-12 font-light max-w-3xl mx-auto">
          Reuniting people with their lost items — one post at a time.
        </p>

        <div className="grid gap-12 md:grid-cols-3 text-left">
          {[
            {
              icon: FaUsers,
              title: "Our Mission",
              description:
                "To build a community-driven platform where people can safely and easily report, search, and recover lost items.",
              gradient: "from-pink-400 to-pink-600",
            },
            {
              icon: FaMapMarkedAlt,
              title: "How It Works",
              description:
                "Users can post lost or found items with detailed info and locations. Our system connects potential matches and alerts users instantly.",
              gradient: "from-green-400 to-green-600",
            },
            {
              icon: FaHandsHelping,
              title: "Community First",
              description:
                "We believe in trust, transparency, and collaboration. Everyone plays a part in helping someone in need.",
              gradient: "from-purple-400 to-purple-600",
            },
          ].map(({ icon: Icon, title, description, gradient }) => (
            <motion.div
              key={title}
              className={`bg-white rounded-3xl p-8 shadow-lg cursor-pointer border border-transparent hover:border-indigo-300`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(99,102,241,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${gradient} text-white mb-6 shadow-lg`}
              >
                <Icon className="text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 hover:text-indigo-700 transition">
                {title}
              </h3>
              <p className="font-medium leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
