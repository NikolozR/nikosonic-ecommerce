"use server";
import { NextResponse } from "next/server";
const baseUrl = process.env.BASE_URL;

export async function getUserAuth(email: string, password: string) {
  const response = await fetch(baseUrl + "/api/auth-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return response;
}

export async function getAllUsers() {
  const response = await fetch(baseUrl + "/api/users/getAll", {
    next: { tags: ["users"] },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data.rows;
}

export async function updateUser({ id, name, email, age, role }: User) {
  const response = await fetch(baseUrl + "/api/users/update", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
      email,
      age,
      role,
    }),
  });
  return await response.json();
}

export async function createUser({
  name,
  email,
  age,
  passwordHash,
  role,
}: CreateUser) {
  try {
    const response = await fetch(baseUrl + "/api/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        age,
        passwordHash,
        role,
      }),
    });
    return await response.json();
  } catch (err) {
    return NextResponse.json(
      { err },
      { status: 500, statusText: "Invalid credentials" }
    );
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await fetch(baseUrl + "/api/users/delete/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function emptyCart(userId: number) {
  try {
    const response = await fetch(baseUrl + "/api/cart/empty/" + userId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function addCart(id: number, productId: number) {
  const response = await fetch(baseUrl + "/api/cart/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: id,
      productId: productId,
    }),
  });
  return await response.json();
}

export async function getCart(userId: number) {
  const response = await fetch(baseUrl + "/api/cart/getAllcart/" + userId, {
    cache: 'force-cache',
    next: { tags: ["cart"] },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

export async function singleDelete(userId:number, productId: number) {
  const response = await fetch(
    baseUrl + "/api/cart/remove",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
      }),
    },
  );
  return await response.json();
}
