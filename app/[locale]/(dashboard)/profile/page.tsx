import { handleProfileChange } from "../../../actions";
import { getUser } from "../../../api/api";
// import NewPassword from "../../../components/Profile/NewPassword";
import ProfileDetails from "../../../components/Profile/ProfileDetails";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import Button from "../../../components/shared/Button";

async function Profile() {
  const user: User = await getUser();
  return (
    <section className="mb-[80px]">
      <div className="container">
        <h1 className="font-poppins text-[3.375rem] font-medium text-center py-[40px]">
          My Profile
        </h1>
        <div className="flex gap-[80px]">
          <ProfileSidebar user={user} active="profile" />
          <form className="w-[60%] flex flex-col" action={handleProfileChange}>
            <ProfileDetails user={user} />
            {/* {user.sub.split("|")[0] === "auth0" && <NewPassword />} */}
            <div className="mt-[24px]">
            <Button
              type="submit"
              fontSize="1rem"
              leading="28px"
              padding="px-[40px] py-[12px]"
            >
              Save Changes
            </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
