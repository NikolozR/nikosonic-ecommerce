import { getAllUsers } from "../../api/api";
import UserListItem from "./UserListItem";
import ModalOpener from "./ModalOpener";
import AdminUserForm from "./AdminUserForm";

const getUsers = async () => {
  const response = await getAllUsers();
  const data = await response.json();
  return data.result.rows.sort((a: User, b: User) => a.id - b.id);
};

async function UserList() {
  const users: User[] = await getUsers();
  return (
    <div className="container">
      <ModalOpener type="add">
        <AdminUserForm id={4} name="" email="" age={0} role="" />
      </ModalOpener>
      <div className="mt-[100px]">
        <div className="grid grid-cols-5 bg-gray-200 dark:bg-[#292929] py-5 pl-3 mb-6">
          <p className="text-[20px] text-[#6A6A65] dark:text-white">ID</p>
          <p className="text-[20px] text-[#6A6A65] dark:text-white">Name</p>
          <p className="text-[20px] text-[#6A6A65] dark:text-white">Email</p>
          <p className="text-[20px] text-[#6A6A65] dark:text-white">Role</p>
          <p className="text-[20px] text-[#6A6A65] dark:text-white">Age</p>
        </div>
        <ul className="flex flex-col gap-7">
          {users.map((user) => {
            return (
              <UserListItem
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                age={user.age}
                role={user.role}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
