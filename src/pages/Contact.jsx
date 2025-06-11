// Contact.jsx
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-base-100 text-neutral min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
        <p className="text-info text-lg mb-8">
          Got a question or need help? Reach out to us below.
        </p>

        <div className="grid gap-6 text-left">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-secondary text-xl" />
            <span className="text-info">support@lostfound.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-secondary text-xl" />
            <span className="text-info">+123 456 7890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-secondary text-xl" />
            <span className="text-info">123 Hope Street, City, Country</span>
          </div>
        </div>

        <form className="mt-10 bg-surface p-6 rounded-2xl shadow-md text-left space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
          />
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
