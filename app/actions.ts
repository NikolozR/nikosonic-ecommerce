"use server";
import { createProduct, updateUser } from "./api/api";
import { revalidateTag } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";
import { put } from "@vercel/blob";

export async function getAuth0User() {
  const session = await getSession();
  const user = session?.user;
  return user;
}
export async function handleProfileChange(formData: FormData) {
  const sub = (await getAuth0User())?.sub;
  let body: UpdateUser = { sub: sub, name: "", surname: "", displayname: "" };
  formData.forEach((val, key) => {
    if (key === "FirstName") body.name = val.toString();
    if (key === "LastName") body.surname = val.toString();
    if (key === "DisplayName") body.displayname = val.toString();
  });
  const res = await updateUser(body);
  if (res.status === 200) {
    revalidateTag("singleUser");
    return await res.json();
  }
}

export async function handleProductAddSubmit(formData: FormData) {
  let body: CreateProduct = {
    name: "",
    brand: "",
    color: "",
    price: 0,
    thumbnail_url: "",
    gallery_urls: [],
    description: ""
  };
  formData.forEach((val, key) => {
    if (val !== '' && key !== 'gallery_url' && key !== 'thumbnail_url') {
      body[key] = val;
    }
  })
  const imageFiles = formData.getAll('gallery_url') as File[];
  const imageFile = formData.get('thumbnail_url') as File;
  const thumbBlob = await put(imageFile.name, imageFile, {
    access: 'public',
  })
  body.thumbnail_url = thumbBlob.url;
  for (const i of imageFiles) {
    const blob = await put(i.name, i, {
      access: 'public',
    });
    body.gallery_urls.push(blob.url)
  }
  const res = await createProduct(body);
  if (res.status === 200) {
    revalidateTag("products");
    return await res.json();
  }
}
