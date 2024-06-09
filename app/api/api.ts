"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
const baseUrl = process.env.BASE_URL;

export async function uploadAvatar(url: string) {
  const session = await getSession();
  const user = session?.user;
  await fetch(baseUrl + "/api/users/setAvatar", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: url,
      sub: user?.sub,
    }),
  });
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
export async function getUserBySub(sub: string) {
    const response = await fetch(baseUrl + "/api/users/get/" + sub, {
      next: {tags: ['singleUser']},
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })

    const data = await response.json();
    return data.rows[0];
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

export async function updateUser(body: UpdateUser) {
  const res = await fetch(baseUrl + "/api/users/update", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res;
}

export async function createProduct(body: CreateProduct) {
  const res = await fetch(baseUrl + "/api/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res;
}