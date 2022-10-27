---
author: 世开 Coding
date: 2022-10-15
title: 应用程序现代化权威指南
description: <SEO 描述>
category:
  - 行业视角
head:
  - - meta
    - name: keywords
      content: jmix,老旧系统改造,现代化改造,应用程序现代化,数字化转型,快速开发框架
---

_老旧系统在业务运行中仍然承担了很多的工作。但是当这些系统逐渐进入淘汰的队列时，我们需要选择合适的方法让它实现高效经济地重生。_

<!-- more -->

![题图](https://cdn.abmcode.com/zh-cn/industry/_media/mdn/mdn_title.svg) {.center .size-6 .radius .shadow}

<!-- # 大标题 -->

## 什么是应用程序现代化

简单来说，软件现代化、老旧系统现代化或老旧应用现代化都是指替换或升级旧软件的过程。根据系统的情况和公司的情况，对软件进行现代化改造的方案从轻微修改到完全更换都可以。比方说我们要升级一架飞机，有时可以使用新的航空电子设备、新型号的发动机或舒适的座椅对其进行改装，有时候就干脆卖了换一架新的。

## 进行现代化改造的原因

对老旧系统进行现代化改造的主要驱动因素可以分为两类：一类是希望通过改造消除对旧系统继续升级维护的技术成本和风险，另一类是希望利用新技术带来的各种便利。

### 老旧技术的风险

当聊起使用老旧技术开发的系统时，开发人员通常会说：“如果能用，就先不要动它”。例如，很多企业仍然在使用几十年前开发的 COBOL 应用系统。这些系统到现在仍然非常稳定，而且速度快。只要不出问题，似乎可以一直这么用下去。但是万一需要修改或者排除小问题，麻烦就来了。现在已经很难找到 COBOL 开发人员了，当时编写这些系统的人大多已经退休，而年轻的开发人员已经不再会想要学习这样的开发语言。即便辗转找到一个，他也要花费很长的时间先熟悉并理解代码。

还有一个风险是，如果老旧系统中使用第三方的软件，而该软件已经不继续提供支持了，这样就进入了死胡同。在想办法替换这个软件之前，只能希望不要出任何漏洞和问题。

### 采用新技术

与此同时，新的技术和架构范式如雨后春笋般的涌现：

- Web 和移动端 UI 提供了非常好的用户体验；
- 容器化技术将应用程序与运行环境进行解耦，以便应用程序能运行在任何环境并且产生相同的行为；
- 微服务架构提高了应用的可伸缩性和弹性，并且打破了大型整体式应用系统的复杂性，技术支持和功能修改也相对容易；
- DevOps 工具可在最短的时间内交付新版本的应用，避免了人为干预；
- 公共云提供即用型服务、无尽的可扩展性和最高水平的容错性，而只需最少的维护工作。

最后，现代开发语言更容易理解，更不容易出错。新的生态系统中包括上千个多个经过多次验证的库和功能强大的开发人员工具，这些工具能提供代码完成、调试、重构、智能提示和纠错功能。所有这些都提高了开发人员的工作效率，有助于更快地开发高级别的应用系统。

在当今瞬息万变的数字世界中，生存的首要能力就是适应性。但是，仍在使用老旧软件的企业根本无法跟上竞争的步伐。在老旧系统上花费了很多，等待了很久，但是仍然无法提供客户想要的功能。

::: tip 比尔盖茨曾经说过：
#### “唯一成功的大型公司是那些能先于他人淘汰自己产品的公司”
:::

## 应用系统何时才算过时？

我们看到，每年都有闪亮的新框架和技术出现。是否意味着使用前两年技术的业务系统过时了？当然不是，“过时”是一个相对的术语，只能在特定的环境中考虑。

在企业级软件世界中，10-20 年是应用系统的正常生命周期。在此期间，内部或供应商会为该系统提供积极的支持，并且可以根据业务需求进化。一些独立的后台系统甚至可以是更老旧的软件，而不会对业务的灵活性产生明显影响。但是另一方面，面向终端客户的门户或者 App 可能需要每隔几年进行一次完整的系统现代化改造才能保持竞争力。

因此，如果满足下列条件，我们才能说这个软件“过时”了：

- 无法再提供技术支持了。例如，供应商倒闭，且无法找到能提供支持的人员了。
- 无法提供能满足新的系统级或者业务级需求的更新。例如，一个桌面客户端软件无法为用户提供基于浏览器的访问；或者，应用系统中写死了部分业务逻辑，但是这部分逻辑与现有的业务流程冲突了。
- 只有在淘汰的软件或者硬件设备中才能运行。例如，一个手机 App 只能在塞班系统中运行；或者，一个网页需要使用 Flash 播放器。

这里提到的局限性，也包括虽然可以，但是需要花费难以接受的代价。

## 现代化改造还是数字化转型？

![现代化改造还是数字化转型](https://cdn.abmcode.com/zh-cn/industry/_media/mdn/mdn_or_dt.svg) {.center .size-4 .float-l}

这是在踏上现代化征程之前必须回答的战略问题。数字化转型不仅要求 IT 环境现代化，还要求改变业务流程，抓住新的数字领域的机会。

我们假想一个简单的例子。一家传统的零售银行，业务由大型机上的 COBOL 软件提供支持。当变革的时机到来时，银行可以选择对软件和硬件进行现代化改造。但一般来说，这个任务非常困难、漫长而且昂贵。而同时，金融科技方面的创业公司，由于没有历史遗留问题，并且无需分析生产系统之间的盘根错节，他们可以轻装上阵而轻松领先。

或者，银行可以保持一切原样，而在新的绿地开展新的金融科技业务。通过这种方式，银行可以不受约束地使用一流的技术和实践，例如，没有实体办公室、使用手机上的超级 App，由人工智能驱动的评分系统等。一段时间后，就可以停止旧业务并将客户迁移到新平台。这样的方案与企业应用程序现代化相比，数据更容易迁移。现有的客户群、丰富的银行经验以及一流的技术相结合，完全可以成为一个强大的组合。

希望上面这个极简的例子能说明现代化改造和数字化转型之间的区别。

## 现代化改造策略

![现代化改造策略](https://cdn.abmcode.com/zh-cn/industry/_media/mdn/mdn_strategies.svg) {.center .size-4 .float-r}

以下问题的答案决定了最佳的应用程序现代化策略：

- 我们想要达到什么结果？
- 我们有什么资源？
- 我们是否拥有应用系统的源代码，是否可以对其进行修改？
- 有问题的系统与其他系统之间是否有互相依赖的关系？
- 系统宕机的话是不是严重的问题？必须 7x24 小时全天候运行吗？

下面我们给出一些现代化改造的选项，从最容易最便宜的一直到最难最贵的。

### 推迟改造

等一等有时候是最好的选择。推迟不是说不做，而是从当前的利弊分析，进行现代化改造所需要的开销和承担的风险大于业务上能得到的收益，或者当前无法为现代化改造分配所需的资源（例如，业务主管在负责其他优先级更高的事情），又或者问题系统所依赖的其他系统要先进行改造。如果从远期利益判断，进行现代化改造是一件必须做的重要事情，那么请不要从任务队列中删除，重要的事情如果一直不做，就会变得紧急且代价昂贵。

### 改变部署环境

现代化改造的一种选择是进行部署环境的改造，将业务系统迁移至新的基础架构，一般来说是指进行容器化部署，通过本地 Kubernetes 实例进行托管或者部署至公有云环境。这种相对简单的改造可以将系统从老旧的硬件环境中独立出来，一方面可以避免由于硬件老化造成的损失并减少维护费用，另一方面能提高硬件的使用率和业务的弹性。

### 选择新平台

这个与上一个选项有点类似，选择新的平台是指通过对业务系统的简单修改，从而使用一些云服务，比如数据库、人员认证、全文检索服务等。是将除了应用系统本身之外的其他部分进行优化，达到降本增效的目的。

### 应用系统前端改造

还有一个比较流行的改造方案就是仅对应用系统的前端进行改造。一般来说，只需要对后台系统进行相对简单的修改就可以将应用系统的功能通过类似 REST API 的方式进行开放。然后其他应用程序可以通过 API 与原系统进行交互。随着 Web 和移动端的流行，我们还可以开发新的 Web 端和移动端应用程序，调用这些开放的 API，为终端用户提供更好的体验。这种方案虽说没有对后台系统进行太大的改动，但是面向用户侧却得到了有力提升，并且可以结合上面两个选项同步进行。

### 重构

业务系统往往在构建初期，并没有预料到后来将要面对的更多更复杂的业务，因此随着时间推移，系统的弹性不能满足需求或者由于修修补补已经变得不堪重负。这种情况下，只能通过重构或者重新设计来拯救老系统。最流行的方案就是将原本的单体应用拆分成微服务应用。还有一些其他的方案，例如，对负担最重的业务进行优化、使用缓存、使用集群部署、将部分数据迁移至 NoSQL 数据库等等。最重要的是保证在重构的过程中，业务系统的主要功能没有变化。

### 完全重写

现代化改造的终极方案就是“复刻替换”或者完全重写。此时，业务系统就完全替换成一个新的系统了。当有下列问题时，这个选项可能是最好的或者唯一的选择：

- 系统的功能已经无法满足业务需要并且无法通过简单修补实现新的功能
- 没有资源或者技术修改原有系统的源码
- 市场上有更新更好，且支持更完备的产品出现

除非我们已经有一个能替换的产品并且带有完善的迁移工具，否则“复刻替换”不会是一个简单的任务。因此，针对系统的不同复杂度，有两种不同的方案：
  
1. “大爆炸”式

对于体谅较小或者不太复杂的系统，我们推荐使用这种方案。重新设计全新的方案，并付诸实施，进行完整的测试之后，定制详细的迁移方案。然后沐浴更衣，一次将系统完全替换。理论上，我们还需要有一个回滚的 plan B，如果出问题至少还能用老系统顶一下。

2. 逐步替换

这个方案一般用于体量比较大或核心业务系统，比如 ERP 之类，也有那种需要 7x24 小时运行的系统，比如出租车调度系统等。一个替换方案是将单体系统拆分为不同的微服务，保证每个微服务业务相对单一且容易替换，这样可以逐个击破。还有一种替换方案是“并行”，新旧系统并行运行，但需要保证数据的同步和一致性，这种方案的好处是业务不会因为新系统的不稳定而中断。

## 如何开始现代化改造？

![开始现代化改造](https://cdn.abmcode.com/zh-cn/industry/_media/mdn/mdn_start.svg) {.center .size-4 .float-l}

现实中，不同的公司具有不同程度的愿景和风险偏好，而在预算、时间、资源以及复杂的业务系统架构等方面也面临着不同程度的困难和约束。现代化改造的根本目的一个是为了降本增效，另一个是为了捕捉新的市场机会。

因此，业务系统进行现代化改造的进程最好从对现有的业务系统进行评估开始，以符合公司愿景和风险偏好的原则确定是否要进行旧系统的现代化改造，并且从预算、时间、资源、系统复杂度等方面确定进行改造的方式方法，比如使用投资回报率（ROI）作为关键评估指标。

在这个过程中，保持合理的现代化要求非常重要。例如，系统的的可扩展性通常被高估，导致产生不必要的成本，并采取了次优的策略。根据 ROI 指标和系统的依赖关系，可以确定现代化过程的优先级并选择最佳的现代化解决方案。

## Jmix 能否支撑？

![jmix 少代码平台](https://cdn.abmcode.com/zh-cn/industry/_media/mdn/mdn_jmix.png) {.center .size-5 .float-r}

Jmix 是一个开源[应用程序开发平台](https://www.jmix.cn)，可以在“完全重写”的现代化改造方案中显著减少所需的成本和时间。Jmix 是一个高效的开发平台，对开发者非常友好，并无需为应用系统支付高昂的许可费用。Jmix 支持在已有数据库上直接运行，这个功能在“并行”的逐步替换方案中十分有用。很多团队和业务系统已经从传统的 Delphi、MS Lightswitch、FoxPro、Oracle Forms 等平台迁移至 Jmix。

![jmix 少代码平台2](https://cdn.abmcode.com/zh-cn/industry/_media/mdn/mdn_jmix_spe.png) {.center .radius .shadow}

更多有关 Jmix 的功能，可以访问 [Jmix 中国](https://www.jmix.cn) 官网进行了解。

## 常见问题

- 什么是老旧系统现代化？

  老旧系统现代化是指对不再能满足业务需求的系统进行升级或替换的过程。

- 为什么需要对老旧系统进行现代化改造？
  1. 缺少能对现有系统提供支撑的专业人员或资源。
  2. 已经不再提供维护的第三方库或组件。
  3. 系统无法提供对新业务功能的支持。

- 如何定义系统是否老旧？
  1. 无法获取对系统的技术支持。
  2. 无法通过可接收的成本实现对系统修改以支持新业务。
  3. 系统依赖其他“过时”的系统。

- 目前有什么现代化改造的策略？
  1. 接受风险，继续等待。
  2. 改变部署环境。
  3. 选择新平台。
  4. 替换面向终端用户的前端界面。
  5. 重构。
  6. 完全重写。

## 客户案例

- TAB 银行

[TAB 银行](https://www.jmix.cn/customer-stories/tabbank)构建卓越的内部流程，扩展业务的同时降低成本。

- CDER 集团

[CDER 集团](https://www.jmix.cn/customer-stories/cder)通过采用“并行”策略对核心系统进行现代化改造，达到了三倍业务增长。

- Ingenico

[Ingenico](https://www.jmix.cn/customer-stories/internal-time-management-system) 团队将 Jira 与旧的项目管理系统集成，节省了时间并达到业务预期。

