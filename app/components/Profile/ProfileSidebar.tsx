import Link from "next/link";
import AvatarForm from "./AvatarForm";



function ProfileSidebar({ user }: { user: User }) {
  return (
    <div className="bg-[#F3F5F7] rounded-[8px] h-fit w-fit flex flex-col px-[16px] py-[40px]">
      <div>
        <AvatarForm url={user?.avatarurl} />
        <h2 className="text-[1.25rem] font-semibold mt-[6px] text-center mb-[40px]">
          {user.name} {user.surname}
        </h2>
      </div>
      <ul className="w-[230px] max-w-full flex flex-col gap-[12px]">
        <li className="h-[42px] flex items-center border-solid border-b-[1px] border-[#141718]">
          <Link
            href={"/profile"}
            className="text-[#141718] font-semibold text-[1rem]"
          >
            Profile
          </Link>
        </li>
        <li className="h-[42px] flex items-center">
          <Link
            href={"/profile"}
            className="text-[#605F5F] font-semibold text-[1rem]"
          >
            Orders
          </Link>
        </li>
        <li className="h-[42px] flex items-center">
          <Link
            href={"/profile"}
            className="text-[#605F5F] font-semibold text-[1rem]"
          >
            Cart
          </Link>
        </li>
        <li className="h-[42px] flex items-center">
          <a
            href={"/api/auth/logout"}
            className="text-[#605F5F] font-semibold text-[1rem]"
          >
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
