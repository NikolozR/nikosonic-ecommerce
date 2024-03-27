import { profileData } from "../data/profileData";
import Button from "../components/Button";
import '../styles/Profile.scss'

function Profile() {
  return <section className="profile">
    <div class="container">
        <h1>User Profile</h1>
        <p className="full-name">Full Name: {profileData.fullName}</p>
        <p className="surname">Surname: {profileData.surname}</p>
        <p className="email">Email: {profileData.email}</p>
        <p class="bio">Bio: {profileData.bio}</p>
        <form action="" method="post">
            <input type="password" placeholder="New Password" name="newPassword" id="newPassword" />
            <input type="password" placeholder="Confirm New Password" name="confirmPassword" id="confirmPassword" />
            <Button>Save</Button>
        </form>
    </div>
  </section>;
}

export default Profile;
