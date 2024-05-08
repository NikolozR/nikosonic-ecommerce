import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserAuth, updateUser, createUser, deleteUser } from "../api/api";
import { revalidateTag } from "next/cache";
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
export async function handleUpdateSubmit(formData: FormData) {
  const {id, name, email, age, role} = Object.fromEntries(formData)
  const userData = {
    id: Number(id.toString()),
    name: name.toString(),
    email: email.toString(),
    age: Number(age.toString()),
    role: role.toString()
  }
  await updateUser(userData)
  revalidateTag('users')
}

export async function handleAddSubmit(formData: FormData) {
  const {name, password, email, age, role} = Object.fromEntries(formData)
  const hashedPassword: string = await hashPassword(password.toString())
  const userData: CreateUser = {
    name: name.toString(),
    email: email.toString(),
    passwordHash: hashedPassword,
    age: Number(age.toString()),
    role: role.toString()
  }
  await createUser(userData)
  revalidateTag('users')
}

export async function handleDeleteSubmit(id: number) {
  await deleteUser(id)
  revalidateTag('users')
}
