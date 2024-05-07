import ModalOpener from "./ModalOpener";
import AdminUserForm from "./AdminUserForm";
function UserListItem({ id, name, email, age, role }: User) {
  return (
    <li className="grid cursor-default grid-cols-5 relative pl-3">
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{role}</p>
      <p>{age}</p>
      <div className="absolute right-3 flex gap-4">
        <ModalOpener type="edit">
          <AdminUserForm
            id={id}
            name={name}
            email={email}
            age={age}
            role={role}
          ></AdminUserForm>
        </ModalOpener>
        <div className="cursor-pointer">delete</div>
      </div>
    </li>
  );
}

export default UserListItem;
