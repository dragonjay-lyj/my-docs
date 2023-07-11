import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { feedPlugin } from "vuepress-plugin-feed2";
import { commentPlugin } from "vuepress-plugin-comment2";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { componentsPlugin } from "vuepress-plugin-components";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
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
    autoCatalogPlugin({
      //插件选项
    }),
    componentsPlugin({
      
    }),
    readingTimePlugin({
      // 你的选项
    }),
    sitemapPlugin({
      hostname: "docs.dragonjay.top",
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
