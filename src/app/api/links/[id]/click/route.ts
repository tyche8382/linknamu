import type { NextRequest } from "next/server";
import { profile } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

export async function POST(_req: NextRequest, ctx: RouteContext<"/api/links/[id]/click">) {
  const { id } = await ctx.params;

  if (!profile.links.some((link) => link.id === id)) {
    return Response.json({ error: "존재하지 않는 링크예요." }, { status: 404 });
  }

  try {
    return Response.json({ id, count: await incrementClick(id) });
  } catch (err) {
    console.error("클릭 수 기록 실패:", err);
    return Response.json({ error: "클릭 수를 기록하지 못했어요." }, { status: 500 });
  }
}
