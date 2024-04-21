export async function POST(request) {

    const {username, password} = await request.json()

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      if (response.status === 200) {
        const user = await response.json();
        return new Response(JSON.stringify({token: user.token}), {
          status: 200,
        })
      } else {
        return new Response('Not Logged In', {
          status: 500,
        })
      }
    } catch(e) {
      console.log(e)
    }


}

