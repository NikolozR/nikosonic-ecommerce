'use client';
import { profileData } from "../../../../data/profileData";
import { useState } from "react";

function Profile() {
  const [pasword, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (type === "new") setPassword(e.target.value);
    else if (type === "confirm") setConfirmation(e.target.value);
  };

  return (
    <section className="profile">
      <div className="container mx-auto">
        <p className="full-name mt-[20px]">Full Name: {profileData.fullName}</p>
        <p className="surname">Surname: {profileData.surname}</p>
        <p className="email">Email: {profileData.email}</p>
        <p className="bio">Bio: {profileData.bio}</p>
        <form className="flex flex-col gap-[20px] items-center mt-[50px]" action="" method="post">
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
          <button>Save</button>
        </form>
      </div>
    </section>
  );
}

export default Profile;
