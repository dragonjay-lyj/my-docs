---
title: Page Configuration
icon: fa-solid fa-check
---

## Basic understanding of Front-matter

The `Front-matter` is the `---` separated area at the top of the `markdown` file that specifies the variables for individual files.

These are subdivided into two types

1. Page Front-matter for page configuration
2. Post Front-matter for article page configuration

::: info tip
If you are marking optional parameters, you can add as many as you want without writing them all in markdown.
:::

::: tabs

@tab:active Page Front-matter

```markdown
---
title:
date:
updated:
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
type:
---
```

| spelling             | explanation                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| title            | [Required] Page Title                                                                     |
| date             | Required] Page creation date                                                                 |
| type             | Necessary】Tag, Category, About, Music Gallery, Links, Albums, Album Details, Circle of Friends, Instant Page need to be configured. |
| updated          | [Optional] Page update date                                                                 |
| description      | [Optional] Page Description                                                                     |
| keywords         | [Optional] Page Keywords                                                                   |
| comments         | [Optional] Show page comment module (default true)                                                  |
| top_img          | [Optional] Picture at the top of the page                                                                 |
| mathjax          | [Optional] Show mathjax (required when per_page: false is set for mathjax, default false)   |
| katex            | [Optional] Show katex (only required when per_page: false is set for katex, default false)       |
| aside            | [Optional] Show sidebar (default true)                                                       |
| aplayer          | Optional] Load aplayer's js and css on the desired page, please refer to the article below for music configuration.              |
| highlight_shrink | [Optional] Configure whether the code box is expanded (true/false) (defaults to the configuration of highlight_shrink in the settings)         |

@tab Post Front-matter

```markdown
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
swiper_index: 1
top_group_index: 1
background: "#fff"
---
```

| spelling                  | explanation                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------- |
| title                 | [Required] Article Title                                                                            |
| date                  | [Required] Article creation date                                                                        |
| updated               | [Optional] Article update date                                                                        |
| tags                  | [Optional] Article Tags                                                                            |
| categories            | [Optional] Article Categories                                                                            |
| keywords              | [Optional] Article Keywords                                                                          |
| description           | [Optional] Article Description                                                                            |
| top_img               | [Optional] Image at the top of the article                                                                        |
| cover                 | Optional] article thumbnail(if top_img is not set, the thumbnail will be shown at the top of the article page, it can be set to false/image address/leave it blank) |
| comments              | [Optional] Show article comment module (default true)                                                         |
| toc                   | [Optional] Display article TOC (default is the enable configuration of toc in settings)                                       |
| toc_number            | [Optional] Display toc_number (default is the number configuration of toc in the setting)                                    |
| toc_style_simple      | [Optional] Display toc Simple Mode                                                                   |
| copyright             | [Optional] Show article copyright module (default is enable configuration of post_copyright in settings)                        |
| copyright_author      | [Optional] `Author of article` in the article copyright module                                                            |
| copyright_author_href | [Optional] `Author of article` link in article copyright module                                                        |
| copyright_url         | [Optional] `Article link` link for article copyright module                                                        |
| copyright_info        | [Optional] Copyright notice text for article copyright module                                                          |
| mathjax               | [Optional] Show mathjax (required when per_page: false is set for mathjax, default false)          |
| katex                 | [Optional] Show katex (only required when per_page: false is set for katex, default false)              |
| aplayer               | [Optional] Load aplayer's js and css on the desired page, see `Music` configuration below the article.                   |
| highlight_shrink      | [Optional] Configure whether the code box is expanded (true/false) (defaults to the configuration of highlight_shrink in the settings)                |
| aside                 | [Optional] Show sidebar (default true)                                                              |
| swiper_index          | [Optional] Home page rotator configuration index index, the smaller the number the more advanced                                           |
| top_group_index       | [Optional] Card group configuration on the right side of the home page, the smaller the number, the higher the priority.                                                  |
| background            | [Optional] Article background can be configured as hexadecimal color values.                                                      |

1. Homepage rotator configuration: `swiper_index`, the smaller the number, the higher it is.
2. Home card configuration: `top_group_index`, the smaller the number, the higher the index
3. `background` in page, configurable as hexadecimal color value

:::

Simply configure these two fields in the `Front-matter` at the top of your post to display the rotating image and the testimonials card

## tag

1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

   ```bash
   hexo new page tags
   ```

3. You'll find the file `source/tags/index.md`.

4. Modify this file:
   Remember to add `type: "tags"`

```markdown
---
title: tag
date: 2021-04-06 12:01:51
type: "tags"
comments: false
top_img: false
---
```

| parameters     | explanation                                                             |
| -------- | ---------------------------------------------------------------- |
| type     | [Required] page type, must be tags                                    |
| comments | [Optional] Whether to display comments                                             |
| top_img  | [Optional] Whether to display the top chart                                           |
| orderby  | Optional] Sort by: random/name/length                            |
| order    | [Optional] Sort Order： 1, asc for ascending; -1, desc for descending |

## category page

1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

   ```bash
   hexo new page categories
   ```

3. You'll find the file `source/categories/index.md`

4. Modify this file:
   Remember to add `type: "categories"`

```markdown
---
title: categorize
date: 2022-02-23 17:56:00
aside: false
top_img: false
type: "categories"
---
```

::: info
A customized interface exists for category pages, and this site uses a custom page display.

::: details Customized Category Interface

