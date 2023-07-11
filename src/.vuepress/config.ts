import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { feedPlugin } from "vuepress-plugin-feed2";
import { commentPlugin } from "vuepress-plugin-comment2";
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
    feedPlugin({
      hostname: "docs.dragonjay.top",
      atom: true,
      json: true,
      rss: true,
    }),
    commentPlugin({
      provider: "Waline", // Artalk | Giscus | Waline | Twikoo
      serverURL: "https://com.dragonjay.top",
      // 在这里放置其他选项
      // ...
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
