---
author: 世开 Coding
date: 2022-10-24
title: Angular SSR 探究
description: 通过 Angular Universal 实现 SSR
category:
  - Angular
tag:
  - 技术
head:
  - - meta
    - name: keywords
      content: angular,universal,ssr,seo,服务端渲染,静态编译
---

_你知道 Angular Universal 吗？可以帮助网站提供更好的 SEO 支持哦！_

<!-- more -->


![题图](https://cdn.abmcode.com/zh-cn/ng/_media/universal/ngu_cover.png) {.center .size-8 .radius .shadow}

<!-- # 大标题 -->

一般来说，普通的 Angular 应用是在 _浏览器_ 中运行，在 DOM 中对页面进行渲染，并与用户进行交互。而 Angular Universal 是在 _服务端_ 进行渲染（Server-Side Rendering，SSR），生成静态的应用程序网页，然后在客户端展示，好处是可以更快地进行渲染，在提供完整的交互之前就可以为用户提供内容展示。

::: info 提示
本文是在 Angular 14 环境中完成，有些内容对于新的 Angular 版本可能并不适用，请参考 Angular 官方文档。
:::

## 使用 SSR 的好处

### 对 SEO 更加友好

虽然现在包括 Google 在内的某些搜索引擎和社交媒体声称已经能支持对由 JavaScript（JS）驱动的 SPA（Single-Page Application）应用进行爬取，但是结果似乎差强人意。静态 HTML 网站的 SEO 表现还是要好于动态网站，这也是 Angular 官网所持有的观点（Angular 可是 Google 的！）。

Universal 可以生成无 JS 的静态版本的应用程序，对搜索、外链、导航的支持更好。

### 提高移动端的性能

某些移动端设备可能不支持 JS 或者对 JS 的支持非常有限，导致网站的访问体验非常差。这种情况下，我们需要提供无 JS 版本的应用，以便为用户提供更好的体验。

### 更快地展示首页

对于用户的使用体验来说，首页展示速度的快慢至关重要。根据 [eBay 的数据](https://web.dev/shopping-for-speed-on-ebay/)，搜索结果的展示速度每提高 100 毫秒，“添加至购物车”的使用率就提高 0.5%。

使用了 Universal 之后，应用程序的首页会以完整的形态展示给用户，这是纯的 HTML 网页，即使不支持 JS，也可以展示。此时，网页虽然不能处理浏览器的事件，但是支持通过 `routerLink` 进行跳转。

这么做的好处是，我们可以先用静态网页抓住用户的注意力，在用户浏览网页的时候，同时加载整个 Angular 应用。这给了用户一个非常好的极速加载的体验。

## 为项目增加 SSR

Angular CLI 可以帮助我们非常便捷的将一个普通的 Angular 项目转变为一个带有 SSR 的项目。创建服务端应用只需要一个命令：

```sh
ng add @nguniversal/express-engine
```

::: warning
建议在运行该命令之前先提交所有的改动。
:::

这个命令会对项目做如下修改：
1. 添加服务端文件：
   - `main.server.ts` - 服务端主程序文件
   - `app/app.server.module.ts` - 服务端应用程序主模块
   - `tsconfig.server.json` - TypeScript 服务端配置文件
   - `server.ts` - [Express](https://expressjs.com) web server 的运行文件

2. 修改的文件：
   - `package.json` - 添加 SSR 所需要的依赖和运行脚本
   - `angular.json` - 添加开发、构建 SSR 应用所需要的配置

在 `package.json` 中，会自动添加一些 npm 脚本：`dev:ssr` 用于在开发环境运行 SSR 版本；`serve:ssr` 用于直接运行 build 或 prerender 后的网页；`build:ssr` 构建 SSR 版本的网页；`prerender` 构建预渲染后的网页，与 `build` 不同，这里会根据提供的 `routes` 生成这些页面的 HTML 文件。

## 替换浏览器 API

由于 Universal 应用不是在浏览器中执行，因此一些浏览器的 API 或功能将不可用。例如，服务端应用是无法使用浏览器中的全局对象 `window`、`document`，`navigator`，`location`。

Angular 提供了两个可注入对象，用于在服务端替换对等的对象：`Location` 和 `DOCUMENT`。

例如，在浏览器中，我们通过 `window.location.href` 获取当前浏览器的地址，而改成 SSR 之后，代码如下：

```ts
import { Location } from '@angular/common';

export class AbmNavbarComponent implements OnInit{
  // ctor 中注入 Location
  constructor(private _location:Location){
    //...
  }

  ngOnInit() {
    // 打印当前地址
    console.log(this._location.path(true));
  }
}
```

同样，对于在浏览器使用 `document.getElementById()` 获取 DOM 元素，在改成 SSR 之后，代码如下：

```ts
import { DOCUMENT } from '@angular/common';

export class AbmFoxComponent implements OnInit{
  // ctor 中注入 DOCUMENT
  constructor(@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
    // 获取 id 为 fox-container 的 DOM
    const container = this._document.getElementById('fox-container');
  }
}
```

## 使用 URL 绝对地址

在 Angular SSR 应用中，HTTP 请求的 URL 地址必须为 _绝对地址_（即，以 `http/https` 开头的地址，不能是相对地址，如 `/api/heros`）。Angular 官方推荐将请求的 URL 全路径设置到 `renderModule()` 或 `renderModuleFactory()` 的 `options` 参数中。但是在 v14 自动生成的代码中，并没有显式调用这两个方法的代码。而通过读 Http 请求的拦截，也可以达到同样的效果。

下面我们先准备一个拦截器，假设文件位于项目的 `shared/universal-relative.interceptor.ts` 路径：

```ts
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

// 忽略大小写检查
const startsWithAny = (arr: string[] = []) => (value = '') => {
    return arr.some(test => value.toLowerCase().startsWith(test.toLowerCase()));
};

// http, https, 相对协议地址
const isAbsoluteURL = startsWithAny(['http', '//']);

@Injectable()
export class UniversalRelativeInterceptor implements HttpInterceptor {
    constructor(@Optional() @Inject(REQUEST) protected request: Request) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // 不是绝对地址的 URL
        if (!isAbsoluteURL(req.url)) {
            let protocolHost: string;
            if (this.request) {
                // 如果注入的 REQUEST 不为空，则从注入的 SSR REQUEST 中获取协议和地址
                protocolHost = `${this.request.protocol}://${this.request.get(
                    'host'
                )}`;
            } else {
                // 如果注入的 REQUEST 为空，比如在进行 prerender build：
                // 这里需要添加自定义的地址前缀，比如我们的请求都是从 abmcode.com 来。
                protocolHost = 'https://www.abmcode.com';
            }
            const pathSeparator = !req.url.startsWith('/') ? '/' : '';
            const url = protocolHost + pathSeparator + req.url;
            const serverRequest = req.clone({ url });
            return next.handle(serverRequest);

        } else {
            return next.handle(req);
        }
    }
}
```

然后在 `app.server.module.ts` 文件中 provide 出来：

```ts
import { UniversalRelativeInterceptor } from './shared/universal-relative.interceptor';
// ... 其他 imports

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    // 如果你用了 @angular/flext-layout，这里也需要引入服务端模块
    FlexLayoutServerModule, 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalRelativeInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
```

这样任何对于相对地址的请求都会自动转换为绝对地址请求，在 SSR 的场景下不会再出问题。

## Prerender 预渲染静态 HTML

经过上面的步骤后，如果我们通过 `npm run build:ssr` 构建项目，你会发现在 `dist/<your project>/browser` 下面只有 `index.html` 文件，打开文件查看，发现其中还有 `<app-root></app-root>` 这样的元素，也就是说你的网页内容并没有在 html 中生成。这是因为 Angular 使用了动态路由，比如 `/product/:id` 这种路由，而页面的渲染结果要经过 JS 的执行才能知道，因此，Angular 使用了 Express 作为 Web 服务器，能在服务端运行时根据用户请求（爬虫请求）使用模板引擎生成静态 HTML 界面。

而 `prerender`（`npm run prerender`）会在构建时生成静态 HTML 文件。比如我们做企业官网，只有几个页面，那么我们可以使用预渲染技术生成这几个页面的静态 HTML 文件，避免在运行时动态生成，从而进一步提升网页的访问速度和用户体验。

### 预渲染路径配置

需要进行预渲染（预编译 HTML）的网页路径，可以有几种方式进行提供：
1. 通过命令行的附加参数:
   
   ```sh
   ng run <app-name>:prerender --routes /product/1 /product/2
   ```
2. 如果路径比较多，比如针对 `product/:id` 这种动态路径，则可以使用一个路径文件：
   
   ::: code-tabs

    @tab routes.txt

    ```
    /products/1
    /products/23
    /products/145
    /products/555
    ```

    :::

    然后在命令行参数指定该文件：
    ```sh
    ng run <app-name>:prerender --routes-file routes.txt
    ```

3. 在项目的 `angular.json` 文件配置需要的路径：
   ```json
    "prerender": {
      "builder": "@nguniversal/builders:prerender",
      "options": {
        "routes": [ // 这里配置
          "/",
          "/main/home",
          "/main/service",
          "/main/team",
          "/main/contact"
        ]
      },
   ```

配置完成后，重新执行预渲染命令（`npm run prerender` 或者使用命令行参数则按照上面<1><2>中的命令执行），编译完成后，再打开 `dist/<your project>/browser` 下的 `index.html` 会发现里面没有 `<app-root></app-root>` 了，取而代之的是主页的实际内容。同时也生成了相应的路径目录以及各个目录下的 `index.html` 子页面文件。

## SEO 优化

SEO 的关键在于对网页 `title`，`keywords` 和 `description` 的收录，因此对于我们想要让搜索引擎收录的网页，可以修改代码提供这些内容。

在 Angular 14 中，如果路由界面通过 `Routes` 配置，可以将网页的静态 `title` 直接写在路由的配置中：

```ts
{ path: 'home', component: AbmHomeComponent, title: '<你想显示在浏览器 tab 上的标题>' },
```

另外，Angular 也提供了可注入的 `Title` 和 `Meta` 用于修改网页的标题和 meta 信息：

```ts
import { Meta, Title } from '@angular/platform-browser';

export class AbmHomeComponent implements OnInit {

  constructor(
    private _title: Title,
    private _meta: Meta,
  ) { }

  ngOnInit() {
    this._title.setTitle('<此页的标题>');
    this._meta.addTags([
      { name: 'keywords', content: '<此页的 keywords，以英文逗号隔开>' },
      { name: 'description', content: '<此页的描述>' }
    ]);
  }
}

```

## 结语

Angular 作为 SPA 企业级开发框架，在模块化、团队合作开发方面有自己独到的优势。在进化到 v14 这个版本中提供了不依赖 `NgModule` 的独立 `Component` 功能，进一步简化了模块化的架构。

Angular Universal 主要关注将 Angular App 如何进行服务端渲染和生成静态 HTML，对于用户交互复杂的 SPA 并不推荐使用 SSR。针对页面数量较少、又有 SEO 需求的网站或系统，则可以考虑使用 Universal 和 SSR 技术。
