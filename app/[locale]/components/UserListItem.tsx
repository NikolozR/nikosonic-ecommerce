import Modal from "./Modal";
import AdminUserForm from "./AdminUserForm";
import EditButton from "./EditButton";
import { handleAdminSubmit } from "../actions";

const handleSubmit = async (formData: FormData) => {
  'use server'
  return await handleAdminSubmit(formData)
}


function UserListItem({ id, name, email, age, role }: User) {
  return (
    <li className="grid cursor-default grid-cols-5 relative pl-3">
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{role}</p>
      <p>{age}</p>
      <div className="absolute right-3 flex gap-4">
        <EditButton />        <Modal>
          <AdminUserForm id={id} name={name} email={email} role={role} age={age} type="edit" handleSubmit={handleSubmit}></AdminUserForm>
        </Modal>
        <div className="cursor-pointer">delete</div>
      </div>
    </li>
  );
}

export default UserListItem;
