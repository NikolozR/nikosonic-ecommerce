import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export const GET = async () => {
    const session = await getSession();
    console.log(session?.user)
    console.log("OEEEEEEEEEEEEEEEEEEEEEEEEEeee")
    redirect('/')
    return NextResponse.json({}, { status: 201 });
}