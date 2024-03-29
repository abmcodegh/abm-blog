---
author: 世开 Coding
date: 2023-01-18
title: Jmix 是不是低代码平台？
description: Jmix 是一个少代码开发平台，介于低代码和传统开发之间。
category:
  - Jmix
tag:
  - 少代码
head:
  - - meta
    - name: keywords
      content: jmix,少代码,快速开发,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_Jmix 是不是低代码？这篇文章会给你答案。_

<!-- more -->

<script>
  const abmGlobal =
    typeof globalThis === "object"
      ? globalThis
      : typeof window === "object"
      ? window
      : typeof global === "object"
      ? global
      : null;
  abmGlobal.lessCodeToolContent = [
    {title:'代码审查',content:'能在一个开发工具中查看和审查代码'},
    {title:'代码调试',content:'能使用专业的开发工具调试应用程序的代码'},
    {title:'代码重载',content:'能重载或重写一些核心逻辑'},
    {title:'协作编程',content:'在编码时，能在团队中使用一些流行的代码管理工具'},
    {title:'自由部署',content:'希望能按需部署和分发应用程序'},
    ];
  abmGlobal.lessVsLowContent = [
    {tag:'LOW CODE',content:'低代码提供了一个在特定平台边界内使用团队技能的方案<hr>低代码需要供应商提供技术支持<hr>低代码使用合作伙伴的能力<hr>低代码根据其闭源平台的特性和独有的开发经验提供实施方案加速开发过程<hr>低代码需要供应商进行培训<hr>低代码根据用户数进行计费'},
    {tag:'LESS CODE',content:'Jmix 少代码提供知识库和技术以增强团队能力<hr>Jmix 少代码以开源贡献者提供支持<hr>Jmix 少代码提供开源社区经验<hr>Jmix 少代码通过提供特定的工具和数以千计的开发者经验自然加速开发过程<hr>Jmix 少代码需要几周的时间学习<hr>Jmix 少代码根据团队开发者数量计费'},
    ];
  abmGlobal.lowCodeLackContent = [
    {title:'界面灵活度',content:'界面灵活度 - 支持复杂界面设计以及界面的自定义能力。低代码并不支持自定义界面，而只能使用已有的界面模板。少代码支持自定义用户界面或使用内部集成的界面模板。'},
    {title:'业务逻辑灵活度',content:'业务逻辑灵活度 - 数据模型的复杂度，BPM 和工作流的复杂度。低代码的数据模型通常比较简单，而且难以构建复杂的系统。少代码能提供更广泛的数据模型支持和业务逻辑支持。'},
    {title:'供应商独立性',content:'供应商独立性 - 在运行时能脱离供应商。低代码平台一般运行在供应商提供的环境中。少代码支持用户使用任何运行时环境。'},
    {title:'集成能力',content:'集成能力 - 框架的开放 API 能力以及与企业目前的 IT 系统集成的能力。低代码的集成能力受限于供应商的运行环境。少代码提供特定的集成和部署工具。'},
    ];
  abmGlobal.lessCodeTakeawaysContent = [
    {icon:'/icon/settings.svg',content:'低代码方案可用更灵活的少代码替代'},
    {icon:'/icon/tool.svg',content:'使用工具降低 web 开发的复杂度'},
    {icon:'/icon/layers.svg',content:'少代码的应用范围更广，低代码只能用于特定业务场景'},
    {icon:'/icon/documentation.svg',content:'少代码基于主流开源技术'},
    {icon:'/icon/forum.svg',content:'全面的文档以及免费的公开论坛'},
    {icon:'/icon/pen.svg',content:'通过快速开发工具和即用型组件大幅提升开发团队效率'},
    {icon:'/icon/cloud.svg',content:'可部署至任意环境'},
    {icon:'/icon/shopping.svg',content:'加快产品上线时间'},
    {icon:'/icon/partnership.svg',content:'无供应商锁定'},
    ];
  abmGlobal.whatIsLessCodeContent = [
    {title:'那么，我们说的少代码究竟是什么？',content:'“少代码”是面向专业开发人员的快速应用程序开发工具，结合了面向未来的技术栈，并提供丰富的即用型业务扩展组件。从概念上讲，它介于低代码应用程序平台和传统开发之间，结合了前者的高开发速度和后者的灵活性。少代码与低代码类似，但专注于服务专业开发人员。<br><br>企业在选择低代码时犯的一个常见错误是忽略了开发人员的体验。这里的关键问题是谁将在你的公司中使用这个开发平台？如果开发人员是该技术的主要用户，那么最好专注于他们的需求，并相信我们的经验 - 开发者不想学习另一种无法获得专业技能的技术。'},
    ];
</script>

<!-- # 大标题 -->

![少代码图 1](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-less-code/less_code_1.svg) {.center .size-5 .float-r}

## Jmix 是低代码？

自从 Jmix 2018 年在中国推广以来，很多开发者会在使用之前询问我们，Jmix 是不是低代码，扩展性怎么样？

