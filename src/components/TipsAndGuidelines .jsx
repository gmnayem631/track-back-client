import React from "react";
import {
  FaShieldAlt,
  FaSearch,
  FaMobileAlt,
  FaUserCheck,
  FaLightbulb, // example icon for decoration
} from "react-icons/fa";

const tips = [
  {
    icon: <FaShieldAlt className="text-secondary text-3xl" />,
    title: "Keep Your Valuables Safe",
    description:
      "Always keep your belongings in sight or secured. Use locks, bags, or protective cases to reduce the risk of loss.",
  },
  {
    icon: <FaSearch className="text-secondary text-3xl" />,
    title: "Act Quickly",
    description:
      "Report lost items as soon as possible to increase the chances of recovery. The sooner you report, the better the chances.",
  },
  {
    icon: <FaMobileAlt className="text-secondary text-3xl" />,
    title: "Use Our Mobile Alerts",
    description:
      "Enable notifications to get instant alerts about matches or updates regarding your lost or found items.",
  },
  {
    icon: <FaUserCheck className="text-secondary text-3xl" />,
    title: "Verify Before Retrieval",
    description:
      "Always verify your identity and ownership when claiming a lost item to protect yourself and others.",
  },
];

const TipsAndGuidelines = () => {
  return (
    <section className="bg-indigo-50 py-12 px-6 mx-auto rounded-3xl shadow-md">
      <h2 className="text-4xl font-bold mb-12 text-neutral text-center">
        Tips & Safety Guidelines
      </h2>
      <div className="relative flex flex-col md:flex-row items-start gap-12">
        {/* Tips List */}
        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-secondary rounded"></div>

          <ul className="space-y-12">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1">{tip.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e1e1e]">
                    {tip.title}
                  </h3>
                  <p className="text-gray-700 mt-2 max-w-prose">
                    {tip.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative Icon on right */}
        <div className="hidden md:flex justify-center items-center w-48 text-secondary opacity-70 select-none">
          <FaLightbulb className="text-[10rem] drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default TipsAndGuidelines;
