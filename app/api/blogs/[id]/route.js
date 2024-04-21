export async function GET(request, { params }) {
  try {
    const id = params.id;
    const response = await fetch("https://dummyjson.com/posts/" + id);
    if (response.status === 200) {
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    } else {
      return new Response("Not Found", {
        status: 404,
      });
    }
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
}
