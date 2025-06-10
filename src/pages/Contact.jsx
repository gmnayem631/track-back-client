import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-base-100)",
        padding: "2rem",
        color: "var(--color-neutral)",
      }}
    >
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feedback, or need support, feel free to reach
        out.
      </p>
      <ul>
        <li>
          <strong>Email:</strong> support@whereisit.com
        </li>
        <li>
          <strong>Phone:</strong> +1 (800) 123-4567
        </li>
        <li>
          <strong>Address:</strong> 123 Recovery Lane, Found City, FN 12345
        </li>
      </ul>
    </div>
  );
};

export default Contact;
