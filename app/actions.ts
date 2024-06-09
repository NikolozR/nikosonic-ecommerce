"use server";
import { deleteUser} from "./api/api";
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { revalidateTag } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";

const baseUrl = process.env.BASE_URL;

export async function handleDeleteSubmit(id: number) {
  await deleteUser(id);
  revalidateTag("users");
}
export async function getAuth0User() {
  const session = await getSession();
  const user = session?.user;
  return user;
}
export async function handleProfileChange(formData: FormData) {
  const sub = (await getAuth0User())?.sub;
  let body: UpdateUser = {sub: sub, name: '', surname: '', displayname: ""}
  formData.forEach((val, key) => {
    if (key === 'FirstName') body.name = val.toString();
    if (key === 'LastName') body.surname = val.toString();
    if (key === 'DisplayName') body.displayname = val.toString();
  })
  const res = await fetch(baseUrl + "/api/users/update", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (res.status === 200) {
    console.log("first")
    revalidateTag('singleUser')
    return await res.json()
  }
}