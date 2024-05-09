import LoginForm from "../../components/LoginForm";
import { login } from "../../actions";

const handleLogin = async (email: string, password: string) => {
  "use server";
  await login(email, password);
};
function Login() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

export default Login;
