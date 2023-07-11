import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { shikiPlugin } from "@vuepress/plugin-shiki";
export default defineUserConfig({
  base: "/",
  theme: hopeTheme({
    darkmode: "auto",
    iconAssets: "fontawesome",
  }),
  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
  },
  plugins: [
    shikiPlugin({
      // 你的选项
      theme: "one-dark-pro",
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