低代码应用程序平台（LCAP）是当今最流行的企业软件开发方法之一。今天，全球有超过 300 家 LCAP 供应商，产品数量也在不断增长。低代码平台的主要目的是减少业务技术人员和专业开发人员之间差距，甚至希望直接由业务人员替代专业开发人员进行软件系统的构建，这个想法是非常完美的。

作为专业软件开发市场经验丰富的参与者，Jmix 的开发团队也一直在跟踪趋势，希望发现能带来真正商业价值的功能，而低代码平台就是团队研究的方向之一。仔细看来，各种希望能替换掉专业开发人员的方案都有一些优势和劣势。下面我们看看大家关心的低代码范式是如何让企业买单的。

<br/>

![少代码图 2](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-less-code/less_code_2.svg) {.center .size-5 .float-l}

## 什么是低代码？

低代码基本上是描述应用程序可视化开发功能的术语，使用可视化开发的同时，可以编写有限的代码或脚本。低代码应用程序开发系统源自企业级系统，如 BPM、ECM 或 CRM 解决方案，专为特定目的构建。为了满足业务对灵活性的要求，供应商创建了复杂的工具，可以自由地自定义表单上的字段、设计自动化工作流程、并支持集成流行的办公软件。这是大多数低代码平台发展的典型方式。

如今，低代码市场一直在增长，同时分裂成不同的细分市场。低代码供应商根据产品适用场景、产品抽象级别和开发人员技能要求来区分产品和用户组。而其中某些平台仅关注一个非常狭窄的业务场景，并能完全不用编写代码，只提供可视化工具来构建应用程序。这种类型的产品也称为无代码平台。其他参与者则专注于专业的开发人员技能要求，为他们提供自动化日常操作的工具，关注更广泛业务领域的应用程序开发。

因此，一方面，当你尝试搜索应用程序开发技术时，由于产品众多，选择会相当困难。但从另一方面来说，你也完全有可能找到符合你需求的产品。

## 低代码能带来什么益处？

![少代码图 3](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-less-code/less_code_3.svg) {.center .size-5 .float-r}

在任何低代码平台营销物料中，首先他们会承诺能提供极快的开发速度，在某些情况下，这确实是事实，也是低代码平台最大的优点。

低代码的另一个优点是，成为开发人员非常容易，因为这些平台不需要对编程语言或软件架构有深入的了解。供应商为不同的功能、集成、UI 组件等提供开箱即用的模块。

但是，当你需要的某些功能平台不能提供时，你需要再次联系平台的供应商并使用他们提供的附加服务。因此，低代码平台的灵活性非常有限，零代码的灵活性更低。

更重要的是，应用程序源代码并不归你所有，并且这些代码只能在供应商的环境中运行。同时，平台的使用费通常比较高，是基于你系统的用户数进行计算的。最后的结果就是，一旦使用，则服务供应商就锁死了，不容易替换。

当然，这些缺点可能也不是缺点，比如，你的团队由市民开发者构成，并且寻找的是一个类似电子表格的产品，那么低代码是一个很好的方案。但是，如果你的团队主要由深入参与业务领域的软件工程师组成，则可以考虑使用更高级、更通用的方案：只需要根据团队技能、产品的需求和使用环境仔细选择高效的开发工具。

<br/>

![少代码图 4](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-less-code/less_code_4.svg) {.center .size-5 .float-l}

## 少代码概念

无需学习新的低代码开发人员技能，企业可以通过关注开发人员的效率来获得更高的软件开发生产力。

“让专业的人做专业的事” - 我们只需要考虑如何提高专业人士的效率。通过使用高生产力工具对日常操作进行自动化，以及使用开箱即用的功能模块，专业的软件工程师可以高效地完成更多的任务。并且最好让他们控制代码，在专业开发环境中工作。

### 除了高效的开发工具之外，软件工程师还希望能实现下列功能 { .center-text }

<AbmCardList data="lessCodeToolContent"/>

为了满足开发者的期望，Jmix 团队定义了一个新的概念<br>我们称之为 “少代码” 框架 { .center-text .enhanced .weight .large }

<hr>

<AbmCardList data="whatIsLessCodeContent"/>

### 少代码 vs. 低代码 { .center-text }

少代码虽然看起来与低代码概念相似，但基本上是两种不同的开发方法。主要区别在于技术栈类型。低代码需要使用某个企业的专有工具，而少代码基于开源技术栈。据此，我们总结了下列不同：

<AbmCardList data="lessVsLowContent"/>

### 同时，低/零代码平台在这几个方面缺少灵活性： { .center-text }

<AbmCardList data="lowCodeLackContent"/>

因此，少代码是低代码和传统开发之间的折衷。我们的团队使用这个 slogan 来定义 Jmix：<br> 一个用于企业开发的快速应用程序开发工具，为专业开发人员设计，基于面向未来的开源架构，提供强大的即用型组件。 { .enhanced .center-text }

### Jmix 少代码总结 {.center-text}

<AbmCardList data="lessCodeTakeawaysContent"/>

## Jmix 可以节省成本

![少代码图 5](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-less-code/less_code_5.svg) {.center .size-5}

当谈到商业工具时，企业主首先需要考虑投资是否能获得回报。由于 Jmix 是按开发人员的席位付费，因此，在 ROI 上具有绝对的优势。
