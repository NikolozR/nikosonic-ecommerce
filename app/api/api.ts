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

export async function updateUser({ id, name, email }: User) {
  const response = await fetch(baseUrl + "/api/users/update", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
      email,
    }),
  });
  return await response.json();
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

