import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-12 sm:max-w-lg sm:py-16">
      <div className="-mb-4 flex justify-end">
        <ThemeToggle />
      </div>
      <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
      <LinkList links={profile.links} />
      <footer className="mt-auto pt-8 text-center text-xs text-neutral-400">링크나무</footer>
    </main>
  );
}
