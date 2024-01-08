---
author: 世开 Coding
date: 2023-07-03
title: Jmix 是如何集成 BPMN 的？
description: Jmix Web 快速开发平台集成 BPMN 是如何提升开发效率的
category:
  - Jmix
tag:
  - 少代码
head:
  - - meta
    - name: keywords
      content: jmix,BPM,BPMN,快速开发平台,Web 快速开发平台,少代码,低代码,企业级应用开发,Spring 框架
---

_Jmix 中是如何集成BPMN的？_

<!-- more -->

<!-- ![题图](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-rest-diff-ways/jmix-rest-api.png) {.center .size-8 .radius .shadow} -->

<!-- # 大标题 -->

[Jmix](https://www.jmix.cn) 是一个用于构建企业级应用程序的开源高生产力平台。全球的Java开发者使用Jmix构建以数据为中心、以业务流程为中心的系统以及内容管理系统（CMS）等，特别是在有严格的时间和预算限制时。Jmix的优点简而言之，能使Java开发者成为进行全栈开发，并最终能交付标准的Spring Boot应用，且无运行时费用。在开发方面，Jmix提供对开发者友好的专业IDE，后端和UI使用单一Java/Kotlin语言，基于Spring Boot主流核心技术，这是吸引开发者的主要原因。这篇文章探讨了我们如何在平台内引入工作流，嵌入 [bpmn-js](https://github.com/bpmn-io/bpmn-js) ，以及用户如何从中受益。

## 初识 BPMN

以数据为中心的CMS系统通常需要业务流程自动化的功能，以便实现事务性的业务逻辑与代码分离。这可以通过集成工作流建模器来完成，支持业务分析师和开发者按照BPMN标准设计业务逻辑。我们从2017年才开始实现该功能，因为那时有收到来自社区的需求。最初，在Jmix的前身CUBA平台中，我们提供了基于Activiti的自定义业务流程设计工具。

![CUBA平台内的BPMN建模器](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image1.png) {.center .size-8 .radius .shadow}

我们在业务流管理组件中提供了这个建模器，包括以下功能：

- 提供运行时BPMN可视化设计器；
- 集成数据模型，将Activiti数据模型包含在CUBA实体中，使开发者能非常方便地在在UI和业务逻辑中使用；
- 流程表单，用于分配和操作流程；
- 用于管理流程模型、运行流程实例和分配流程的UI界面；
- 子流程：已有的流程模型可以合并到更大的流程模型中；

BPMN建模器会在内部以特定的JSON格式保存业务流程。当开发者启动流程部署时，CUBA会自动将业务流程转换为Activiti BPM引擎支持的XML格式。这一步虽然有些粗糙，但是也标志着集成可视化BPMN设计器的初步成功。后续我们还提供了与工作流配合使用的其他内容，例如数据模型、特定的业务表单等。尽管CUBA社区已经有开发者在实际的项目中使用这个功能，但平台团队发现CUBA提供的BPM组件有潜在的扩展性问题。到2018年底，BPMN建模器的UI也已经明显过时。

## 在 Jmix 中重新构建 BPM

2019年，我们开始设计下一代CUBA平台 - Jmix。设计新版平台时，主要有两个原则：

- 尽可能减少我们自己实现的技术，更多的是与主流Java应用程序开发方法对齐；
- 将高生产力工具整合到统一的开发环境中，无需在不同的窗口之间切换，并将开发者所需的一切放到鼠标轻易能点到的地方。

我们非常注重“不重新发明轮子”的原则。因此，过程中非常重要的一点是，怎样能以最少的改动整合现代BPMN建模器。经过研发团队的调研，我们认为bpmn-js的功能符合我们的要求：

- 现代的外观样式；
- 非常强的定制化支持，例如支持新元素和样式；
- GitHub 上丰富的实际案例；
- 给力的免费社区论坛支持；
- 快速迭代。

引擎方面，我们也从Activiti切换到Flowable BPM。

建模器方面，我们将bpmn-js作为运行时建模器集成在Jmix应用程序中。新的BPMN建模器非常漂亮：

![嵌入bpmn-js的Jmix BPMN设计器](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image2.png) {.center .size-8 .radius }

## Java开发者使用bpmn-js

前面我们说到，Jmix的重要功能之一是开发者可以仅使用单一语言构建全栈应用。其UI的关键技术由Jmix框架内集成的Vaadin提供，Vaadin支持使用Java API控制前端布局。基于这个原因，我们决定将bpmn-js建模器包装成Vaadin UI组件，并使用Java方法包装js-modeler函数。最后，开发者拿到的是一个现成的Java组件，可以根据业务需求无缝集成到应用程序中。

我们看看Jmix中用于监控当前流程状态的Java组件，这是一个开箱即用的组件，Jmix为应用程序提供了一个BPM子系统，支持在流程实例编辑界面中监控流程状态，如下图所示：

![带有状态监控的流程实例编辑器](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image3.png) {.center .size-8 .radius }

在Jmix中，开发者可以只需几个简单的步骤便能轻松重用 `bpmnViewer` 组件，将其添加到自定义界面中。首先，需要将 `bpmnViewer` 作为标准UI组件添加到Jmix界面的XML布局中。

![带有bpmnViewer组件的Jmix界面布局](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image4.png) {.center .size-8 .radius }

其次，需要将bpmnViewer注入自定义界面控制器，并应根据应用程序的业务逻辑编写其行为。

![在Jmix界面控制器中初始化bpmnViewer](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image5.png) {.center .size-8 .radius }

如上图所示，Java开发者拥有在应用程序中渲染和配置BPMN的所有工具：

1. 注入bpmnViewer组件
2. 为viewer组件设置BPMN XML
3. 调用 `addMarker` 函数为元素设置特定样式

完成后，bpmnViewer会在自定义界面上无缝运行。通过极少的编码工作，开发者可以在整个项目中重复使用bpmn-js的功能。

![带有BPMN流程图的界面](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image6.png) {.center .size-8 .radius }

上面是一个将bpmn-js与Vaadin技术集成并为应用程序开发过程带来新想法的例子。然而，我们不仅包装了bpmn-js建模器现有的功能，还基于Jmix的一些特定功能进行了扩展。比如：

- 配置服务任务的工具窗口增加了一组新字段，可以配置项目的Spring Bean供用户选择，从而消除了一些潜在的错误；
- 开发者可以使用列表视图和编辑弹窗管理流程执行的监听器。

![为配置Spring Bean扩展的服务任务窗口](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image7.png) {.center .size-8 .radius }

![带有专用配置窗口的流程执行监听窗口](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image8.png) {.center .size-8 .radius }

集成bpmn-js建模器和可嵌入的BPMN引擎能让开发者和业务分析师直观地设计业务流程，并将流程与数据模型、角色和业务逻辑进行无缝连接。这看上去很现代，且非常有价值，但是与我们的核心产品理念还有一点差距：Jmix是一个开发平台，但是开发者在流程建模的过程中仍然需要在开发时和运行时之间切换。因此我们希望为开发者提供与运行时几乎相同的操作，不需要在不同工具之间切换。

## 集成BPM的开发环境

这个在开发环境无缝集成BPM的愿景终于在2021年成为现实，我们将基于bpmn-js的BPM设计器引入了IntelliJ IDEA IDE。

![集成的BPMN建模器的Jmix Studio](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-bpm/004-image9.png) {.center .size-8 .radius }

我们沿用了相同的应用程序开发过程，在Jmix Studio中设计好了一个流程之后，开发者可以在本地环境中使用嵌入的BPMN引擎运行。在开发Studio的过程中，最具挑战的任务是将运行时的BPMN建模器的体验带入IntelliJ IDEA。我们的目标是为开发者在IDE中提供与运行时相似的体验，但同时遵循IDE工具的设计准则。经过开发团队的努力，我们最后终于实现了这个目标，可以通过比较运行时的设计器和Jmix Studio中的设计器查看相似之处。

## 提升开发者生产力

总结一下在Jmix中集成BPMN的一些好处：

- 使用bpmn-js，我们能够将BPMN编辑器无缝集成到IntelliJ IDEA中。开发者将获得出色的BPMN建模体验；同时，统一的配置和智能代码功能提供了更好的用户体验。
- 可以将业务分析师准备的BPMN流程图直接上传到IntelliJ IDEA中，然后使用项目特定的业务逻辑、用户界面、集成组件和异常处理来进一步开发，而无需切换到另一个工具；
- 可以在开发机器上部署和运行流程，测试业务逻辑，以确保流程能按预期运行。这一步中，开发者可以使用IntelliJ强大的调试工具，简化开发流程并提高开发效率；
- 完成本地调试后，开发可以将流程提交到repo，业务分析师可以在测试环境的应用程序中查看和运行流程图的新版本。
- 如果分析师需要修改BPMN模型，可以使用应用程序中相同的工具在运行时调整流程图，然后再次测试。成功测试后，可以下载新的版本并发回给开发进行验证。

因此，使用Jmix，团队可以在各自熟悉的工具中完成整个业务流程的开发生命周期，更重要的是，还可以集成到CI/CD环境中。在实际项目中，开发者会实现一些流程统计和分析的工具，这种方法与BPMS解决方案非常类似，该解决方案能完美适配Java或Kotlin中以数据为中心的应用程序和业务逻辑。

Jmix集成了bpmn-js，实现了在IntelliJ IDEA和应用程序中为业务流程建模提供提供相同易用性和便捷性的用户体验。
