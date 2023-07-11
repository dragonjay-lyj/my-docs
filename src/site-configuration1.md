---
title: Site Configuration 1
icon: fa-solid fa-badge-check
---

## language

Modify the site configuration file `_config.yml`, not the theme configuration file.

The default language is en

Theme support in three languages

- default(en)
- zh-CN (simplified Chinese)
- zh-TW (traditional Chinese)

## Website information

Modify various information of the website, such as title, subtitle and email and other personal data, please modify the `_config.yml` in the root directory of the blog, please note that if you need to adapt pjax you must fill in the `description` field to ensure that the number of dom need to be reloaded is the same.

## Navigation configuration

Modify the `theme config`

```yaml
menu:
  
```

Must be `/xxx/` followed by `||` separated by the icon name.

If you do not want the icon to be displayed, the icon name can be left out.

::: warning 
Note: The text of the navigation can be changed.
:::

Example:

```yml
menu:
  Article:
    Tunnel: /archives/ || icon-box-archive
    Classification: /categories/ || icon-shapes
    Label: /tags/ || icon-tags

  Friend:
    Friends account: /link/ || icon-link
    Moments: /fcircle/ || icon-artstation
    Message board: /comments/ || icon-envelope

  My:
    Music Hall: /music/ || icon-music
    Chasing: /bangumis/ || icon-bilibili1
    Album Set: /album/ || icon-images
    Conditioning: /air-conditioner/ || icon-fan

  About: /about/ || icon-zhifeiji
```

## Navigation bar settings

```yml
# nav-related configuration

nav:

enable: true

travelling: true

clock: true

menu:

- title: website

item:

- name: blog

link: yourblog.com

icon: /img/favicon.ico

- title: Projects

item:

- name: Edge me

link: https://www.edgemeplease.com/

icon: https://www.edgemeplease.com/favicon.ico
```

