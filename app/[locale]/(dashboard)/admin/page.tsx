import UserList from "../../components/UserList";
import { ModalProvider } from "../../../providers/modalProvider";

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
