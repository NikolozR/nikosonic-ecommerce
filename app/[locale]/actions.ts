import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserAuth } from "../api/api";
var bcrypt = require("bcryptjs");

export async function login(email: string, password: string) {
  const cookieStore = cookies();
  const response = await getUserAuth(email, password);
  const user: User = await response.json();
  cookieStore.set("user", JSON.stringify(user));
  redirect("/");
}
export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete("user");
  redirect("/login");
}
export async function hashPassword(unHashedPassword: string) {
  var salt = await bcrypt.genSaltSync(10);
  var hash = await bcrypt.hashSync(unHashedPassword, salt);
  return hash;
}
export async function testPassword(
  unHashedPassword: string,
  hashedPassword: string
) {
  const toTest = await bcrypt.compareSync(unHashedPassword, hashedPassword);
  return toTest;
}
