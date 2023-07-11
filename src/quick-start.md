---
title: Getting Started
icon: fa-solid fa-hourglass-start
---

## 💻 Installation

Install the latest version in the blog root directory [recommended

```bash
git clone -b main https://github.com/DragonJay666/hexo-theme-anzhiyu-en.git themes/anzhiyu
```

**Upgrade method**：In the theme directory, run

```bash
git pull
```

Or just delete the **theme/anzhiyu** folder and reinstall it.

:::

## ⚙ Application Topics

Modify the hexo configuration file `_config.yml` and change the theme to `anzhiyu`.

```yml
theme: anzhiyu
```

## Installing the pug and stylus rendering plug-ins

```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## Better configuration for upgrading themes

- macos/linux
  Run it in the blog root directory

  ```bash
  cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
  ```

- windows
  Copy the file `/themes/anzhiyu/_config.yml` to the hexo root directory and rename it `_config.anzhiyu.yml`.

Configurations in `_config.anzhiyu.yml` have a higher priority than `_config.yml`.

## Start hexo locally

```bash
hexo cl
hexo g
hexo s
```

At this point it will be in to see the results.

![](https://i.postimg.cc/s2km1ZC1/localhost-5000.png)

## Problems?

Can be submitted at the github [issues](https://github.com/DragonJay666/hexo-theme-anzhiyu-en/issues)

## Thematic design

[@张洪 Heo](https://github.com/zhheo)