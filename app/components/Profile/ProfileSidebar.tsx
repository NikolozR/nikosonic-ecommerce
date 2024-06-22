import Link from "next/link";
import AvatarForm from "./AvatarForm";



function ProfileSidebar({ user, active }: { user: User, active: 'profile' | 'blogs' | 'orders' | 'addresses' }) {
  return (
    <div className="bg-[#F3F5F7] rounded-[8px] h-fit w-fit flex flex-col px-[16px] py-[40px]">
      <div>
        <AvatarForm url={user?.avatarurl} />
        <h2 className="text-[1.25rem] font-semibold mt-[6px] text-center mb-[40px]">
          {user.name} {user.surname}
        </h2>
      </div>
      <ul className="w-[230px] max-w-full flex flex-col gap-[12px]">
        <li className={"h-[42px] flex items-center " + (active === 'profile' ? 'border-solid border-b-[1px] border-[#141718]' : '')}>
          <Link
            href={"/profile"}
            className={"font-semibold text-[1rem] " + (active === 'profile' ? 'text-[#141718]' : 'text-[#605F5F] ')}
          >
            Profile
          </Link>
        </li>
        <li className={"h-[42px] flex items-center " + (active === 'addresses' ? 'border-solid border-b-[1px] border-[#141718]' : '')}>
          <Link
            href={"/addresses"}
            className={"font-semibold text-[1rem] " + (active === 'addresses' ? 'text-[#141718]' : 'text-[#605F5F]')}
          >
            Addresses
          </Link>
        </li>
        <li className={"h-[42px] flex items-center " + (active === 'orders' ? 'border-solid border-b-[1px] border-[#141718]' : '')}>
          <Link
            href={"/orders"}
            className={"font-semibold text-[1rem] " + (active === 'orders' ? 'text-[#141718]' : 'text-[#605F5F]')}
          >
            Orders
          </Link>
        </li>
        <li className={"h-[42px] flex items-center " + (active === 'blogs' ? 'border-solid border-b-[1px] border-[#141718]' : '')}>
          <Link
            href={"/blogs/myBlogs"}
            className={"font-semibold text-[1rem] " + (active === 'blogs' ? 'text-[#141718]' : 'text-[#605F5F] ')}
          >
            My Blogs
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
