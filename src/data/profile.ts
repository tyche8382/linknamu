export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
  links: LinkItem[];
};

// 백엔드가 붙기 전까지 사용하는 샘플 데이터
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "/avatar.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "blog", title: "기술 블로그", url: "https://velog.io" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com" },
    { id: "youtube", title: "YouTube 채널", url: "https://youtube.com" },
  ],
};
