import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  clicks: number;
  onClick: () => void;
};

export default function LinkCard({ link, clicks, onClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-neutral-200 bg-white px-16 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:translate-y-0 dark:border-neutral-700 dark:bg-neutral-900"
    >
      {link.title}
      <span
        aria-label={`클릭 ${clicks}회`}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-xs font-normal text-neutral-400 tabular-nums"
      >
        {clicks.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
