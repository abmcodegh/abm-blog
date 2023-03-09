---
author: Bryan Yin
date: 2023-03-06
title: Jmix 适合我的项目吗？
description: 本文介绍了如何评估 Jmix 快速开发框架是否适合你的项目
category:
  - Jmix
tag:
  - 评估
head:
  - - meta
    - name: keywords
      content: 快速开发平台,快速开发框架,少代码,低代码,企业级应用开发,jmix,Web 快速开发平台,Java 快速开发框架
---

_寻找 Web 快速开发平台？试试 Jmix 少代码_

<!-- more -->


![题图](https://cdn.abmcode.com/zh-cn/jmix/_media/evaluate-jmix/evaluate-jmix-cover.png) {.center .size-8 .radius .shadow}

<!-- # 大标题 -->

你好，欢迎关注 Jmix 快速开发框架！

如果你或者你的团队正在尝试解决下面这些问题：
1. 开发企业级 Web 应用，项目紧急，需要快速、低成本交付。
2. 需要出 MVP（最小可用产品），但是对原型工具不是很满意：看上去不是真实系统而且不能基于原型继续开发。
3. 准备开发一个 SaaS 产品，在寻找一个稳定易扩展的后端框架。
4. 用 Spring Boot 开发了一段时间，发现有很多额外的工作：升级版本、抽离模块、代码统一等。尝试寻找一种最佳实践，提高代码质量，减少管理成本。
5. 老旧系统需要升级，在寻找一个现代主流的框架作为升级的目标。
6. 低代码用了一段时间，也有一定的软件开发能力，想摆脱低代码的限制。

**并且**你或者你的团队符合下列条件：
1. 使用 Java / Kotlin 开发语言；Java / Jakarta EE 作为开发规范，并且大概率使用 Spring / Spring boot。
2. 前端开发力量不足，但是有复杂的专业 Web 页面需要开发。
3. 追求舒适的开发体验和统一的代码规范、代码质量。

那么，我非常建议你评估一下 Jmix 框架。相信通过下面的介绍，你对于 Jmix 是否适合自己的项目能有正确的判断。

## 什么是 Jmix? {#what-is-jmix}

Jmix 是一款基于 Spring boot 的开源 Web 快速开发框架。包含三个部分：

### 开源框架

Jmix 框架本身是基于 Spring boot 的“最佳实践集合”。非侵入式地建立在 Spring boot 框架之上，提供企业级开发必须的功能，例如，基于角色的权限控制（RBAC），数据库行级别的数据访问控制，快速创建功能丰富的数据展示和操作页面等。因此，你在 Spring 框架积累的经验可以继续使用，并且由于继承了 Spring 的扩展性，Jmix 框架也是非常灵活和易扩展的。

![Jmix 架构](https://cdn.abmcode.com/zh-cn/jmix/_media/evaluate-jmix/jmix-arch.png) {.center .size-5 .radius .shadow}

### Jmix Studio

Studio 是一款 IntelliJ IDEA 插件。通过 Studio 提供开发阶段的辅助编程：提供实体、界面、角色、JPQL 的可视化设计器，数据库脚本生成，代码辅助，自动注入，智能代码浏览等等丰富且能提高开发者效率和代码质量。

![Jmix Studio](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-studio1.png) {.center .size-9 .radius }

### 扩展组件市场

通过组件市场，你可以仅需几次简单的按钮点击就在项目中集成某个典型功能。Jmix 的扩展组件是包含实体、业务逻辑、界面的全栈模块。例如，BPM、REST、报表、OIDC、WebDAV、Chart 等等。

![](https://cdn.abmcode.com/zh-cn/jmix/_media/evaluate-jmix/add-on-marketplace.png) {.center .size-5 .radius .shadow}

## Jmix 应用是什么样的？{#outlook}

链接中是一个 Jmix 应用示例，您可以登录体验一下 Jmix 交付的 Web 应用：

[Jmix宠物诊所🐶](https://demo.jmix.io/petclinic/#login)

::: tip
登录页下方可选择中文简体语言。
:::

![宠物诊所应用截图](https://cdn.abmcode.com/zh-cn/jmix/_media/petclinic.png) {.center .size-9 .radius .shadow}

## 为什么不直接用 Spring Boot？{#whyjmix}

在底层框架和上层框架之间选择需要考虑的唯一因素就是，上层框架究竟给我们带来了什么好处？Jmix 基于 Spring boot，采用非侵入式策略构建。也就是说 Jmix 并没有破坏原生 Spring boot 框架的内容，并可以使用其广泛的生态。同时，在这个框架之上，提供了最佳实践和企业级软件的开发便利：

- 基于 IDEA 插件的可视化开发工具辅助，更快，更舒适。尤其是数据库设计、角色配置和 UI 开发。
- 数据安全，基于角色的权限（RBAC）配置和行级数据安全控制。
- 支持主流关系型数据库，Liquibase 实现无差别数据库脚本管理。
- 开箱即用的 BPM、REST、OIDC、WebDAV、Chart、报表、全文搜索、LDAP/SAML组件等。
- 支持全 DevOps 和云原生应用程序。
- 开箱即用的后台管理页面。

## 我能得到哪些支持？{#support}

Jmix 为企业级 Web 应用的快速开发提供了全面的支持：
1. 提供集成在 IntelliJ IDEA 内的开发插件，在开发全流程中，开发者都能获得高效的编码支持。
2. 完善的[开发文档](https://docs.jmix.cn/jmix/intro.html)。
3. [程序示例](https://www.jmix.cn/learn/live-demo/)，其中[在线示例](https://demo.jmix.io/sampler)网站提供了源码，可以直接复制到项目中。
4. [**社区论坛**](https://forum.jmix.cn/)，这里是我们的知识积累宝库，可以搜索你要问的技术问题，或者提出新的问题，我们会有工作人员免费解答。

此外，我们也提供关于 Jmix 的技术咨询服务。

## 欢迎试用 Jmix！{#try}
通过官方的快速入门文档，您可以在 3-6 小时之内完成一个全栈 Web 应用，涵盖完整的 Jmix 开发过程，从数据建模到创建 UI 以及管理访问权限。

在这个过程中您需要注意几个 Tips：
- 「官方文档及快速入门链接👉」https://docs.jmix.cn/jmix/tutorial/
- Jmix会引导您注册试用账户，这其中如果遇到响应失败，您可以尝试连接VPN后再重新提交。或者联系我们线下处理（联系方式在本文末尾）。
- 「Jmix Studio下载/安装」https://docs.jmix.cn/jmix/setup.html#studio
- 开发过程中遇到问题，可以在Jmix论坛检索或提问。「Jmix 论坛👉」https://forum.jmix.cn/
 
完成上述过程后您会对 Jmix 有个基本了解。

💡 Jmix试用账户包含 Jmix 所有高级功能，有效期 28 天，在这期间，您可以充分试用 Jmix，然后决策是否适合您的项目。
 
## Jmix 怎么收费？如何最小成本使用 Jmix？{#lowcost}
Jmix 有免费开发版、快速开发版以及企业版。

- 免费开发版：适合项目后期维护，以及有经验的 Jmix 开发者。
- 快速开发版：包含可视化设计器，数据库更新脚本生成；新手友好；或追求生产效率和舒适应用程序开发的人员。
- 企业开发版：包含快速开发版所有功能以及一些企业级高级功能（BPM，WebDAV等）。
 
Jmix 是对开发过程收费的，您发布、部署的任何应用不会被授权到期所影响。如果您需要最小成本的使用 Jmix，可以尝试以下方案：
- 在项目初期或交付稳定版之前使用快速开发版，快速交付，舒适开发。
- 在项目维护期或熟练使用 Jmix 之后，使用免费版。
- 或只使用免费版，只享受 Jmix 开箱提供的功能组件。

最后，欢迎关注 Jmix 公众号，获取实时资讯：

![公众号二维码](https://cdn.abmcode.com/_media/jmix_qr_code.jpg) {.center .qr-code .size-1.5}

