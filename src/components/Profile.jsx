import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

const Profile = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  if (!user) {
    return <p>You need to be logged in to view this page.</p>;
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      setMessage("Profile updated successfully.");
    } catch (err) {
      setError("Failed to update profile: " + err.message);
    }
    setLoading(false);
  };

  // Optional: Password update flow
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordMessage(null);
    setPasswordError(null);

    const credential = EmailAuthProvider.credential(user.email, oldPassword);

    try {
      // Reauthenticate user
      await reauthenticateWithCredential(auth.currentUser, credential);
      // Update password
      await updatePassword(auth.currentUser, newPassword);
      setPasswordMessage("Password updated successfully.");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setPasswordError("Failed to update password: " + err.message);
    }
    setPasswordLoading(false);
  };

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("Logged out");
      })
      .catch(console.error);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md my-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">My Profile</h2>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Display Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        {message && <p className="text-green-600">{message}</p>}
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-secondary text-neutral font-bold btn py-2 rounded hover:bg-accent transition"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">Change Password</h3>
      <form onSubmit={handleChangePassword} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Current Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        {passwordMessage && <p className="text-green-600">{passwordMessage}</p>}
        {passwordError && <p className="text-red-600">{passwordError}</p>}
        <button
          type="submit"
          disabled={passwordLoading}
          className="w-full bg-secondary btn text-neutral py-2 rounded hover:bg-accent transition"
        >
          {passwordLoading ? "Updating..." : "Change Password"}
        </button>
      </form>

      <hr className="my-8" />

      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-primary rounded-lg btn font-medium text-neutral"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
