import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-10 px-6 py-10 sm:max-w-lg sm:px-8 sm:py-16">
      <div className="-mb-6 flex justify-end">
        <ThemeToggle />
      </div>
      <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
      <LinkList links={profile.links} />
      <footer className="mt-auto pt-10 text-center text-xs tracking-widest text-muted/70">링크나무</footer>
    </main>
  );
}
