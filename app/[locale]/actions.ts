import { redirect } from "next/navigation";
import { cookies } from "next/headers";
var bcrypt = require('bcryptjs');

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

export async function hashPassword(unHashedPassword: string) {
  var salt = await bcrypt.genSaltSync(10) 
  var hash = await bcrypt.hashSync(unHashedPassword, salt);
  return hash
}
export async function testPassword(unHashedPassword: string, hashedPassword: string) {
  const toTest = await bcrypt.compareSync(unHashedPassword, hashedPassword)
  return toTest
}