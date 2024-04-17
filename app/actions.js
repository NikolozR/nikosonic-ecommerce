import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(username, password) {
    const cookieStore = cookies()
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
  const user = await response.json();
  cookieStore.set("token", user.token);
  redirect('/')
}

export async function logout() {
    const cookieStore = cookies()
    cookieStore.delete("token");
    redirect('/login')
} 



