"use server";
import { createProduct, updateUser } from "./api/api";
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
    category: 'headband'
  };
  formData.forEach((val, key) => {
    if (val !== '' && key !== 'gallery_urls' && key !== 'thumbnail_url') {
      body[key] = val;
    }
  })
  const imageFiles = formData.getAll('gallery_urls') as File[];
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
    return await res.json();
  }
}

export async function setSearchParams(
  name: string,
  value: string,
  currentSearchParams: { [key: string]: string }[],
  isCheckbox: boolean,
  checked?: boolean,
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
