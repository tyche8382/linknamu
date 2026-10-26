export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon?: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
  links: LinkItem[];
};

// 백엔드가 붙기 전까지 사용하는 샘플 데이터
export const profile: Profile = {
  name: "정개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile.jpg",
  links: [
    { id: "github", title: "깃허브", url: "https://github.com/tyche8382", icon: "💻" },
    { id: "blog", title: "블로그", url: "https://blog.naver.com/tyche8382", icon: "📝" },
    { id: "email", title: "이메일", url: "mailto:tyche8382@gmail.com", icon: "✉️" },
  ],
};
