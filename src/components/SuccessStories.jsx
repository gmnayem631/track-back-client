import React from "react";

const stories = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    name: "Sarah J.",
    date: "July 15, 2025",
    location: "New York, NY",
    story:
      "I lost my wallet at the subway station, but thanks to TrackBack, I was able to quickly find it and get it back within 2 days. The process was smooth and reassuring.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    name: "Michael T.",
    date: "August 2, 2025",
    location: "San Francisco, CA",
    story:
      "My laptop went missing after a conference. TrackBack connected me with the finder, and I recovered it safely. Highly recommend this platform!",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    name: "Linda K.",
    date: "June 29, 2025",
    location: "Chicago, IL",
    story:
      "I was skeptical at first, but the community helped me find my lost keys in less than a week. The notifications and support made all the difference.",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-indigo-50 py-12 px-6 my-10 mx-auto rounded-3xl shadow-md">
      <h2 className="text-4xl font-bold mb-10 text-neutral text-center">
        Success Stories
      </h2>
      <div className="flex flex-col space-y-10">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex items-center gap-8 border-b border-gray-300 pb-6 last:border-b-0"
          >
            <img
              src={story.img}
              alt={`${story.name}'s profile`}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-[#1e1e1e] font-semibold text-lg">
                {story.name}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                {story.date} — {story.location}
              </p>
              <p className="text-gray-700 max-w-xl">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
