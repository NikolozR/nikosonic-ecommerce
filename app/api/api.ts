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
  const response = await fetch(baseUrl + "/api/get-users", {
    cache: 'no-store',
    next: {tags: ['users']},
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data.rows;
}

export async function updateUser({ id, name, email, age, role }: User) {
  const response = await fetch(baseUrl + "/api/update-user", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
      email,
      age,
      role
    }),
  });
  return await response.json();
}

export async function createUser({name, email, age, passwordHash, role}: CreateUser) {
  try {
    const response = await fetch(baseUrl + "/api/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        age,
        passwordHash,
        role
      }),
    });
    return await response.json();
  } catch (err) {
    return NextResponse.json({err}, {status: 500, statusText: "Invalid credentials"})
  } 
}


export async function deleteUser(id: number) {
  try {
    const response = await fetch(baseUrl + "/api/delete-user/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (err) {
    console.log(err)
  }
}