"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { revalidatePath, revalidateTag } from "next/cache";
import { getAuth0User } from "../actions";
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
    next: { tags: ["singleUser"] },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  return data.rows[0];
}
export async function getUserByID(id: number) {
  const response = await fetch(baseUrl + "/api/users/get?id=" + id, {
    next: { tags: ["singleUser"] },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

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
  revalidateTag("products");
  return res;
}
export async function getAllBlogs() {
  try {
    const res = await fetch(baseUrl + "/api/blogs/get", {
      next: {
        tags: ["blogs"],
      },
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return (await res.json()).rows;
  } catch (e) {
    console.log(e);
  }
}

export async function getBlogByID(id: number) {
  const res = await fetch(baseUrl + "/api/blogs/get/" + id, {
    next: {
      tags: ["singleBlog"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows[0];
}

export async function createBlog(body: CreateBlog) {
  const res = await fetch(baseUrl + "/api/blogs/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  revalidateTag("blogs");
  return res;
}

export async function getNewest(limit: number) {
  const res = await fetch(baseUrl + "/api/products/getNewest/" + limit, {
    next: {
      tags: ["products", "products-newest"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}
export async function getMostVieweds(limit: number) {
  const res = await fetch(baseUrl + "/api/products/getPopular/" + limit, {
    next: {
      tags: ["products", "products-popular"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}

export async function getAllProducts() {
  const res = await fetch(baseUrl + "/api/products/get", {
    next: {
      tags: ["products"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}

export async function getProductsByFilter(searchParams: {
  [key: string]: string;
}) {
  let stringBuilder = "?";
  for (let key in searchParams) {
    if (searchParams.hasOwnProperty(key)) {
      stringBuilder += `${key}=${searchParams[key]}&`;
    }
  }
  stringBuilder = stringBuilder.slice(0, -1);

  const res = await fetch(baseUrl + "/api/products/get" + stringBuilder, {
    next: {
      tags: ["products"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return (await res.json()).rows;
}
export async function getBrands() {
  const res = await fetch(baseUrl + "/api/brands/get", {
    next: {
      tags: ["brands"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}

export async function increaseView(productId: Number) {
  await fetch(baseUrl + "/api/products/incrementViews/" + productId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  });
  revalidateTag("products-popular");
}

export async function getSingleProduct(productId: string) {
  const res = await fetch(baseUrl + "/api/products/get/" + productId, {
    next: {
      tags: ["product"],
    },
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data.rows && data.rows[0];
}

export async function getReviews(productId: string) {
  const res = await fetch(baseUrl + "/api/reviews/get/" + productId, {
    next: {
      tags: ["reviews"],
    },
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}

export async function createReview(body: CreateReview) {
  await fetch(baseUrl + "/api/reviews/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  revalidateTag("reviews");
  revalidateTag("products");
  revalidatePath("/products/[productId]", "page");
}

export async function getProductIds() {
  const res = await fetch(baseUrl + "/api/products/get/ids", {
    next: {
      tags: ["products"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}

export async function addCartItem(
  userId: number,
  productId: number,
  quantity: number
) {
  fetch(baseUrl + "/api/cart/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      productId,
      quantity,
    }),
  });
  revalidateTag("cart");
}

export async function getCartItems(userId: number) {
  const res = await fetch(baseUrl + "/api/cart/get/" + userId, {
    next: {
      tags: ["cart"],
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}

export async function removeCartItem(userId: number, productId: number) {
  const body = {
    userId,
    productId,
  };
  await fetch(baseUrl + "/api/cart/remove/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  revalidateTag("cart");
}

export async function clearCart() {
  const user: User = await getUser();
  await fetch(baseUrl + "/api/cart/empty/" + user.id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  revalidateTag("cart");
}

export async function decrementCartItem(
  userId: number,
  productId: number,
  quantity: number
) {
  await fetch(baseUrl + "/api/cart/decrement/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      productId,
      quantity,
    }),
  });
  revalidateTag("cart");
}

export async function getUser() {
  const sub = (await getAuth0User())?.sub;
  const user = await getUserBySub(sub);
  return user;
}

export async function sendCheckoutRequest(cartItems: CartItem[]) {
  const res = await fetch(baseUrl + "/api/cart/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartItems),
  });
  return await res.json();
}

export async function getUserBlogs(userId: number) {
  const res = await fetch(baseUrl + '/api/blogs/user/get/' + userId, {
    next: {
      tags: ['blogs']
    },
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  console.log(res)
  return (await res.json()).rows;
}


export async function deleteBlog(blogId: number) {
  await fetch(baseUrl + '/api/blogs/delete/' + blogId, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
  revalidateTag('blogs')
}


export async function subscribeNewsLetter(email: string) {
  try {
    const res = await fetch(baseUrl + '/api/newsletter/subscribe', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    const result = await res.json();
    if (res.status === 201) {
      return { success: true, message: "Email subscribed successfully" };
    } else if (res.status === 409) {
      return { success: false, message: "Email is already subscribed" };
    } else {
      return { success: false, message: result.error || "Failed to subscribe email" };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: "An unexpected error occurred" };
  }
}
