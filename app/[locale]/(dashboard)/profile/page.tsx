import { getAuth0User, handleProfileChange } from "../../../actions";
import { getUserBySub } from "../../../api/api";
import NewPassword from "../../../components/NewPassword";
import ProfileDetails from "../../../components/ProfileDetails";
import ProfileSidebar from "../../../components/ProfileSidebar";
import Button from "../../../components/shared/Button";

async function Profile() {
  const auth0User = await getAuth0User();
  const sub: string = auth0User?.sub;
  const user: User = await getUserBySub(auth0User?.sub);
  return (
    <section className="mb-[80px]">
      <div className="container">
        <h1 className="font-poppins text-[3.375rem] font-medium text-center py-[40px]">
          My Profile
        </h1>
        <div className="flex gap-[80px]">
          <ProfileSidebar user={user} />
          <form className="w-[60%] flex flex-col" action={handleProfileChange}>
            <ProfileDetails user={user} />
            {sub?.split("|")[0] === "auth0" && <NewPassword />}
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
