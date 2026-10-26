import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 밝은 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-gradient-to-b from-white to-white/40 p-1.5 shadow-[0_16px_36px_-12px_rgba(166,94,56,0.45)] dark:from-white/25 dark:to-white/5 dark:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.7)]">
        <Image
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          className="size-28 rounded-full object-cover sm:size-32"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-[1.75rem]">{name}</h1>
      <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted sm:max-w-sm">{bio}</p>
    </header>
  );
}
