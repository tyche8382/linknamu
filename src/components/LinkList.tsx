"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import type { ClickCounts } from "@/lib/clicks";
import LinkCard from "@/components/LinkCard";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  const [counts, setCounts] = useState<ClickCounts>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then(setCounts)
      .catch(() => {});
  }, []);

  function handleClick(id: string) {
    // 새 탭으로 이동하는 중에도 요청이 끝까지 전송되도록 keepalive 사용
    fetch(`/api/links/${encodeURIComponent(id)}/click`, { method: "POST", keepalive: true }).catch(() => {});
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  if (links.length === 0) {
    return <p className="text-center text-sm text-muted">아직 등록된 링크가 없어요.</p>;
  }

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} clicks={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
