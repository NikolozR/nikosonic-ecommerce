import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { headers } from "next/headers";

export async function login(username: string, password: string) {
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

export function getRoute() {
  const host = headers().get("host");
  let pathname = headers().get("referer");
  const p = pathname?.slice(pathname.indexOf(host || '')).replace(host || '', "");
  const pathSegments = p?.slice(1).split("/");
  const pathWithoutLocale = pathSegments?.slice(1).join("/");
  const newPath = `${pathWithoutLocale}`;
  console.log(newPath)
  return newPath
}