"use server";
import {
  createAddress,
  createBlog,
  createProduct,
  getUser,
  getUserBySub,
  sendCheckoutRequest,
  updateBlog,
  updateUser,
} from "./api/api";
import { getSession } from "@auth0/nextjs-auth0";
import { put } from "@vercel/blob";
import { redirect } from "next/navigation";

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
    description: "",
    category: "headband",
  };
  formData.forEach((val, key) => {
    if (val !== "" && key !== "gallery_urls" && key !== "thumbnail_url") {
      body[key] = val;
    }
  });
  const imageFiles = formData.getAll("gallery_urls") as File[];
  const imageFile = formData.get("thumbnail_url") as File;
  const thumbBlob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  body.thumbnail_url = thumbBlob.url;
  for (const i of imageFiles) {
    const blob = await put(i.name, i, {
      access: "public",
    });
    body.gallery_urls.push(blob.url);
  }
  const res = await createProduct(body);
  if (res.status === 200) {
    return await res.json();
  }
}
export async function handleBlogCreation(formData: FormData) {
  const sub: string = (await getAuth0User())?.sub;
  const user: User = await getUserBySub(sub);
  let body: CreateBlog = {
    title: "",
    content: "",
    author_id: user.id,
    thumbnail_url: "",
  };
  formData.forEach((val, key) => {
    if (val !== "" && key !== "thumbnail_url") {
      body[key] = val;
    }
  });
  const imageFile = formData.get("thumbnail_url") as File;
  const thumbBlob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  body.thumbnail_url = thumbBlob.url;
  const res = await createBlog(body);
  if (res.status === 200) {
    return await res.json();
  }
}
export async function handleBlogUpdate(formData: FormData, blog_id: number) {
  let body: UpdateBlog = {
    title: "",
    content: "",
    blog_id: blog_id,
    thumbnail_url: "",
  };
  formData.forEach((val, key) => {
    if (val !== "" && key !== "thumbnail_url") {
      body[key] = val;
    }
  });
  const imageFile = formData.get("thumbnail_url") as File;
  const thumbBlob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  body.thumbnail_url = thumbBlob.url;
  const res = await updateBlog(body);
  if (res.status === 200) {
    return await res.json();
  }
}

export async function setSearchParams(
  name: string,
  value: string,
  currentSearchParams: { [key: string]: string }[],
  isCheckbox: boolean,
  checked?: boolean
) {
  let updatedSearchParams = [...currentSearchParams];
  const index = updatedSearchParams.findIndex((param) => param[name]);

  if (isCheckbox) {
    if (checked) {
      if (index !== -1) {
        updatedSearchParams[index][name] += `,${value}`;
      } else {
        updatedSearchParams.push({ [name]: value });
      }
    } else {
      if (index !== -1) {
        const values = updatedSearchParams[index][name]
          .split(",")
          .filter((v) => v !== value);
        if (values.length > 0) {
          updatedSearchParams[index][name] = values.join(",");
        } else {
          updatedSearchParams.splice(index, 1);
        }
      }
    }
  } else {
    if (index !== -1) {
      if (value === "") {
        updatedSearchParams.splice(index, 1);
      } else {
        updatedSearchParams[index][name] = value;
      }
    } else if (value !== "") {
      updatedSearchParams.push({ [name]: value });
    }
  }

  const params = new URLSearchParams();
  updatedSearchParams.forEach((param) => {
    const [key, val] = Object.entries(param)[0];
    params.append(key, val);
  });

  return params;
}

export async function handleCheckout(cartItems: CartItem[], shippingAddress: MyAddress | AddressInput, billingAddress: MyAddress | AddressInput) {
  const { url } = await sendCheckoutRequest(cartItems, shippingAddress, billingAddress);
  redirect(url)
}


export async function handleAddressCreation(formData: FormData) {
  const user: User = await getUser();
  let body: CreateAddress = {
    userId: user.id,
    city: '',
    country: '',
    address: '',
    addressName: '',
    type: 'shipping',
    phone: ''
  };
  formData.forEach((val, key) => {
    if (val !== "") {
      body[key] = val;
    }
  });
  await createAddress(body);
}