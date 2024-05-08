import Modal from "./Modal";
import AdminUserForm from "./AdminUserForm";
import EditButton from "./EditButton";
import { handleDeleteSubmit, handleUpdateSubmit } from "../actions";
import DeleteButton from "./DeleteButton";
import { ModalProvider } from "../../providers/ModalProvider";

const handleSubmit = async (formData: FormData) => {
  "use server";
  return await handleUpdateSubmit(formData);
};

const handleDelete = async (id: number) => {
  'use server';
  return await handleDeleteSubmit(id);
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
        <ModalProvider>
          <EditButton />
          <Modal>
            <AdminUserForm
              id={id} 
              name={name}
              email={email}
              role={role}
              age={age}
              type="edit"
              handleSubmit={handleSubmit}
            ></AdminUserForm>
          </Modal>
        </ModalProvider>
        <DeleteButton id={id} handleDelete={handleDelete} />
      </div>
    </li>
  );
}

export default UserListItem;