| parameters           | explanation                                                      |
| -------------- | --------------------------------------------------------- |
| enable         | Whether to enable the nav left item buttons to control only the left item buttons             |
| travelling     | Whether to enable the nav travelling button                                     |
| clock          | Whether or not to enable nav Left [Wabi-sabi](https://widget.qweather.com/) |
| menu           | nav The menu inside the left item button                                  |
| menu.title     | nav The title of the menu inside the left item button                              |
| menu.item      | nav The menu item inside the left item button                                |
| menu.item.name | nav The title of the menu item within the left item button                            |
| menu.item.link | nav Menu item links within the left item button                            |
| menu.item.icon | nav The menu item icon inside the left item button                            |

## Code Block Configuration

::: info
All features in the code block only work with Hexo's own code rendering
If you use a third-party renderer, it won't necessarily work!
:::

### Code Highlighting Theme

`AnZhiYu` Supports 6 code highlighting styles:

- darker
- pale night
- light
- ocean
- mac
- mac light

Modify the `theme config`

```yml
highlight_theme: light
```

### Code Copying

The theme supports code copying by modifying the `theme configuration file`.

```yaml
highlight_copy: true
```

### Expand/Close Code Box

By default, the code box is automatically expanded, you can set whether all the code box is closed state, click > Expand Code

- true All code boxes are not expanded, you need to click > Open
- false The code box expands with a > click button
- none Do not show > button

Modify Theme Configuration File

```yaml
highlight_shrink: true #The code box does not expand, you need to click '>' to open it
```

::: info

You can also configure this independently by adding highlight_shrink to the front-matter of the markdown file corresponding to the post/page page.

When `highlight_shrink` is set to true in the **theme configuration file**, you can add `highlight_shrink: false` to the front-matter to configure the post expand code box separately.

When `highlight_shrin`k is set to false in the **theme configuration file**, the post shrink code box can be configured separately by adding `highlight_shrink: true` to the front-matter.

:::

`highlight_shrink: true`
`highlight_shrink: false`
`highlight_shrink: none`

### Code line feed

By default, Hexo does not implement automatic line breaks in code at compile time. If you don't want horizontal scrollbars in the code block area, then you might consider turning this feature on.

Modify the `theme config`

```yaml
code_word_wrap: true
```

If you are using `highlight` rendering, you need to find your site's Hexo configuration file `_config.yml`, and change `line_number` to `false`: `line_number` to `false`: `line_number` to `false`: `line_number` to `false`.

```yml
highlight:
  enable: true
  line_number: false # <- Change it here.
  auto_detect: false
  tab_replace:
```

If you are using `prismjs` rendering, you need to find your site's Hexo config file `_config.yml` and change `line_number` to `false`:.

```yaml
prismjs:
  enable: false
  preprocess: true
  line_number: false # <- Change it here.
  tab_replace: ""
```

### Code height restriction

Configurable code height limit, the exceeding part will be hidden and the expand button will be shown, default 330, configurable to `false`.

```yml
highlight_height_limit: false # unit: px
```

Attention:

1. In `px`, add the number directly, e.g. 200

2. The actual height limit is `highlight_height_limit + 30 px`, the purpose of adding 30px limit is to avoid that when the code height exceeds the highlight_height_limit only a little bit, there will be an expand button, and the expand button will have no content.

3. Doesn't work for hidden code blocks (css set display: none)

## Icon Configuration

AnZhiYu Support [Ali Icon](https://www.iconfont.cn/collections/detail?cid=44481) (need to configure your own icons), and [font-awesome v6](https://fontawesome.com/icons?from=io) Icons (need to enable `fontawesome`), use ali icons need to configure the theme configuration file in the `icon.ali_iconfont_js` field, default built-in part of the icon, modify the theme configuration file.

```yaml
icons:
  ali_iconfont_js: # Ali icon symbol reference link, theme will load symbol reference
  fontawesome: false #Whether to enable fontawesome6 icons
  fontawesome_animation_css: #fontawesome_animation loaded if available, example value：https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@1.0.17/lib/assets/font-awesome-animation.min.css
```

Built-in Ali icon library:[https://www.iconfont.cn/collections/detail?cid=44481](https://www.iconfont.cn/collections/detail?cid=44481)

To use it, copy the icon name from the icon library and add the prefix `anzhiyu-`, for example, `icon-github` icon, then `anzhiyu-icon-github`.

Social icons, written in the format `name: url || descriptive text | icon name`

```yaml
# social settings (Social Icon Settings)
# formal:
#   name: link || icon
social:
  # Github: https://github.com/anzhiyu-c || anzhiyu-icon-github
  # Email: https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=2268025923@qq.com || anzhiyu-icon-envelope
  # RSS: atom.xml || anzhiyu-icon-rss
  # BiliBili: https://space.bilibili.com/372204786 || anzhiyu-icon-bilibili
  # QQ: tencent://Message/?Uin=2268025923&amp;websiteName=local.edu.com:8888=&amp;Menu=yes || anzhiyu-icon-qq
```

If you want the hover animation to take effect you need to configure the`fontawesome_animation_css`

```yaml
icons:
  ali_iconfont_js: # Ali icon symbol reference link, theme will load symbol reference
  fontawesome: false #Whether to enable fontawesome6 icons
  fontawesome_animation_css: #fontawesome_animation loaded if available, example value：https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@1.0.17/lib/assets/font-awesome-animation.min.css
```

## top pics

::: info
If you do not want to display the top graph, you can directly configure the `disable_top_img: true`
:::

::: tip
The order in which the top graph is fetched, and if neither is configured, the top graph is not displayed.

1.  Order of obtaining top-of-page images：

    `the top_img of the respective configuration > the default_top_img of the configuration file`.

2.  Order of getting the top image of the article page：

    `the respective configured top_img > cover > default_top_img of the profile`

:::

value in the configuration:

| configure             | explanation                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| index_img        | top_img of the home page, example value: index_img: "background: url(https://img02.anheyu.com/xxx) top / cover no-repeat" |
| default_top_img  | Default top_img, when the page's top_img is not configured, default_top_img will be shown                                     |
| archive_img      | The top_img of the archive page                                                                                      |
| tag_img          | Default top_img for tag subpages                                                                              |
| tag_per_img      | top_img of tag sub-pages, configurable for each tag                                                         |
| category_img     | Default top_img for category subpages                                                                         |
| category_per_img | ctop_img of ategory subpages, configurable per category top_img                                               |

For `top_img` on other pages (tags/categories/self-built pages) and article pages, please set `top_img` in `front-matter` on the corresponding md page.

All of the above `top_img`s can be configured with the following values

| Configured values                                                                                                                                    | effect                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| leave blank                                                                                                                                        | Show the default top_img (if any), otherwise show the default color<br/>(if the article page top_img is left empty, the value of the cover will be shown) |
| img link                                                                                                                                    | Link to the image, showing the configured image                                                                      |
| Color(<br/>HEX Value - #0000FF<br/>RGB Value - rgb(0,0,255)<br/>Color Words - orange<br/>fade color - linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%) | Corresponding color                                                                                        |
| transparent                                                                                                                                 | transparent                                                                                              |
| false                                                                                                                                       | Do not show top_img                                                                                    |

It's not recommended to configure a different top image for each tag and each category, as too much configuration can slow down the generation speed

```yaml
tag_per_img：
  aplayer: https://xxxxxx.png
  android: ddddddd.png

category_per_img：
  passing_thought: hdhdh.png
  testimonials: ddjdjdjd.png
```

## sticky 

[Recommended] `hexo-generator-index` supports article topping since 2.0.0. You can add the `sticky: 1` attribute to the `front-matter` field of an article to make the article top. The higher the value, the higher the priority of the sticky.

## Article Cover

On the markdown document of the article, add `cover` to `Front-matter` and fill in the address of the image to be displayed.

If `cover` is not configured, you can set the default cover to be displayed.

If you don't want to show cover on the front page, set it to `false.`

> Order of getting article covers `cover` of `Front-matter` > `configuration file's default_cover` > `false`

Modify the `theme config`

```yaml
cover:
  # Whether to display the article cover
  index_enable: true
  aside_enable: true
  archives_enable: true
  # Where the cover is shown
  # Three values are configurable left , right , both
  position: both
  # When no cover is set, the default cover is displayed
  default_cover:
```

| parameters            | explanation                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| index_enable    | Whether or not the home page displays the article cover image                                                                                                   |
| aside_enable    | Whether or not to display the article cover image in the sidebar                                                                                                   |
| archives_enable | Whether or not the article cover image is displayed on the archive page                                                                                               |
| position        | Home Card Article Cover Display Position<br/>- left：Show all on the left<br/>- right：Show all on the right<br/>- both：Cover positions are displayed in a left-right-right rotation |
| default_cover   | Default cover, configurable image links/colors/gradient colors, etc.                                                                               |

When multiple images are configured, one will be randomly selected as the cover.

```yaml
default_cover:
  - https://file.crazywong.com/gh/jerryc127/CDN@latest/cover/default_bg.png
  - https://file.crazywong.com/gh/jerryc127/CDN@latest/cover/default_bg2.png
  - https://file.crazywong.com/gh/jerryc127/CDN@latest/cover/default_bg3.png
```

## Article meta Display

This option is used to display information about the article.

Modify the `theme config`

```yaml
post_meta:
  page:
    date_type: both # created or updated or both The date of the homepage post is either the creation date or the update date or both.
    date_format: relative # date/relative Show date or relative date
    categories: true # true or false Whether or not the home page displays categories
    tags: true # true or false Whether or not the home page displays tags
    label: true # true or false Display descriptive text
  post:
    date_type: both # created or updated or both The date of the article page is either the creation date or the update date or both.
    date_format: relative # date/relative Show date or relative date
    categories: true # true or false Whether to show categories on article pages
    tags: true # true or false Whether to show tags on the article page
    label: true # true or false Display descriptive text
```

## Article copyright

Display article copyright and license agreements for your blog posts.

Modify the `theme config`

```yaml
post_copyright:
  enable: true
  decode: false
  author_href:
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

If there are articles (e.g., reprints) that do not need to show the copyright, you can set it separately in the article `Front-matter`.

```yml
copyright: false
```

Supports setting copyright information for individual articles, which can be set separately in the article `Front-matter`.

```yaml
copyright_author: xxxx
copyright_author_href: https://xxxxxx.com
copyright_url: https://xxxxxx.com
copyright_info: This article is copyrighted by xxxxxx, if reproduced, please indicate the original author from the
```

## Article Rewards

At the end of each of your posts, a reward button can be added. The QR code can be configured by yourself.

For those who don't provide a QR code, you can configure a software icon image and add the appropriate reward link to the link. When users click on the image, they will be redirected to the link.

The link can be left out and will default to the image. coinAudio is the audio for the coin.

Modify the `theme config`

```yaml
reward:
  enable: true
  coinAudio: https://npm.elemecdn.com/akilar-candyassets@1.0.36/audio/aowu.m4a
  QR_code:
    - img: https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-weichat.png
      link:
      text: wechat
    - img: https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-alipay.png
      link:
      text: alipay
```

## TOC

On the article page, there will be a directory for displaying the TOC. modify the `theme profile`

```yml
toc:
  post: true
  page: true
  number: true
  expand: false
  style_simple: false # for post
```

| properties         | explanation                                          |
| ------------ | --------------------------------------------- |
| post         | Whether or not the article page displays the TOC                            |
| page         | Whether to display TOC on normal pages                          |
| number       | Whether to display the number of chapters                                |
| expand       | Whether to expand the TOC                                  |
| style_simple | Simple Mode (sidebar only shows TOC, only available for article pages) |

**Configure for a specific article**

In the header of your article md file, add toc_number and toc, and configure true or false.

The theme will prioritize whether the Front-matter of the Markdown of the article has been configured, if so, the configuration of the Front-matter will prevail. Otherwise, the configuration in the theme configuration file will prevail.

## Related articles

::: warning 
When the article cover is set to `false`, or the cover configuration is not obtained, the background of the article in question will display the theme color.
:::

The principle of related article recommendation is based on the weight of the article tags.

Modify the `theme config`

```yml
related_post:
  enable: true
  limit: 6 # Display the number of recommended articles
  date_type: created # or created or updated Article date shows creation date or update date
```

## Article expiration reminders

You can set whether or not to show article expiration reminders, based on the update time.

```yml
# Displays outdated notice for a post (Article expiration reminders)
noticeOutdate:
  enable: true
  style: flat # style: simple/flat
  limit_day: 365 # When will it be shown
  position: top # position: top/bottom
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.
```

`limit_day`： How many days until the update time to show the article expiration reminder

`message_prev`： Words before days

`message_next`：Words after days

## Article Edit Button

An edit button is displayed next to the title of the article, and clicking it will jump to the corresponding link.

```yaml
# Post edit
# Easily browse and edit blog source code online.
post_edit:
  enable: false
  # url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/
  # For example: https://github.com/jerryc127/butterfly.js.org/edit/main/source/
  url:
```

## Article Pagination Button

::: warning 
When the article cover is set to `false`, or the cover configuration is not fetched, the pagination background will display the theme color.
:::

Pagination logic can be set, and pagination can also be turned off

```yaml
# post_pagination (paging)
# value: 1 || 2 || false
# 1: The 'next post' will link to old post
# 2: The 'next post' will link to new post
# false: disable pagination
post_pagination: false
```

|          parameters          |         explanation         |
| :--------------------: | :------------------: |
| post_pagination: false |     Close Paging Button     |
|   post_pagination: 1   | Next post shows old articles |
|   post_pagination: 2   | The next post shows a new article |

## center Console

In the theme configuration file, the default is `true`.

```yml
# 中控台
centerConsole: true
```

The center console will only show function buttons in the small screen state

![](https://bu.dusays.com/2023/07/05/64a4d19e0536f.webp)

When the screen is large enough, it will be able to display `Points of Interest`, `Recent Comments`, `Time Archives`, `Function Buttons`, `Music` and more!

![](https://bu.dusays.com/2023/07/05/64a4d19e0536f.webp)