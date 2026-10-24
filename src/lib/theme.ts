export const THEME_STORAGE_KEY = "linknamu-theme";

// 첫 화면이 그려지기 전에 테마를 적용해 깜빡임을 막는 스크립트 (layout의 <head>에서 실행)
// 저장된 선택이 없으면 시스템 설정을 따른다.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;
