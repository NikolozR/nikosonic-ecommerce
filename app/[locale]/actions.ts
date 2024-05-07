import { redirect } from "next/navigation";
import { cookies } from "next/headers";
var bcrypt = require('bcryptjs');
const baseUrl = process.env.BASE_URL
export async function login(email: string, password: string) {
  const cookieStore = cookies()
  const response = await fetch(baseUrl + "/api/auth-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  const user = await response.json();
  console.log(user.rows[0].id)
  cookieStore.set("user", JSON.stringify(user.rows[0]));
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