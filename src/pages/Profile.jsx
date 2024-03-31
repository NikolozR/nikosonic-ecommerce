import { profileData } from "../data/profileData";
import Button from "../components/Button";
import "../styles/Profile.scss";
import { useState } from "react";

function Profile() {
  const [pasword, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e, type) => {
    if (type === "new") setPassword(e.target.value);
    else if (type === "confirm") setConfirmation(e.target.value);
  };

  return (
    <section className="profile">
      <div className="container">
        <h1>User Profile</h1>
        <p className="full-name">Full Name: {profileData.fullName}</p>
        <p className="surname">Surname: {profileData.surname}</p>
        <p className="email">Email: {profileData.email}</p>
        <p className="bio">Bio: {profileData.bio}</p>
        <form action="" method="post">
          <input
            type="password"
            value={pasword}
            onChange={(e) => handleChange(e, "new")}
            placeholder="New Password"
            name="newPassword"
            id="newPassword"
          />
          <input
            type="password"
            value={confirmation}
            onChange={(e) => handleChange(e, "confirm")}
            placeholder="Confirm New Password"
            name="confirmPassword"
            id="confirmPassword"
          />
          <Button>Save</Button>
        </form>
      </div>
    </section>
  );
}

export default Profile;
