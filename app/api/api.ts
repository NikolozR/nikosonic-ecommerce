const baseUrl = process.env.BASE_URL

export async function getUserAuth(email:string, password:string) {
  const response = await fetch(baseUrl + "/api/auth-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  return response
}

export async function getAllUsers() {
    const response = await fetch(baseUrl + "/api/get-users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    return response
}