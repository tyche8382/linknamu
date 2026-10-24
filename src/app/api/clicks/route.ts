import { connection } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export async function GET() {
  await connection();
  return Response.json(await getClickCounts());
}
