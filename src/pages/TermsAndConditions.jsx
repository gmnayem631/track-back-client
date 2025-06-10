import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-base-100)",
        padding: "2rem",
        color: "var(--color-neutral)",
      }}
    >
      <h1>Terms and Conditions</h1>
      <p>
        By using WhereIsIt, you agree to the following terms and conditions:
      </p>
      <ul>
        <li>All posted items must be real and accurately described.</li>
        <li>
          Misuse of the platform, including posting false information, will lead
          to account suspension.
        </li>
        <li>
          Users are responsible for verifying the identity of individuals before
          returning or claiming items.
        </li>
        <li>
          WhereIsIt is not liable for any loss or damage resulting from the use
          of the service.
        </li>
        <li>
          We reserve the right to modify or remove content that violates our
          policy or community standards.
        </li>
      </ul>
      <p>
        For any legal concerns or inquiries, please contact our support team.
      </p>
    </div>
  );
};

export default TermsAndConditions;