1. First remove `type: "categories" from the `source/categories/index.md` file.`
2. Modify the `source/categories/index.md` file with your own links and text.

```markdown
---
title: categorize
date: 2022-02-23 17:56:00
aside: false
top_img: false
---

<style>
  #libCategories .card-wrap:hover .card-info:after {
    width: 300%;
  }
</style>
<link rel="stylesheet" type="text/css" href="https://npm.elemecdn.com/js-heo@1.0.11/3dCard/no3d.css">

<div id='libCategories'>
<div id="lib-cards" class="container">

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/AI/")'>
<card data-image="https://img02.anheyu.com/adminuploads/1/2022/09/05/6315e144528fb.webp">
<h1 slot="header">AI</h1>
<p slot="content">Some uses of artificial intelligence</p>
</card>
</a>

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/Life/")'>
  <card data-image="https://img02.anheyu.com/adminuploads/1/2022/09/05/6315e1433f197.webp">
    <h1 slot="header">Life</h1>
    <p slot="content">Funny things that happen in life</p>
  </card>
</a>

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/games/")'>
  <card data-image="https://img02.anheyu.com/adminuploads/1/2022/09/05/6315e142a69a9.webp">
    <h1 slot="header">Games</h1>
    <p slot="content">Funny games</p>
  </card>
</a>

</div>
</div>

<script src='https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.14/vue.min.js' data-pjax></script>

<script type="text/javascript" src="https://npm.elemecdn.com/anzhiyu-theme-static@1.0.7/no3d/no3d.js" data-pjax></script>
```

:::

