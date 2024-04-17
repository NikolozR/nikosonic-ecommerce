import LoginForm from "@/components/LoginForm";
import { login } from "../actions";

function Login() {
  const handleLogin = async (email, password) => {
    "use server";
    await login(email, password);
  };
  return <LoginForm handleLogin={handleLogin} />;
}

export default Login;
