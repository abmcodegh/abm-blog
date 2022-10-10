---
author: 世开 Coding
date: 2022-08-09
title: Jmix 1.3 发布
description: Jmix 1.3 发布，快速开发平台，支持新 UI。
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_最近我们发布了 Jmix 的一个新功能版本 1.3.0。这可以说是一个里程碑版本，其中包含 Vaadin Flow UI 和一键云部署的功能预览。_

<!-- more -->

![Jmix1.3 发布](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3.png) {.center .size-8 .radius .shadow}

<!-- # Jmix 1.3 版本发布 -->

最近我们发布了 Jmix 的一个新功能版本 1.3.0。这可以说是一个里程碑版本，其中包含 Vaadin Flow UI 和一键云部署的功能预览。本文中，我们将介绍该升级版本中包含的一些重要功能。

与往常一样，新版本改动的完整信息和升级说明我们都发布在文档的[最近更新](https://docs.jmix.cn/jmix/whats-new/index.html)页面。

## 必须使用 Java 11

在升级这个新版之前，需要注意的最重要一点就是，新版本不再支持 Java 8。框架使用 Java 11 构建，因此需要升级至 Java 11 或以上版本才能构建并运行应用程序。

不支持 Java 8 的主要原因是因为引入了基于 Vaadin 23 的试验性 FlowUI 模块，这个模块要求 Java 11。因此，我们觉得该是时候跟 Java 8 说再见了，使用新的 Java 版本也可以让我们能享受一些语言和标准库的改进。

## Flow UI 预览

我们实现了 Roadmap 中对于新 UI 的承诺，在新版本发布了基于 Vaadin 23 的预览。新的 UI 叫做 FlowUI，支持通过简单的前端自定义创建响应式布局：

![jmix FlowUI 预览](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3_flowui_responsive.gif) {.center .size-8 .shadow}

使用 FlowUI 也会遵循与当前 UI 同样的开发模式：服务端编程模式、使用 Studio 可视化设计的 XML 布局、数据容器以及相似的 Java API。但同时，UI 组件的控制和布局规则将会完全不同。所以，不要期望将来能做无缝迁移。

此时，该模块本身和 Studio 对该模块的支持都非常不稳定。我们将在 1.3 后续的补丁版本中引入相当大的改动甚至破坏性改动。

当前提供预览的主要目的是给社区展示新 UI 是什么样的，以及通过这个展示向大家收集更多关于功能和开发优先级的反馈。希望在 2022 年 10 月推出的下一个功能版本中，我们能提供稳定的 API 以及使用新 UI 构建真正应用的最小完整功能。

## 一键云部署预览

另一个预览功能是支持将应用程序部署至 AWS EC2 云环境。如果希望试一试，需要按照[文档](https://docs.jmix.cn/jmix/whats-new/index.html#one-click-cloud-deployment)的说明启用该功能。

![Jmix AWS 部署](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3_aws_deployment.png) {.center .size-8 .shadow}

该功能支持将你的应用程序快速部署至云环境。过程中，会使用基于应用程序的服务和数据库配置生成 **docker-compose** 文件，然后在 AWS EC2 上创建一个虚拟机，在虚拟机中安装 Docker 并用你的应用程序构建一个 Docker 镜像。最后会运行 Docker 容器，并为你提供应用程序的 URL。至此完成整个部署过程，应用程序直接可以在互联网访问！

由于这个功能目前只是简单部署（不涉及集群、负载均衡等），所以可以用在为客户或同事演示应用程序或者简易轻量级部署的场景。

## Studio 改进

这一版中，JPQL 设计器已经足够稳定，可以用来编辑查询语句。在 Jmix 工具窗口中的组件探查器（Component Inspector）中点击数据容器的 query 属性时会自动打开。也可以通过装订线栏的图标为代码中定义的查询语句手动打开设计器。

![Studio JPQL designer](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3_jpql.gif) {.center .size-8 .shadow}

而针对 Liquibase 生成更改日志方面，则有以下改进：
* Studio 支持在 Jmix 工具窗口的 Data Store 节点下展示已有的更改日志文件
* 可以通过 Jmix 工具窗口的操作新建空的更改日志文件，然后通过代码自动完成功能手动写入变更集，代码自动完成功能支持对实体中定义的表名和列名自动提示。
* 新的更改日志文件名现在包含 HHmmss 格式的时间戳（而不是之前用的 010，020 这样的序列号）。这样可以在切换代码分支时避免更改日志名称重复。

![Studio Liquibase Changelog](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3_lbcl.gif) {.center .size-8 .shadow}

## BPM 改进

我们花了很多努力用于提升 Studio 中的 BPMN 设计器，现在它已经和运行时的设计器功能相当，提供与源代码的紧密集成。

![Studio BPMN designer](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3_bpm.gif) {.center .size-8 .shadow}

另外，如果项目中用到了多租户扩展组件，BPM 引擎也支持与其集成提供多租户工作流功能。

## 角色管理

在资源和行级角色管理界面添加了过滤器组件，支持在编辑、分配角色时进行快速搜索。还增加了导入导出功能按钮，支持在不同的应用程序间共享角色配置。

![Role management](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3_role_filter.png ) {.center .size-8 .shadow}

行级策略编辑器现在提供针对 JPQL 语句的代码完成功能、语法检查操作以及文档链接操作。

![Row-level policy enhancement](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.3/jmix_1.3_row_level_policy_add.gif) {.center .size-8 .shadow}

## 支持 JPA 级联

为了更好地遵循标准，我们实现了对 JPA 级联操作（通过 **@ManyToOne(cascade = CascadeType.ALL)** 注解定义）的完整支持。为所有通过级联操作保存的实体提供所有 Jmix 功能的支持，包括实体事件、动态属性、实体日志、安全控制、跨数据存储引用。

## 后续计划

我们未来几个月的主要方向是 FlowUI 模块的稳定性，包括添加必要的 UI 组件和为框架中的基础部分构建 UI，比如安全子系统。

我们也会持续地为 1.3 提供问题修复。补丁版本 1.3.x 基本上会按照一个月一次的频率进行发布。

希望大家在我们的[论坛](https://forum.jmix.cn)上多提意见！感谢大家提供的想法、建议以及问题报告！
