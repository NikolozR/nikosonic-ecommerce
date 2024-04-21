import LoginForm from "@/app/components/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { host, proto } from "@/app/constants";

async function handleLogin(username, password) {
  "use server";
  const res = await fetch(proto + "://" + host + "/api/login", {
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
