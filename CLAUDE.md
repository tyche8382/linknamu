@AGENTS.md

# 링크나무 (linknamu)

Link in Bio 서비스. 프로필(사진·이름·한 줄 소개)과 링크 카드 목록을 한 페이지에 보여준다. 화면 구성은 `wireframe.png` 참고.

## Stack & conventions

- Next.js 16 App Router, TypeScript, Tailwind CSS v4 (`src/app/`)
- 컴포넌트는 `src/components/`에 작성
- 환경 변수는 `.env.local`에 저장 (브라우저에 노출할 값만 `NEXT_PUBLIC_` 접두사)
- 모바일 우선 반응형: 기본 스타일은 모바일 기준, `sm:` 이상에서 확장
- 프로필/링크 데이터는 현재 `src/data/profile.ts`의 샘플 데이터
- 다크모드: `html`의 `.dark` 클래스로 전환 (`@custom-variant dark`). 선택은 localStorage에 저장, 없으면 시스템 설정. `src/lib/theme.ts`, `src/components/ThemeToggle.tsx`
- 클릭 수: `POST /api/links/[id]/click`로 기록, `GET /api/clicks`로 조회. 저장소는 `data/clicks.json`(`src/lib/clicks.ts`, git 제외) — 서버리스 배포 전 DB로 교체 필요

## Commands

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드 (`LayoutProps` 등 라우트 타입도 이때 생성됨)
- `npm run lint`
