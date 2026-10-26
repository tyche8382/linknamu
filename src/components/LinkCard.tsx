import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  clicks: number;
  onClick: () => void;
};

export default function LinkCard({ link, clicks, onClick }: LinkCardProps) {
  // mailto: 등은 새 탭으로 열면 빈 탭만 남으므로 웹 링크만 새 탭으로 연다
  const isWebLink = /^https?:\/\//.test(link.url);

  return (
    <a
      href={link.url}
      target={isWebLink ? "_blank" : undefined}
      rel={isWebLink ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="relative block w-full rounded-3xl border border-white/70 bg-white/45 px-16 py-[1.125rem] text-center font-semibold shadow-[0_4px_20px_-6px_rgba(166,94,56,0.18)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_28px_-8px_rgba(166,94,56,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)] dark:hover:bg-white/10"
    >
      {link.icon && (
        <span aria-hidden="true" className="mr-2">
          {link.icon}
        </span>
      )}
      {link.title}
      <span
        aria-label={`클릭 ${clicks}회`}
        className="absolute top-1/2 right-5 -translate-y-1/2 text-xs font-normal text-muted/80 tabular-nums"
      >
        {clicks.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
