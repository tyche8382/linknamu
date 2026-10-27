import { connection } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export async function GET() {
  await connection();
  try {
    return Response.json(await getClickCounts());
  } catch (err) {
    console.error("클릭 수 조회 실패:", err);
    return Response.json({ error: "클릭 수를 불러오지 못했어요." }, { status: 500 });
  }
}
