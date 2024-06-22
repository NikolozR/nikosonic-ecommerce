import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const { type, userId, phone, address, city, country, addressName }: CreateAddress = await req.json();
    
    const result = await sql`
      INSERT INTO addresses (user_id, type, phone, address, city, country, address_name)
      VALUES (${userId}, ${type}, ${phone}, ${address}, ${city}, ${country}, ${addressName})`;    

    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
