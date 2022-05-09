// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  //파일 확장자가 js , jsx , ts 및 tsx 인 모든 템플릿 파일 이 src 하위 폴더 내에 포함
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
