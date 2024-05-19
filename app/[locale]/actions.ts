"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {getUserAuth, updateUser, createUser, deleteUser, emptyCart, addCart, getCart} from "../api/api";
import { revalidateTag } from "next/cache";

var bcrypt = require("bcryptjs");

const baseUrl = process.env.BASE_URL;

export async function login(email: string, password: string) {
  const cookieStore = cookies();
  const response = await getUserAuth(email, password);
  const user: User = await response.json();
  cookieStore.set("user", JSON.stringify(user));
  redirect("/");
}
export async function register(name: string, email: string, password: string, age: number) {
  const cookieStore = cookies();
  const hashedPassword: string = await hashPassword(password);
  const userData: CreateUser = {
    name,
    email,
    passwordHash: hashedPassword,
    age,
    role: "user",
  };
  const user = await createUser(userData);
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
export async function testPassword(unHashedPassword: string, hashedPassword: string) {
  const toTest = await bcrypt.compareSync(unHashedPassword, hashedPassword);
  return toTest;
}
export async function handleUpdateSubmit(formData: FormData) {
  const { id, name, email, age, role } = Object.fromEntries(formData);
  const userData = {
    id: Number(id.toString()),
    name: name.toString(),
    email: email.toString(),
    age: Number(age.toString()),
    role: role.toString(),
  };
  await updateUser(userData);
  revalidateTag("users");
}

export async function handleAddSubmit(formData: FormData) {
  const { name, password, email, age, role } = Object.fromEntries(formData);
  const hashedPassword: string = await hashPassword(password.toString());
  const userData: CreateUser = {
    name: name.toString(),
    email: email.toString(),
    passwordHash: hashedPassword,
    age: Number(age.toString()),
    role: role.toString(),
  };
  await createUser(userData);
  revalidateTag("users");
}

export async function handleDeleteSubmit(id: number) {
  await deleteUser(id);
  revalidateTag("users");
}
async function getUserId() {
  const Cookiestore = cookies();
  const cookie = Cookiestore.get("user")?.value;
  const user = JSON.parse(cookie ?? "");
  const userId = user.responseUser.id;
  return userId
}

export async function getAllCart() {
  const userId: number = await getUserId();
  const cartRes = await getCart(userId)
  const cart = await cartRes.json();
  return cart;
}

export async function addCartFunction(productId: number) {
  const userId: number = await getUserId();
  await addCart(userId, productId);
  revalidateTag('cart')
}

export async function cartCount() {
  const userId = await getUserId();
  const productArr = await getCart(userId);
  const product = await productArr.json();
  const count = product?.rows.reduce((acc: number, curr: any) => {
    return acc + curr.quantity;
  }, 0);
  return count;
}

export async function incrementItemAmount(productId: number) {
  const userId = await getUserId()
  const response = await fetch(baseUrl + "/api/cart/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
      productId: productId,
    }),
  });
  revalidateTag('cart')
  return await response.json();
}

export async function decrementCart(productId: number) {
  const userId = await getUserId();
  try {
    const response = await fetch(baseUrl + "/api/cart/decrement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function emptyAllInCart() {
  const userId = await getUserId();
  await emptyCart(userId);
  revalidateTag("cart");
}
