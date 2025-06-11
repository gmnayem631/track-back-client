// Terms.jsx
const Terms = () => {
  return (
    <div className="bg-base-100 text-neutral min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-info text-sm leading-relaxed">
          <p>
            By using our website, you agree to the following terms and
            conditions. If you do not agree, please do not use the site.
          </p>

          <h2 className="text-neutral font-semibold text-lg">
            1. User Responsibility
          </h2>
          <p>
            Users are responsible for the accuracy of the information they
            submit. Misleading or false information may result in account
            suspension.
          </p>

          <h2 className="text-neutral font-semibold text-lg">
            2. Item Listings
          </h2>
          <p>
            Only legitimate lost or found items should be posted. Posts
            unrelated to lost and found will be removed.
          </p>

          <h2 className="text-neutral font-semibold text-lg">3. Privacy</h2>
          <p>
            We respect your privacy. Personal information will only be used to
            facilitate communication between parties involved in lost and found
            cases.
          </p>

          <h2 className="text-neutral font-semibold text-lg">4. Liability</h2>
          <p>
            We are not responsible for any items lost, found, or claimed using
            our platform. All interactions are at your own risk.
          </p>

          <h2 className="text-neutral font-semibold text-lg">
            5. Changes to Terms
          </h2>
          <p>
            We may update these terms at any time. Continued use of the site
            implies acceptance of the updated terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