![category page](https://i.postimg.cc/kghx7Wfr/localhost-5000-categories.png)

## dynamic

1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

```bash
  hexo new page essay
```

3. You'll find the file `source/essay/index.md`.

4. Modify this file:
   Remember to add `type: "essay"`

```markdown
  ---
  title: dynamic
  date: 2020-07-22 22:06:17
  comments: true
  aside: false
  top_img: false
  type: essay
  ---
```

5. To add data, create a new file `[blog]\source\_data\essay.yml`, if you don't have a `_data` folder, please create one yourself. The following is an example of the default format, open `[blog]\source\_data\essay.yml` and type:

```yml
- title: dynamic
  subTitle: The daily lives of young people.
  tips: Share your life anytime, anywhere
  buttonText: About me.
  buttonLink: /about/
  limit: 30
  home_essay: true
  top_background: https://bu.dusays.com/2023/06/15/648af1d5e6f39.jpeg
  essay_list:
    - content: Music supports customized song list with parameter settings
      date: 2023/01/02
      link: https://en.dragonjay.top/music/?id=7269231710&server=tencent
    - content: About page of the reward imitated Bilibili charging function, using svg drawing ➕ some animation parameters to move, should not be Bilibili warning bar 😜, in addition to the article also supports the top of the random Bilibili with the same type of spring, autumn and winter banner.
      date: 2022/12/18
    - content: One of the main reasons why you can't modify state directly in React is that prueComponment does shallow comparisons for performance optimization, and you can't go into the queue and batch update it.
      date: 2022/12/10
    - content: Good lord, it's almost time to go home for vacation! I miss the good food at home 😋! I don't want to pinch my sister's face.
      date: 2022/12/06
    - content: The global music animation is handled, nice!
      date: 2022/11/13
    - content: The footer, the top of the home page all magic to the local, easy to follow the magic, music also changed into a capsule style, in fact, still want to make the capsule can be dragged, can not be clicked to change the position of the lyrics, but after half a day of work did not get it right, so I gave up!
      date: 2022/11/13
    - content: A brand new version of Circle of Friends is finally written, yay ✌️
      date: 2022/11/05
      link: https://en.dragonjay.top/album/
    - content: Finally got the album set done, yay ✌️, the waterfall stream executes once when sliding the scrollbar a viewport range of 100 up and down, and stops listening at the bottom to make the performance so much higher, no more layout confusion 🤪 now!
      date: 2022/10/25
      link: https://en.dragonjay.top/album/
    - content: Search 🔍 support for thumbnail display (get the first image of the article content by default)
      date: 2022/10/23 08:00:00
      from: DragonJay
    - content: Meet the rainbow 🌈 Eat the rainbow!
      date: 2022/10/23 10:00:00
      image:
        - https://bu.dusays.com/2023/04/09/64329399e285d.webp
        - https://bu.dusays.com/2023/04/09/64329399aa3bc.webp
        - https://bu.dusays.com/2023/04/09/6432939996dd7.webp
    - content: ThreeJs API is so much!
      date: 2022/10/19
    - content: My sister forced me to buy away two of her paintings -¥30
      date: 2022/10/02
      image:
        - https://bu.dusays.com/2023/04/09/643293997b92b.jpeg
    - content: Song Recommendation
      date: 2022/09/25
      aplayer:
        server: tencent
        id: 0038exKr0fGkul
    - content: Had a nightmare about falling off the roof of a building. 😷
      date: 2022/09/24
    - content: JOJO is really good looking!
      date: 2022/09/21
      link: https://www.bilibili.com/bangumi/play/ss39431?spm_id_from=333.337.0.0
```

Theme config file to turn on comments in `menu` about and ramblings, navigation bar ramblings, note indentation!!!!

```yml
menu:

# Article:

# Archive: /archives/ || fa-duotone fa-box-archive

# Category: /categories/ || fa-duotone fa-file-certificate

# Tag: /tags/ || fa-duotone fa-tags

  

# Links:

# Link: /link/ || fa-duotone fa-link

# Dynamic: /fcircle/ || fa-duotone fa-circle-user

# Comment: /comments/ || fa-duotone fa-comments

  

# My:

# music: /music/ || fa-duotone fa-music

# Bangumis: /bangumis/ || fa-duotone fa-face-anguished

# Album: /album/ || fa-duotone fa-images

# Air: /air-conditioner/ || fa-duotone fa-air-conditioner

  

# About:

# About: /about/ || fa-duotone fa-address-card

 Say: /essay/ || fa-duotone fa-message-smile

# Random: javascript:toRandomPost() || fa-duotone fa-shuffle
```

::: warning 
The images in the example data are not guaranteed to be available, so please replace them with your own links to the image beds.
:::

![dynamic](https://i.postimg.cc/7P3PDDmw/localhost-5000-categories-1.png)

## Link Configuration

1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

   ```bash
   hexo new page link
   ```

3. You'll find the file `source/link/index.md`.

4. Modify this file:
   Remember to add `type: "link"`

   ```markdown
     ---
     title: link
     date: 2020-12-01 22:19:45
     type: 'link'
     ---
   ```

Create a new file `[blog]\source\_data\link.yml`, if you don't have a `_data` folder, please create it yourself. The following is an example of the default link format (~~ I wrote the tutorial myself, it's not too much to ask for some private goods, hehehe~~). Open `[blog]\source\_data\link.yml` and type:

```yml
- class_name: frameworks
  flink_style: flexcard
  link_list:
    - name: Hexo
      hundredSuffix: ""
      link: https://hexo.io/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: Fast, simple and powerful web framework
    - name: DragonJay
      link: https://en.dragonjay.top/
      avatar: https://q1.qlogo.cn/g?b=qq&nk=410714630&src_uin=www.jlwz.cn&s=0
      descr: Life is bright and all things are lovely
      siteshot: 

- class_name: Featured Blogs
  flink_style: flexcard
  link_list:
    - name: DragonJay
      hundredSuffix: ""
      link: https://en.dragonjay.top/
      avatar: https://q1.qlogo.cn/g?b=qq&nk=410714630&src_uin=www.jlwz.cn&s=0
      descr: Life is bright and all things are lovely
      siteshot: 

- class_name: buster
  class_desc: Those people, those things.
  flink_style: anzhiyu
  link_list:
    - name: DragonJay
      hundredSuffix: ""
      link: https://en.dragonjay.top/
      avatar: https://q1.qlogo.cn/g?b=qq&nk=410714630&src_uin=www.jlwz.cn&s=0
      descr: Life is bright and all things are lovely
```

There are two effects depending on the flink_style, the options are `flexcard` or `anzhiyu`.

When the number of links exceeds 50, it will be triggered to progress with the blogger board, you can configure `hundredSuffix:"!w120"`, this parameter can solve the problem of the quality of the avatar of the board of the common progress, after the configuration of the avatar of the board of the common progress will be added to the suffix.

```yml
flink_style: flexcard || anzhiyu
```

Theme config file to turn on comments for friendlinks and friend accounts in `menu`, note the indentation!!!!

```yml
menu:

# Article:

# Archive: /archives/ || fa-duotone fa-box-archive

# Category: /categories/ || fa-duotone fa-file-certificate

# Tag: /tags/ || fa-duotone fa-tags

  

# Links:

 Link: /link/ || fa-duotone fa-link

# Dynamic: /fcircle/ || fa-duotone fa-circle-user

# Comment: /comments/ || fa-duotone fa-comments

  

# My:

# music: /music/ || fa-duotone fa-music

# Bangumis: /bangumis/ || fa-duotone fa-face-anguished

# Album: /album/ || fa-duotone fa-images

# Air: /air-conditioner/ || fa-duotone fa-air-conditioner

  

# About:

# About: /about/ || fa-duotone fa-address-card

 Say: /essay/ || fa-duotone fa-message-smile

# Random: javascript:toRandomPost() || fa-duotone fa-shuffle
```

![Link Configuration](https://i.postimg.cc/HL1T8kYS/localhost-5000-categories.png)

## About Page Configuration

1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

   ```bash
   hexo new page about
   ```

3. You'll find the file `source/about/index.md`.

4. Modify this file:
   Remember to add `type: "about"`

   ```markdown
     ---
     title: About
     date: 2021-03-30 15:57:51
     aside: false
     top_img: false
     background: "#f8f9fe"
     comments: false
     type: "about"
     ---
   ```

5. The theme configuration file turns on comments in `menu` about and about myself, note the indentation!!!!

Create a new `source/_data/about.yml` and enter the following

```yml
- class_name: About Page
  subtitle: Life is bright and everything is lovely✨
  avatarImg: https://q1.qlogo.cn/g?b=qq&nk=410714630&src_uin=www.jlwz.cn&s=0
  name: DragonJay
  description: I'm a front-end engineer, student, indie developer, and blogger.
  aboutsiteTips:
    tips: quest
    title1: belong
    title2: Love it, feel it.
    word:
      - do
      - lifestyles
      - programs
      - experience
  helloAbout: Hello there!
  skillsTips:
    tips: skill
    title: Unlocking Creativity
  careers:
    tips: careers
    title: progress without limit
    item:
      - EDU,software technology
    img: https://bu.dusays.com/2023/04/21/644287166329b.png
  statistic:
    link: /archives
    text: Article Tunnel
    cover: https://bu.dusays.com/2023/05/01/644f4b037b930.jpg
  map:
    title: I live there now
    StrengthenTitle: Handan, China
    background: https://i.postimg.cc/JhHtsn17/image.png
    backgroundDark: https://i.postimg.cc/fbztg5Kp/image.png
  selfInfo:
    selfInfoTips1: born in
    selfInfoContentYear: 2004
    selfInfoTips2: Handan Institute of Science and Technology
    selfInfoContent2: software technology
    selfInfoTips3: Current Occupation
    selfInfoContent3: freshman👨‍🎓
  personalities:
    author_name: 执政官
    personality_type: INFP-A
    photo_url: 
    personality_img: https://cdn.jsdelivr.net/gh/SurpriseLon/my-website@master/Untitled-1.svg
    name_url: https://www.16personalities.com/ch/infp-%E4%BA%BA%E6%A0%BC
  maxim:
    maxim_tips: maxim
    maxim_top: Life is clear.
    maxim_bottom: Everything is lovely.
  buff:
    buff_tips: specialty
    buff_top: A new brain, sauerkraut.
    buff_bottom: Secondary Index MAX
  game:
    game_tips: Hobby Games
    game_title: Genshin Impact
    game_uid: "UID: 88844080478"
    game_bg: https://bu.dusays.com/2023/04/22/64433bf26e25d.webp
  comic:
    comic_tips: Hobby Tomodrama
    comic_title: follow closely
comic_list:
      - name: Scissor Seven
        href: https://www.bilibili.com/bangumi/media/md28412536
        cover: https://i.postimg.cc/T3W2Gcxh/out.webp
      - name: White Cat Legend
        href: https://www.bilibili.com/bangumi/media/md28227527
        cover: https://i.postimg.cc/Kz944vHY/out.webp
      - name: All Saints Street
        href: https://www.bilibili.com/bangumi/media/md28235589
        cover: https://i.postimg.cc/W3CzFnVD/out.webp
      - name: 非人哉
        href: https://www.bilibili.com/bangumi/media/md13372924
        cover: https://i.postimg.cc/Bb0P1Q59/out.webp
      - name: Jackie Chan Adventures
        href: https://www.bilibili.com/bangumi/media/md20261822
        cover: https://i.postimg.cc/x1yHTB3r/22afe34a7ee7b28aa45ea1bc0d5c326836c5e8b7-png-450w-600h.webp
  like:
    like_tips: Focus on Preferences
    like_title: digital technology
    like_bg: https://bu.dusays.com/2022/12/06/638f5f05ce1f7.jpg
    like_bottom: Cell phone, computer hardware and software
  music:
    music_tips: musical preference
    music_title: Song Xu, Folk, Mandarin Pop
    music_bg: https://p2.music.126.net/Mrg1i7DwcwjWBvQPIMt_Mg==/79164837213438.jpg
    music_link: /music

  extra: false
```

| parameters                           | Alternative values/types   | explanation                                                                                                                                                |
| ------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| class_name                     | About Page        | [Required] Page Class                                                                                                                                      |
| subtitle                       | string        | [Required] Subtitle                                                                                                                                      |
| avatarImg                      | url           | [Required] Avatar Link                                                                                                                                    |
| name                           | string        | [Required Author's name                                                                                                                                     |
| description                    | string        | [Required] Description                                                                                                                                        |
| aboutsiteTips                  | object        | [Required] Site configuration regarding prompts                                                                                                                        |
| aboutsiteTips.tips             | string        | [Required] Site About Prompt Text                                                                                                                          |
| aboutsiteTips.title1           | string        | [Required] Site about the title text 1                                                                                                                          |
| aboutsiteTips.title2           | string        | [Required] Site About Title Text 2                                                                                                                          |
| aboutsiteTips.word             | list          | [Required] Site about title scrolling text                                                                                                                        |
| helloAbout                     | string        | [Must] hello text                                                                                                                                  |
| skillsTips                     | object        | [Required] Skill Related Configurations                                                                                                                                |
| skillsTips.tips                | string        | [Must] Skill prompt text                                                                                                                                |
| skillsTips.title               | string        | [Required] Skill Title                                                                                                                                    |
| careers                        | object        | [Required] Career-related configuration                                                                                                                                |
| careers.tips                   | string        | [Required] Career alert text                                                                                                                              |
| careers.title                  | string        | [Required] Career Title                                                                                                                                    |
| careers.item                   | list          | Career item                                                                                                                                   |
| careers.img                    | string        | [Must] Career Pictures                                                                                                                                    |
| statistic                      | object        | [Required] Statistics-related configuration                                                                                                                            |
| statistic.link                 | url           | [Required] Statistical data button to go to the link                                                                                                                        |
| statistic.text                 | string        | [Required] Statistics button text                                                                                                                            |
| map                            | object        | [Required] Map Related Configurations                                                                                                                                |
| map.title                      | string        | [Required] Map Title                                                                                                                                    |
| map.StrengthenTitle            | string        | [Required] Map header                                                                                                                                  |
| map.background                 | url           | [Must] Map Light Mode Background                                                                                                                            |
| map.backgroundDark             | url           | [Must] Map Dark Mode Background                                                                                                                            |
| selfInfo                       | object        | [Required] Configuration of author-related information                                                                                                                            |
| selfInfo.selfInfoTips1         | string        | [Required] Author's prompt text 1                                                                                                                          |
| selfInfo.selfInfoContentYear   | number        | [Required] Author's birthday year                                                                                                                                |
| selfInfo.selfInfoTips2         | string        | [Required] Author's prompt text 2                                                                                                                          |
| selfInfo.selfInfoContent2      | string        | [Required] Author-related content 2                                                                                                                              |
| selfInfo.selfInfoTips3         | string        | [Required] Author's prompt text 3                                                                                                                          |
| selfInfo.selfInfoContent3      | string        | [Required] Author-related content 3                                                                                                                              |
| personalities                  | object        | [Required] Author character related configuration                                                                                                                            |
| personalities.author_name      | string        | [Required] Author's personality name                                                                                                                                |
| personalities.personality_type | string        | [Required] Author's personality type                                                                                                                                |
| personalities.photo_url        | url           | [Must] Author Selfie Pictures                                                                                                                                |
| personalities.personality_img  | url           | [Required] Pictures of author's personality expressions                                                                                                                            |
| personalities.name_url         | url           | [Required] Click on the personality to jump to the link                                                                                                                          |
| maxim                          | object        | [Must] Motto Related Configurations                                                                                                                              |
| maxim.maxim_tips               | string        | [Must] Motto Related Prompt Text                                                                                                                          |
| maxim.maxim_top                | string        | [Must] Motto Related Top Text                                                                                                                          |
| maxim.maxim_bottom             | string        | [Must] Motto Related Bottom Text                                                                                                                          |
| buff                           | object        | [Required] Specialty Related Configurations                                                                                                                                |
| buff.buff_tips                 | string        | [Required] Specialty-related prompt text                                                                                                                            |
| buff.buff_top                  | string        | [Required] Specialty Related Top Text                                                                                                                            |
| buff.buff_bottom               | string        | [Required] Specialty Related Bottom Text                                                                                                                            |
| game                           | object        | [Required] Hobby game related configuration                                                                                                                            |
| game.game_tips                 | string        | [Required] Hobby Game Tip Text                                                                                                                            |
| game.game_title                | string        | [Required] Hobby Game Title                                                                                                                                |
| game.game_uid                  | string        | [Must] Hobby game uid                                                                                                                                |
| game.game_bg                   | url           | [Must] Hobby game background                                                                                                                                |
| comic                          | object        | Required] 5 pieces of data are required for the configuration of animes.                                                                                                                 |
| comic.comic_tips               | string        | [Required] Cue text related to the animes                                                                                                                           |
| comic.comic_title              | string        | [Required] animes Related Titles                                                                                                                                |
| comic.comic_list               | list          | [Must] animes related list                                                                                                                                |
| comic.comic_list.name          | string        | [Required] animes item name                                                                                                                              |
| comic.comic_list.href          | url           | [Must] animes item link                                                                                                                              |
| comic.comic_list.cover         | url           | [Required] animes item's cover                                                                                                                          |
| like                           | object        | [Must] Focus on preference-related allocations                                                                                                                            |
| like.like_tips                 | string        | [Required] Focus on Preference Configuration Prompt Text                                                                                                                        |
| like.like_title                | string        | [Must] Focus on preference allocation headings                                                                                                                            |
| like.like_bg                   | url           | [Must] Focus on preferred allocation context                                                                                                                            |
| like.like_bottom               | string        | [Mandatory] Follow the text at the bottom of the preference configuration                                                                                                                        |
| music                          | object        | [Required] Music preference related configuration                                                                                                                            |
| music.music_tips               | string        | [Required] Music preference cue text                                                                                                                          |
| music.music_title              | string        | [Required] Music Preferences Title                                                                                                                                |
| music.music_bg                 | url           | [Required] Music Preference Background                                                                                                                                |
| music.music_link               | url           | [Required] Music Preference Button Link                                                                                                                            |
| reward_list                    | object        | Optional] Reward related configuration, if not configured there will be no reward module.                                                                                                      |
| reward_list.name               | string        | [Required] Reward item name                                                                                                                              |
| reward_list.amount             | number        | [Required] Reward item amount                                                                                                                              |
| reward_list.datatime           | Date          | [Must] Reward item Time                                                                                                                              |
| reward_list.suffix             | string/RMB     | [Optional] Reward item suffix（default RMB）                                                                                                                    |
| extra                          | boolean/false | The [Required] development field indicates that the content of the extra module can be developed by modifying the theme `themes/anzhiyu/layout/includes/anzhiyu/about-extra.pug`, and the pug content will be introduced after modifying this field to true. |

![关于页](https://i.postimg.cc/DwpZqv41/localhost-5000-about.png)

## Configuring the album page

1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

   ```bash
   hexo new page album
   ```

3. You will find the file `source/album/index.md`.

4. Modify this file:
   Remember to add `type: "album"`

   ```markdown
     ---
     title: album
     date: 2022-10-23 15:57:51
     aside: false
     top_img: false
     type: "album"
     top_background: https://bu.dusays.com/2023/06/30/649e54029be36.webp
     ---
   ```

   Need to modify the top image you can modify the link in the `top_background` field, theme version needs to be `1.4.1` or above.

5. Theme config file to turn on comments for my and album sets in `menu`, note the indentation!!!!

Create a new file `[blog]\source\_data\album.yml`, if you don't have a `_data` folder, please create your own. Open `[blog]\source\_data\album.yml` and type:

```yml
- class_name: Sunsets and landscapes around the world
  path_name: /wordScenery
  type: 2
  description: Since I can't get to all parts of the world, I asked my friends to send in sunsets and landscapes from all over the world 🌇.
  cover: https://bu.dusays.com/2023/04/09/64329399d1175.jpg
  top_background: https://bu.dusays.com/2023/06/30/649e546ada7dd.webp
  rowHeight: 220
  limit: 10
  lazyload: true
  btnLazyload: false
  url: false
  album_list:
    - date: 2022/10/26 01:00:00
      content: A corner of Xiangtan.
      address: Hunan Xiangtan
      from: One more bite and I'll lose weight.
      image:
        - https://bu.dusays.com/2023/04/09/64329399db122.webp
    - date: 2022-10-25
      content: The sky after a rainstorm in Luoyang.
      address: Henan Luoyang
      from: seaweed roll
      image:
        - https://bu.dusays.com/2023/04/09/64329399db122.webp
        - https://bu.dusays.com/2023/04/09/64329399db2e1.webp

- class_name: My daily routine.
  path_name: /dailyPhoto
  type: 1
  description: This is a repository of some of the sand sculpted life and interesting things about myself.
  cover: https://bu.dusays.com/2023/04/09/64329399cea5a.webp
  album_list:
    - date: 2022-10-24
      content: Sister's Paintings
      image:
        - https://bu.dusays.com/2023/04/09/643293997b92b.jpeg
```

| parameters               | Alternative values/types | explanation                                                                                                                             |
| ------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| class_name         | string      | [Required] Page Class                                                                                                                   |
| path_name          | url         | [Required] Current Album Path                                                                                                             |
| type               | number      | [Required] Current album page style type                                                                                                     |
| description        | string      | [Required] Current Album Description                                                                                                             |
| cover              | url         | [Must] Current Album Cover Pictures                                                                                                      |
| top_background              | url         | Optional] The current top banner image of the album, you can not fill in, the theme version needs to be 1.4.1 or above.                                                                                                      |
| rowHeight          | number      | [Optional] Only valid when type is 2, current album rowHeight                                                                                |
| limit              | number      | [Optional] Valid only when type is 2, the number of current albums loaded lazily at once.                                                                         |
| lazyload           | boolean     | [Optional] Only valid when type is 2, if or not lazyload is enabled in current album lazyload, default lazyload is scrolling lazyload, lazyload can not be turned off when type is 1.            |
| btnLazyload        | boolean     | [Optional] Only valid when type is 2 and lazyload is on, the current album lazyload lazy loading method, the default is scrolling lazy loading, after turning on this option, it is button click lazy loading. |
| album_list         | list        | [Must] List of pictures in the current album                                                                                                       |
| url                | url         | [Optional] Valid only when type is 2. Remote json data can be loaded.                                                                        |
| album_list.date    | date        | [Required] Current picture creation time                                                                                                         |
| album_list.content | string      | [Required] Content of the current picture description                                                                                                         |
| album_list.image   | list        | [Must] Current picture set, can be more than one                                                                                                     |
| album_list.from    | string      | [Optional] The creator of the current picture, if not filled in, it will not be displayed.                                                                                         |
| album_list.address | string      | [Required] Current Picture Address                                                                                                             |

::: warning 
Note that the images in the example data are not guaranteed to be available.
:::

Since the album page needs many pages, write the path `path_name` by itself when writing the data, there are two `path_name`s in the example data, so you need to create two more pages

Note that the newly created page must match `path_name`.

```bash
  hexo new page dailyPhoto
  hexo new page wordScenery
```

You will find the files `source/dailyPhoto/index.md` and `source/wordScenery/index.md`, which are the album collection detail pages.

Then the content is the following, need to add `type: "album_detail" to the detail page`

```markdown
---
title: everyday lives
date: 2022-10-23 15:57:51
aside: false
top_img: false
type: "album_detail"
---
```

```markdown
---
title: Scenes from around the world
date: 2022-10-23 15:57:51
aside: false
top_img: false
type: "album_detail"
---
```

`Remote load json sample data`

```json
[
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0556.jpg",
    "alt": "IMG_0556.jpg",
    "title": "Here's the title."
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0472.jpg",
    "alt": "IMG_0472.jpg"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0453.jpg",
    "alt": ""
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0931.jpg",
    "alt": ""
  }
]
```

::: tabs#album page type

@tab album page

![相册页](https://i.postimg.cc/4NWrWmf2/localhost-5000-categories.png)

Album page type: 1 Style

![相册页](https://i.postimg.cc/rFg9BPPQ/localhost-5000-album.png)

:::

## Circle of Friends Page Configuration

> Friendly Link Circle of Friends[Backend Deployment Documentation](https://docs.dragonjay.top/hexo-circle-of-friends)
> Project address: [https://github.com/Rock-Candy-Tea/hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends)

Please note that there is a certain degree of difficulty in the deployment of the circle of friends, the blogger uses the server deployment, after pulling the back-end code can be changed to the default value within the code to their own site, the theme changed to common2, note that you must use `common2`, otherwise you will not be able to pull their own friend links.

Open a terminal in the Hexo blog root directory `[blog]` and type

```bash
  hexo new page fcircle
```

Open `[blog]\source\fcircle\index.md`, add a line `type: 'fcircle'`.

```md
---
title: circle of friends
date: 2022-11-21 17:06:17
comments: false
aside: false
top_img: false
type: "fcircle"
---
```

Theme config file to turn on comments for friendlinks and friendzones in `menu`, navigation bar friendzones, note the indentation!!!!

Enable `friends_vue.enable` in the theme config file, set [friends_vue_backend_address](https://docs.dragonjay.top/hexo-circle-of-friends) and top module background by yourself, and watch out for indentation!!!!

::: warning
Note that `common2` is required for back-end crawling.
:::

```yml
# Circle of Friends Configuration
friends_vue:
  enable: false
  vue_js: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/js/friends_vue/index.js
  apiurl: # Circle of Friends Backend Address
  top_background:
```

| parameters           | Alternative values/types | explanation                           |
| -------------- | ----------- | ------------------------------ |
| enable         | boolean     | [Required] Whether to enable               |
| vue_js         | url         | [Required] url after building the front-end of the circle of friends |
| apiurl         | string      | [Required] Circle of Friends back-end url         |
| top_background | url         | 【Optional】Friends circle top background image       |

Here is the configuration of this site

```yml
friends_vue:
  enable: true
  vue_js: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/js/friends_vue/index.js
  apiurl: https://friends.dragonjay.top/ # Circle of Friends Backend Address
  top_background: https://img02.anheyu.com/adminuploads/1/2022/08/21/630249e2df20f.jpg
```

Where the `vue_js` parameter, which replaces `https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/js/friends_vue/index.js` in the
`friends.dragonjay.top` to your backend url and then use the

Front-end project address:[hexo-circle-of-friends-front](https://github.com/anzhiyu-c/hexo-circle-of-friends-front/)，You can also download the project by yourself, change the url variable `friends.anheyu.com` in the code to your own, and then run `npm run build` to build it.

Theme config file to turn on comments in `menu` for Friendlinks and Circle of Friends, note the indentation!!!!

## Music Hall Page Configuration

1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

   ```bash
   hexo new page music
   ```

3. You'll find the file `source/music/index.md`.

4. Modify this file:
   Remember to add `type: "music"`

   ```markdown
   ---
   title: music hall
   date: 2021-04-24 21:41:30
   type: music
   aplayer: true
   top_img: false
   comments: false
   aside: false
   ---
   ```

5. Create a new `source/json/music.json`, this json is the song list data for the toggle song list button.

```json
[

{

"name": "万圣街",

"artist": "洛天依 /乐正绫 /墨清弦 /言和",

"url": "https://file.dragonjay.top/api/raw/?path=/music/%E4%B8%87%E5%9C%A3%E8%A1%97.flac",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M000000iPrTR2dXPYQ_1.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/《万圣街》动画主题曲-万圣街.lrc"

},

{

"name": "木兰行",

"artist": "忘川风华录",

"url": "https://file.dragonjay.top/api/raw/?path=/music/木兰行.flac",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M000004b58GL435ZgN_1.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/木兰行-忘川风华录.lrc"

},

{

"name": "勋章",

"artist": "鹿晗",

"url": "https://file.dragonjay.top/api/raw/?path=/music/勋章.flac",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M000002ZXwUj3RlnVN_3.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/勋章-鹿晗.lrc"

},

{

"name": "四面楚歌",

"artist": "周杰伦 /林迈可",

"url": "https://file.dragonjay.top/api/raw/?path=/music/四面楚歌.flac",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M0000024bjiL2aocxT_3.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/四面楚歌-周杰伦_林迈可.webp"

},

{

"name": "少年游",

"artist": "魏晨",

"url": "https://file.dragonjay.top/api/raw/?path=/music/少年游.flac",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/18499283139025587.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/少年游.lrc"

},

{

"name": "琵琶行",

"artist": "奇然 /沈谧仁",

"url": "https://file.dragonjay.top/api/raw/?path=/music/琵琶行.mp3",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M000003OSjGL1uNVGw_1.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/琵琶行-奇然_沈谧仁.lrc"

},

{

"name": "CIKI CIKI BAM BAM",

"artist": "QUEENDOM",

"url": "https://file.dragonjay.top/api/raw/?path=/music/CIKICIKIBAMBAM.flac",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M000003zhMhS4dJMwh_1.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/チキチキバンバン-QUEENDOM.lrc"

},

{

"name": "Numb",

"artist": "Linkin Park",

"url": "https://file.dragonjay.top/api/raw/?path=/music/Numb.flac",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M000000A60NK2AqhFZ_1.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/Numb-LinkinPark.lrc"

},

{

"name": "Life Will Change",

"artist": "Lyn (稲泉りん)",

"url": "https://file.dragonjay.top/api/raw/?path=/music/LifeWillChange.mp3",

"cover": "https://file.dragonjay.top/api/raw/?path=/music/T002R300x300M0000041GPv63o2YjS_1.webp",

"lrc": "https://file.dragonjay.top/api/raw/?path=/music/LifeWillChange-Lyn.lrc"

}

]
```

6. Add the following configuration to the hexo configuration file `_config.yml`, note that it is not the theme configuration file

   ```yml
   # APlayer
   # https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md
   aplayer:
     meting: true
     asset_inject: false
   ```

7. The theme configuration file turns on the comments for my and music gallery in `menu`, note the indentation!!!!

> How do I change the default song list?

Change the path of music library in `menu` to the following format `/music/?id=1708664797&server=tencent`, support `id` and `server` parameters.

![Music Hall Page](https://i.postimg.cc/C5BbRbTt/localhost-5000-music.png)

## 404 Page

The theme has a simple 404 page built in, which can be turned on in the settings.

::: warning
When previewing locally, you will not get a 404 page when you visit the site with the error.
For local preview, please visit http://localhost:4000/404.html
:::

```yaml
# A simple 404 page
error_404:
  enable: true
  subtitle: "Page not found"
  background:
```

![404 Page](https://i.postimg.cc/qBcTYqtc/localhost-5000-404-html.png)

## Message Board Page

In the blog root directory run

```bash
npm install hexo-butterfly-envelope --save
```

In the site configuration file `_config.yml`, add the following configuration

```yaml
# envelope_comment

envelope_comment:

enable: true #Control Switches

custom_pic:

cover: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/violet.jpg #Letterhead image

line: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/line.png #Letterhead bottom image

beforeimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/before.png # First half of the envelope

afterimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/after.png # Back half of the envelope

message: #The body of the letterhead, in multi-line text, is written as follows

- What do you want to ask?

- What do you want to say?

- What do you want to spit out?

- Even if there is something you want to eat, you can tell me ~

bottom: Automatic clerk mannequin at your service! #Only single line text is supported

height: #1024px, the height of the envelope scratched out

path: # [Optional] The path name of comments. Default is comments, the generated page is comments/index.html

front_matter: # Optional】Comments page front_matter configuration

title: Message Board

comments: true

top_img: false

type: envelope
```

![# Message Board](https://i.postimg.cc/fL2xTDy8/localhost-5000-404-html.png)

## My Equipment Page


1. Go to your Hexo blog's root directory

2. Open a terminal in the Hexo blog root directory `[blog]` and type

   ```bash
   hexo new page equipment
   ```

3. You will find the file `source/equipment/index.md`.

4. Modify this file:
   Remember to add `type: "equipment"`
    ```markdown
    ---
    title: My equipment.
    date: 2023-06-10 21:33:24
    type: equipment
    aside: false
    top_img: false
    ---
    ```

5. To add data, create a new file `[blog]\source\_data\equipment.yml`, if you don't have a `_data` folder, please create one yourself. The following is an example of the default format, open `[blog]\source\_data\equipment.yml` and type:
```yml
- class_name: fine goods
  description: Recommendations for physical equipment
  tip: Enjoy the fun of technology with DragonJay!
  top_background: https://bu.dusays.com/2023/07/05/64a4c38842b7a.webp
  good_things:
    - title: production capability
      description: Hardware to enhance your productivity
      equipment_list:
        - name: MacBook Pro 2021 16 inches
          specification: M1 Max 64G / 1TB
          description: The screen has a good display, accurate colors, high contrast, strong performance and excellent battery life. It can be used for development and design.
          image: https://bu.dusays.com/2023/07/05/64a4c3b191e2e.png
          link: /posts/571d.html
        - name: iPad 2020
          specification: dark sky gray / 128G
          description: Things play out, buy pre-productivity, buy post-Adventure.
          image: https://bu.dusays.com/2023/07/05/64a4c3b191e2e.png
          link: https://www.apple.com.cn/ipad-10.2/
        - name: iPhone 12 mini
          specification: Green / 128G
          description: Ultra-ceramic crystal panel, glass back panel with aluminum metal frame, curved and graceful rounded corner design, mini size just one hand to grab, deep in my heart, the only drawback is probably not enough battery life.
          image: https://bu.dusays.com/2023/07/05/64a4c3ded6319.webp
          link: https://www.apple.com.cn/iphone-12/specs/
        - name: AirPods（third generation）
          specification: Standard Edition
          description: The third generation compared to the second generation to improve a lot, as I do not like in-ear headphones can be in, spatial audio and other features are really new, the first time to use have been surprised.
          image: https://bu.dusays.com/2023/07/05/64a4c3ded6319.webp
          link: https://www.apple.com.cn/airpods-3rd-generation/
    - title: travels
      description: Physical objects and equipment used for travel
      equipment_list:
        - name: Apple Watch Series 8
          specification: Black
          description: Always keeping a watchful eye on my health, popping up late at night with a standing reminder, but it does effectively increase the frequency of my exercise, and with the apple family bucket it's still a great product, the downside is still the range.
          image: https://bu.dusays.com/2023/07/05/64a4c40ab698a.webp
          link: https://www.apple.com.cn/apple-watch-series-8/
        - name: NATIONAL GEOGRAPHIC shoulder bag
          specification: Black
          description: The large National Geographic black bag fits a 16" Macbook Pro just right and is comfortable to carry, with its own rain cover on the bottom that also works well, and all sorts of weird little pockets that are dear to my heart.
          image: https://bu.dusays.com/2023/07/05/64a4c40ab698a.webp
          link: https://item.jd.com/100011269828.html
        - name: NATIONAL GEOGRAPHIC Student School Bag 🎒
          specification: reddish white
          description: The National Geographic Black Large Bag is a great value and practical.
          image: https://bu.dusays.com/2023/07/05/64a4c40ab698a.webp
          link: https://item.jd.com/100005889786.html
```

Theme config file to turn on the comment in `menu` about and my gear, navigation bar my gear, note the indentation!!!!

::: warning 
The images in the example data are not guaranteed to be available, so please replace them with your own links to your own graphic beds.
:::