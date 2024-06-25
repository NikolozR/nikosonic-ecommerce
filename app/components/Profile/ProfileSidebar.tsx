import Link from "next/link";
import AvatarForm from "./AvatarForm";
import { getTranslations } from "next-intl/server";

async function ProfileSidebar({
  user,
  active,
}: {
  user: User;
  active: "profile" | "blogs" | "orders" | "addresses";
}) {
  const t = await getTranslations("Profile");
  return (
    <div className="bg-[#F3F5F7] dark:bg-[#493565] rounded-[8px] h-fit w-fit flex flex-col px-[16px] py-[40px]">
      <div>
        <AvatarForm url={user?.avatarurl} />
        <h2 className="text-[1.25rem] dark:text-[#ECEDEE] font-semibold mt-[6px] text-center mb-[40px]">
          {user.name} {user.surname}
        </h2>
      </div>
      <ul className="w-[230px] max-w-full flex flex-col gap-[12px]">
        <li
          className={
            "h-[42px] flex items-center " +
            (active === "profile"
              ? "border-solid border-b-[1px] border-[#141718] dark:border-white"
              : "")
          }
        >
          <Link
            href={"/profile"}
            className={
              "font-semibold text-[1rem] " +
              (active === "profile" ? "text-[#141718] dark:text-white" : "text-[#605F5F] ")
            }
          >
            {t("profile")}
          </Link>
        </li>
        <li
          className={
            "h-[42px] flex items-center " +
            (active === "addresses"
              ? "border-solid border-b-[1px] border-[#141718] dark:border-white"
              : "")
          }
        >
          <Link
            href={"/addresses"}
            className={
              "font-semibold text-[1rem] " +
              (active === "addresses" ? "text-[#141718] dark:text-white" : "text-[#605F5F]")
            }
          >
            {t("addresses")}
          </Link>
        </li>
        <li
          className={
            "h-[42px] flex items-center " +
            (active === "orders"
              ? "border-solid border-b-[1px] border-[#141718] dark:border-white"
              : "")
          }
        >
          <Link
            href={"/orders"}
            className={
              "font-semibold text-[1rem] " +
              (active === "orders" ? "text-[#141718] dark:text-white" : "text-[#605F5F]")
            }
          >
            {t("orders")}
          </Link>
        </li>
        <li
          className={
            "h-[42px] flex items-center " +
            (active === "blogs"
              ? "border-solid border-b-[1px] border-[#141718] dark:border-white"
              : "")
          }
        >
          <Link
            href={"/blogs/myBlogs"}
            className={
              "font-semibold text-[1rem] " +
              (active === "blogs" ? "text-[#141718] dark:text-white" : "text-[#605F5F] ")
            }
          >
            {t("blogs")}
          </Link>
        </li>
        <li className="h-[42px] flex items-center">
          <a
            href={"/api/auth/logout"}
            className="text-[#605F5F] font-semibold text-[1rem]"
          >
            {t("logout")}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
