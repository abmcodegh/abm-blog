---
author: 世开 Coding
date: 2022-09-06
title: 服务端驱动 Web UI 开发
description: Jmix 快速开发平台服务端驱动 Web UI 开发
category:
  - Jmix
tag:
  - 技术
head:
  - - meta
    - name: keywords
      content: jmix,快速开发,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架,服务端 UI
---

_Jmix 是一个全栈业务应用系统开发框架，通过集成 Vaadin 实现了服务端驱动开发 UI 的方法。_

<!-- more -->

![题图](https://cdn.abmcode.com/zh-cn/jmix/_media/server-side-ui/title.png)  {.center .size-8 .radius .shadow}

<!-- # 服务端驱动 Web UI 开发 -->

现如今，作为一名全栈开发人员需要完成更多复杂的任务。曾几何时，情况并不是如此。这种演变有多种原因，比如，需要负责的事情越来越多（想想 DevSecOps）。另一个原因是技术栈中不同技术的框架和开发工具也变得越来越复杂。

特别是，近年来 UI 开发的复杂度有所提高。随着单页应用（SPA）框架的兴起，前后端分离开发的方式似乎成了趋势。在这种开发模式下，JavaScript 前端通过 API 从后端获取数据或执行操作，通常要求为所有 UI 相关的交互提供 HTTP API。而对于许多类型的后台应用程序来说，这些 API 是计划之外的复杂度。因此，有些工程师会尝试寻找一种单一技术的全栈开发框架。

Jmix 是一个全栈业务应用系统开发框架，通过集成 Vaadin 实现了服务端驱动开发 UI 的方法。下面我们介绍一下其工作原理，以及为什么在很多时候消除前后端的分界线会有一定优势。

## 什么是服务端驱动 UI 开发

服务端 Web UI 开发通常表示 UI 与服务端通过紧耦合的方式执行某些业务功能。在这种紧耦合的架构中，UI 和业务域的后端具有很高的内聚性，共同为特定的业务功能提供服务。

我们将其与采用 SPA 的分离架构进行比较。在前后端分离架构中，通过显式定义 API 使得前端和后端之间有清晰的分界线。此时，前后端的耦合度要低很多，仅通过预先定义的 API 合约进行通信。

一般来说，独立组件之间的架构耦合度是越低越好。但是问题在于，UI 和后端是否真正的独立组件？还是说在功能上他们其实属于一个逻辑组件？如果他们是一个逻辑组件，那么耦合度高反而更好，因为这是单个组件的性质。

在企业级应用程序后台 UI 的场景中，前后端的功能是非常一致的。因此，在这种场景下引入低耦合的成本会非常高，不但不能带来额外的价值，还会在效率和进行不必要的低耦合架构方面造成损害。

使用服务端驱动的 UI，前端和后端代码通常使用相同的编程语言编写。对于 Web 应用程序，以前是可以使用服务端渲染的 HTML 进行呈现的。在 Java 世界中，像 JSP 或 Thymeleaf 这样的解决方案也是使用这种方式通过 Java 创建用户界面。会有一些特定领域的语言或者 API，但是语言都差不多。尽管如此，开发者还是需要使用 HTML 和 CSS 并掌握基础的 Web 知识。

特别是随着 JavaScript 和 SPA 的兴起，Web 浏览器承载了更多的业务逻辑，使用同一语言开发前后端也变得不太流行。但是，一些强大的框架出现使得服务端驱动的 Web UI 成为可能，例如 Phoenix Liveview，C# 的 Blazor 以及 Java 生态中的 Vaadin。

从概念上讲，这些框架都遵循相同的原则：开发人员使用他们首选的后端语言（如 Elixir，C# 或 Java）编写 UI 逻辑。框架执行一些转换以使其能在浏览器中展示。这样，开发人员就不必仅仅因为技术限制而将前端和后端视为单独的组件。

## Vaadin 原理

Vaadin（更准确地说是 Vaadin Flow）是一组 Web 组件和 Java API。应用程序开发人员用 Java 编写 UI 布局。Vaadin 根据布局信息在浏览器中创建相应的 UI 组件。

当用户与组件交互（如单击按钮）时，会创建对服务端的回调，该回调会触发声明为事件监听器的相应 Java 方法。

该框架负责浏览器和服务端之间的交互，因此无需显式 API 即可将 UI 与后端进行连接。并能跟踪服务端每个用户会话和状态，以执行相应的方法调度。

在前后端分离架构中，客户端代码通常通过 JavaScript 执行专门的 API 调用，以触发服务器端的操作。由于在客户端上进行大多数交互操作，因此很少执行 API 调用。而 Vaadin 却恰恰相反，会将大多数 UI 交互都传输到服务端执行。

我们看一个交互示例。Jmix “宠物诊所” 示例包含特定月份访问的日历视图：

![宠物诊所示例](https://blog.abmcode.com/zh-cn/jmix/_media/server-side-ui/pet_clinic.png ":class=center-eighty-image")

有两个按钮用于更改显示的月份。单击该按钮时，将执行以下 Java 代码，并使用上个月的访问数据刷新浏览器中的 UI：

```java
@UiController("petclinic_Visit.browse")
@Route(value = "visits")
public class VisitBrowse extends StandardLookup<Visit> {
    //...
    @Subscribe("navigatorPrevious")
    protected void onNavigatorPreviousClick(Button.ClickEvent event) {
        calendarNavigators
                .forMode(
                        CalendarScreenAdjustment.of(calendar, calendarNavigator, calendarTitle),
                        datatypeFormatter,
                        calendarMode.getValue()
                )
                .navigate(PREVIOUS, calendarNavigator.getValue());
        loadEvents();
    }
}
```

Vaadin 的交互过程如下：

![Vaadin 交互过程](https://blog.abmcode.com/zh-cn/jmix/_media/server-side-ui/sequence_diagram.svg ":class=full-image-svg")

Vaadin 的 JavaScript 部分（Vaadin Client）处理浏览器上的按钮点击，并将请求委托给 Vaadin 组件的后端部分（Vaadin Server），后端负责查找上下文和当前用户会话。之后，Vaadin 将点击事件发送到服务端的 Java UI 代码。UI 代码负责更新日历并刷新数据。这是通过 Vaadin Java API 进行交互并更新 Vaadin 组件来实现的。最后，Vaadin Server 会选择需要更新的组件并将组件的新状态传输到浏览器中的 Vaadin Client。Client 会在浏览器中复制更新组件的请求，最后用户可以看到上个月的数据。

## Jmix 扮演的角色

Jmix 是一个少代码快速应用程序开发框架，用于构建以数据为中心的业务应用。该框架的基石之一是使用 Vaadin 作为 UI 渲染引擎。Jmix 支持在 XML 中以声明方式创建 UI 布局，相比于使用纯 Vaadin 在 Java 中以编程的方式构建更为简洁。XML 布局可以通过进行手动编辑，也可以在 Jmix Studio 的可视化设计器中进行编辑。

Jmix 还提供了专门针对企业应用程序的功能，例如扩展 Vaadin 库的大量数据感知 UI 组件。例如复杂的过滤器组件，支持用户构建任意的过滤条件。

此外，Jmix 还带有开箱即用的扩展组件，提供数据访问控制和审计以及报表和业务流程管理等功能。许多 Jmix 组件都包含用户界面，支持可无缝集成到生成的全栈应用程序中。得益于 Vaadin 的服务端编程模型和 XML 编写的可扩展 UI 布局，这些默认界面都可以在应用程序中进行按需定制开发。

## 服务端驱动 UI 开发的优势

服务端驱动 UI 开发与前后端分离式开发相比，在某些特定场景有一些优势。

### 减少复杂度

首先，消除了认知负担，因为从开发人员的角度来看，整体解决方案更简单。无需考虑前后端两个不同的生态系统，开发人员可以更多地关注应用程序本身的逻辑，提升开发效率。Java 开发人员可以利用他们已有的知识进行调试、管理依赖、静态代码分析、测试等。

在某些情况下，能使用 JavaScript 生态是很关键的需求。而 Vaadin 在这里做了一层抽象，这是一把双刃剑。与专门的 JavaScript SPA 相比，在 Vaadin 中访问 JS 并不容易。

另一个技术优势是很少有重复代码。在 Jmix/Vaadin 中，业务逻辑与 UI 可以使用相同的数据模型。消除重复可显著降低复杂度。验证逻辑也可以只出现在一个位置，不必在 UI 代码和后端 API 代码中重复验证。

### 更加安全

从安全的角度来看，Vaadin 的架构也有一些好处。内部逻辑不在浏览器处理，而只向浏览器发送更新 UI 所需的正确数据。与需要通过开发人员确定为 UI 传输正确数据的情况相比，这是一种本质上更安全的开发方法。

### 全栈团队

具有严格前后端分离的跨职能团队在工作时，通常会导致团队本身也基于技术进行划分的情况，因为不同的领域需要不同的专业知识。这种分离的架构会导致子团队边界的出现，也就是著名的“康威定律”（Conway's Law）。而开发者在这种环境中，会无法对整个端到端的业务流程进行了解，因为职责上是分离的，每个子团队只负责一部分工作。

全栈工程师可以清楚地看到在数据模型中对某些内容进行建模的含义，以及可能给 UI 部分带来的问题或好处。Vaadin 隐式地推广了这种模式，因为降低了后端开发人员进行前端相关工作的门槛。

这也带来了另一个有趣的好处。当只有小型团队时，单语言开发也能够完成整个应用程序。团队中不需要有专门的前端开发人员。

但另一方面，对于许多前端开发人员来说，这种使用后端技术开发 UI 的方法非常罕见。因此，基于现有的团队结构，这可能是一个优点，也可能是一个缺点。

## Vaadin UI 方案的局限

Vaadin 的方案当然也不是银弹。事实上，在服务端存储每个 UI 会话，给后端带来了一定的内存负担。这对于大多数业务应用系统来说可能不是大问题，并发用户数最多也只是几万。但是，如果是具有数百万并发用户的应用，则 UI 将需要大量的内存开销。

如果只是关注 Jmix 和业务应用系统时，这种局限并不是一个真正的问题。但是还有一些应用程序具有面向终端用户的公共 UI，在这种情况下，Jmix 作为后台和通过 REST API 与 SPA 前端进行交互的混合解决方案可以避免该局限。

