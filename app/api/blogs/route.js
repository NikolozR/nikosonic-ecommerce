export async function GET() {
  console.log("MFETCHAVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEN")
  try {
    const res = await fetch("https://dummyjson.com/posts");
    if (res.status === 200) {
        const data = await res.json();
        return new Response(JSON.stringify(data.posts), {
          status: 200,
        });
    } else {
        return new Response("Not Found", {
          status: 404,
        });
    }
  } catch (e) {
    console.log(e)
    return new Response(JSON.stringify(e), {
        status: 500
    })
  }
}
