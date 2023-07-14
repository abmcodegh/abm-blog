---
author: 世开 Coding
date: 2023-05-27
title: 延长免费支持 Classic UI
description: 
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_Jmix 2.0 即将发布，团队决定延长经典UI的免费支持时限_

<!-- more -->

![Jmix 延长免费支持 Classic UI](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/cues/cues_cover.png) {.center .size-8 .radius .shadow}

::: info
**经典UI（Classic UI）** 指的是以Vaadin 8为技术框架的Jmix UI，包含在 Jmix 1.0~1.5+ 版本中。**Flow UI** 是指以Vaadin 24为技术框架的新一代Jmix UI，包含在Jmix 1.5~2.0+ 版本中。
:::

我们计划在2023年6月发布下一个主版本 - Jmix 2.0。同时，依赖的基础框架也将使用最新的版本：Spring Boot 3、Spring 6、EclipseLink 4。技术栈的升级不会给应用开发人员带来很多新的功能，但底层框架的版本需要升级以提供对基础依赖库的支持。另外，Jmix 1.x 中使用的依赖库版本的免费支持即将结束。例如，Spring Framework 5 仅在 [2024 年底之前提供免费支持](https://spring.io/projects/spring-framework#support)，而 Spring Security 5 的免费支持更短，[仅到 2023 年 11 月](https://spring.io/projects/spring-security#support)。

抱歉告诉大家，随着Spring的升级，**Jmix 2.0将不能继续支持基于Vaadin 8的经典UI**。问题在于，Vaadin 8与新的Jakarta Servlet API和Spring 6不兼容。

因此，如果项目希望从Jmix 1.5升级到Jmix 2.0，开发者需要将应用的界面从经典UI迁移至Flow UI。Flow UI的开发方法与经典UI相同：都是服务端代码，用XML描述页面布局，用Java编写控制器。但是UI组件库、导航、布局规则和许多其他方面都有很大不同。因此，对于一些大体量的项目来说，从经典UI迁移到Flow UI都可能是一项困难且耗时的任务。

根据我们的标准版本支持政策，由于当前Jmix 1.5之后即将发布主版本2.0，因此，于2023年2月发布的Jmix 1.5将成为LTS版本，对经典UI上的项目的免费支持将持续三年，直到2026年2月。但我们感觉，三年不足以让一个大型项目升级UI。此外，考虑到许多具有经典UI的项目刚刚启动或目前正在积极开发中，我们将在之前的方案之外为经典UI提供额外的支持。

因此，我们决定将未来的发布计划分为两个分支。主分支开发将照常进行，以4个月为周期：1.5 → 2.0（2023年6月）→ 2.1（2023年10月）→ 2.x。同时，我们将继续开发1.x分支并发布几个新版本：1.5 → 1.6（2024年）→ 1.7（2025年）。版本1.7将是版本1.x的最后一个版本，并成为LTS版本。因此，使用经典UI的项目将获得五年的免费支持，直到 **2028** 年。

![Jmix版本免费支持计划](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/cues/cues_timeline.jpg) {.center .size-8 .shadow}

1.x分支的目标不仅仅是提供关键修复，而且还从主分支移植重要的改进。在次版本1.6和1.7中，我们将计划发布一些无法包含在补丁版本中的具有一定风险的功能。这两个版本不会遵循正常的4个月周期，而是在累积特定数量的功能时发布，大约每年一次。

我们将把主要精力投入到版本2.x的开发中，并进一步开发Flow UI。在1.x版本中，我们将冻结核心经典UI的开发，只接收错误修复，而在后端和附加组件中，我们将努力移植版本2.x中所有兼容的改进。还有一点需要注意，如果在像Spring这样的底层库中出现了一些关键问题，并且在与Jmix 1.x不兼容的版本中进行了修复（例如在 Spring Framework 6 中），我们将无法在Jmix 1.x中提供该修复程序。此时，我们将评估这些问题的影响并提供其他能缓解该问题影响的方法。

关于 1.x 分支的另一件事：Jmix 1.6和1.7将不包含Flow UI。因此，如果你此时正好有一个使用Flow UI的项目，请适时直接升级至Jmix 2.0，没有必要等1.6了。

上面关于Jmix版本拆分的所有内容都与Studio无关。Studio仍将以标准的4个月周期（1.5 → 2.0 → 2.1 → 2.x）发布，所有未来的2.x版本都将支持Jmix 1.x项目。因此，使用经典UI的项目开发人员也能获得Studio的所有新功能，以及对IntelliJ新版本的支持。

最后，总结一下将来各个版本之间的差异：

- Jmix 2.0 版仅包含 Flow UI。
- 经典 UI 的支持将在版本 1.6 和 1.7 中继续。经典 UI 将提供五年的免费更新，直至 **2028** 年。
- Jmix 1.5 是包含经典 UI 和 Flow UI 的 **最后一个版本**。
- 使用 Flow UI 的 Jmix 1.5 项目应升级到 Jmix 2.0。使用经典 UI 的项目应升级到 Jmix 1.6 以及 1.7。
- Studio 版本 2.x 将同时支持 Flow UI 和经典 UI 项目。

当前支持版本的信息请查阅 [Jmix 发布版本](https://www.jmix.io/framework/versioning)

我们希望通过延长对 Jmix 1.x 经典 UI 的支持，能为开发者提供足够的时间完成项目，或为迁移到较新的 Jmix 版本提供的最新技术栈做好准备。
