import LoginForm from "@/app/components/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function handleLogin(username, password) {
  const res = await fetch(proto + "://" + host + "http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (res.status === 200) {
    const { token } = await res.json();
    cookies().set("token", token);
    redirect("/");
  } else {
    cookies().set("token", "");
  }
}

function Login() {
  return <LoginForm handleLogin={handleLogin} />;
}

export default Login;
