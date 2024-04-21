import { headers } from "next/headers";
export const host = headers().get('host')
export const proto = headers().get('x-forwarded-proto')