---
title: introduction
icon: fa-solid fa-network-wired
---

### Requirements

Installing Hexo is quite easy and only requires the following beforehand:

-   [Node.js](http://nodejs.org/) (Should be at least Node.js 10.13, recommends 18.0 or higher)
-   [Git](http://git-scm.com/)
-   [Visual Studio Code](https://code.visualstudio.com/)(Optionally, you can also edit directly on Github)

[![nodejs-org-en-download.png](https://i.postimg.cc/0jTzftzY/nodejs-org-en-download.png)](https://postimg.cc/gLKccHqj)
[![git-scm-com-downloads.png](https://i.postimg.cc/d36sfwtj/git-scm-com-downloads.png)](https://postimg.cc/gLwbX9hx)
[![code-visualstudio-com.png](https://i.postimg.cc/HsWv1dk8/code-visualstudio-com.png)](https://postimg.cc/F1qVjtch)

### Install Git

-   Windows: Download & install [git](https://git-scm.com/download/win).
-   Mac: Install it with [Homebrew](https://brew.sh/), [MacPorts](http://www.macports.org/) or [installer](http://sourceforge.net/projects/git-osx-installer/).
-   Linux (Ubuntu, Debian): `sudo apt-get install git-core`
-   Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`
> **For Mac users**
> 
> You may encounter some problems when compiling. Please install Xcode from App Store first. After Xcode is installed, open Xcode and go to **Preferences -> Download -> Command Line Tools -> Install** to install command line tools.

### Install Node.js

Node.js provides [official installer](https://nodejs.org/en/download/) for most platforms.

Alternative installation methods:

-   Windows: Install it with [nvs](https://github.com/jasongin/nvs/) (recommended) or [nvm](https://github.com/nvm-sh/nvm).
-   Mac: Install it with [Homebrew](https://brew.sh/) or [MacPorts](http://www.macports.org/).
-   Linux (DEB/RPM-based): Install it with [NodeSource](https://github.com/nodesource/distributions).
-   Others: Install it through respective package manager. Refer to [the guide](https://nodejs.org/en/download/package-manager/) provided by Node.js.

nvs is also recommended for Mac and Linux to avoid possible permission issue.

> **Windows**
> 
> If you use the official installer, make sure **Add to PATH** is checked (it’s checked by default).

> **Mac / Linux**
> 
> If you encounter `EACCES` permission error when trying to install Hexo, please follow [the workaround](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) provided by npmjs; overriding with root/sudo is highly discouraged.

> **Linux**
> 
> If you installed Node.js using Snap, you may need to manually run `npm install` in the target folder when [initializing](https://hexo.io/docs/commands#init) a blog.

### Install Hexo

Once all the requirements are installed, you can install Hexo with npm:

$ npm install -g hexo-cli  

### Advanced installation and usage

Advanced users may prefer to install and use `hexo` package instead.

$ npm install hexo  

Once installed, you can run Hexo in two ways:

1.  `npx hexo <command>`
2.  Linux users can set relative path of `node_modules/` folder:

echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile  

then run Hexo using `hexo <command>`

Once Hexo is installed, run the following commands to initialize Hexo in the target `<folder>`.

$ hexo init foldername 
$ cd foldername  
$ npm install  

Once initialized, here’s what your project folder will look like:

.  
├── _config.yml  
├── package.json  
├── scaffolds  
├── source  
|   ├── _drafts  
|   └── _posts  
└── themes

### _config.yml

Site configuration file. You can configure most settings here.

### source

Source folder. This is where you put your site’s content. Hexo ignores hidden files and files or folders whose names are prefixed with `_` (underscore) - except the `_posts` folder. Renderable files (e.g. Markdown, HTML) will be processed and put into the `public` folder, while other files will simply be copied.

### themes

Theme folder. Hexo generates a static website by combining the site contents with the theme.

## Future

simple but not simplistic

![Anzhiyu](https://img02.anheyu.com/adminuploads/1/2023/04/12/64367c8fdcc7f.webp)

## Contact me

TG: [Neil Bowman](https://t.me/Neil1Bowman)

## journey

[hexo-theme-anzhiyu-en](https://github.com/DragonJay666/hexo-theme-anzhiyu-en) It is based on hexo-theme-anzhiyu.