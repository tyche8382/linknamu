import { connection } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export async function GET() {
  await connection();
  try {
    return Response.json(await getClickCounts());
  } catch (err) {
    console.error("클릭 수 조회 실패:", err);
    // TODO: 임시 진단용 — 원인 확인 후 제거 (값은 노출하지 않고 이름만)
    const debug = {
      envKeys: Object.keys(process.env).filter((k) => /mongo/i.test(k)).map((k) => JSON.stringify(k)),
      vercelEnv: process.env.VERCEL_ENV,
      commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7),
    };
    return Response.json({ error: "클릭 수를 불러오지 못했어요.", debug }, { status: 500 });
  }
}
