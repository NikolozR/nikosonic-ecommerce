"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { revalidateTag } from "next/cache";
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
    method: "GET",
    cache: 'no-store',
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data.rows && data.rows[0];
}

export async function getReviews(productId: string) {
  const res = await fetch(baseUrl + "/api/reviews/get/" + productId, {
    next: {
      tags: ['reviews']
    },
    method: "GET",
    cache: 'no-store',
    headers: { "Content-Type": "application/json" },
  });
  return (await res.json()).rows;
}

export async function createReview(body: CreateReview) {
  try {
    await fetch(baseUrl + "/api/reviews/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    revalidateTag("reviews");
  } catch (e) {
    console.log(e);
  }
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