import UserList from "../../components/UserList";
import { ModalProvider } from "../../../providers/ModalProvider";

function AdminPanel() {
  return (
    <div>
      <ModalProvider>
        <UserList></UserList>
      </ModalProvider>
    </div>
  );
}

export default AdminPanel;
