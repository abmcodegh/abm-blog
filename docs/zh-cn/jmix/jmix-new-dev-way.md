---
author: 世开 Coding
date: 2022-08-04
category:
  - Jmix
  - 技术文章
---

扩展组件的概念在使用 Jmix 框架开发中扮演着非常重要的角色。我们将在本文探索什么是扩展组件以及 Jmix Studio 在扩展组件开发和应用程序模块化方面能给开发者带来什么帮助。

<!-- more -->
https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon.png
![扩展组件开发标题图](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon.png) {.center .size-8 .radius .shadow}

# 扩展组件开发新体验

扩展组件的概念在使用 Jmix 框架开发中扮演着非常重要的角色。我们将在本文探索什么是扩展组件以及 Jmix Studio 在扩展组件开发和应用程序模块化方面能给开发者带来什么帮助。

Jmix 中的扩展组件只是依赖库的一种稍微高级的说法，其中包含应用程序中可以使用的预编译代码和其他资源。我们使用特定的术语“扩展组件”强调这个库与一般的 Java 库不一样，扩展组件遵循特定的规则并使用一些 Jmix 的核心特性，能自动将提供的功能集成至主应用程序中。

然而最重要的一点是，扩展组件是一个全栈的库，可以包含实体、数据库结构和 UI 界面，能无缝地与主应用程序的数据模型和 UI 集成。因此，仅仅通过在 `build.gradle` 中添加扩展组件的依赖，就可以在项目中获得一个完整的子系统：数据存储在主程序的数据库中，UI 与主菜单集成。

当然，这并不是说扩展组件一定要是一个复杂的全栈项目。很多扩展组件只提供了一个 UI 功能，或者只提供框架中某些接口的另一种实现，例如 `FileStorage`。在这种情况下，扩展组件可以使用通用基础设施在 <a href="https://www.jmix.cn/marketplace/" target="_blank">市场</a> 上发布并轻松安装到项目中。

## 扩展组件开发

Jmix Studio 提供 “Single Module Add-on” 项目模板，可以快速开始扩展组件的开发。这个项目模板包含单一的功能模块和一个 Spring Boot Starter。

当开发一个可重用的扩展组件时，一般需要同时创建一个应用程序，用来演示组件的用法，或许也需要在应用程序中创建一些额外的自动测试用例，这些用例可能很难在组件本身中测试。

Studio 现在提供了一个功能来简化这种模块化系统的开发。在我们进一步了解这个功能之前，我们先看一下目前的开发流程。

一般来说，同时开发扩展组件和使用扩展组件的应用程序需要经常在两个项目之间切换。你需要更改扩展组件的代码，构建然后发布至本地 Maven 仓库。然后切换至应用程序项目，IDE 加载新的组件制件并重新建立索引。现在才能修改应用程序代码，测试并查看组件的改动。

![单一扩展组件原开发方法](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon_Feedback_Loop_1.svg) {.center .svg .shadow}

如果同时开发应用程序和多个扩展组件，情况会更加糟糕。很可能，你的某些扩展组件之间会相互依赖，你需要在好几个项目之间切换，运行主程序前要发布多个组件才能确保已经加载需要的改动。如果失败了，所有这些步骤都得重来一遍。

![多扩展组件原开发方法](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon_Feedback_Loop_2.svg) {.center .svg .shadow}

可以看到，开发扩展组件的反馈回路远没有达到我们希望的理想状态，需要太多步骤才能看到最新改动。针对这种情况有一个显而易见的解决办法，那就是将扩展组件和主应用程序作为单一项目中的不同模块。这样做一方面 IDE 可以提供透明的代码重构，任何模块中的改动都是立即可见的。但是另一方面，扩展组件与应用程序的开发、测试、发布等所有的生命周期都变成了紧耦合状态，独立开发扩展组件库也已经变得不可能。

如果我们能在单独的项目中分别开发扩展组件和主应用程序，而仅在需要时将多个项目合并成一个，那不是更好吗？这样可以保持代码库的干净和可管理性，同时在重要的时间节点不会牺牲快速反馈环路，特别是在开发的早期阶段，跨项目改动非常频繁时。

因此，我们升级了 Jmix Studio 的功能，使用 Gradle 的 “复合构建（composite build）” 支持这一场景。

## 组合项目

Gradle 有几个帮助建立项目结构的功能，其中一个是 <a href="https://docs.gradle.org/current/userguide/composite_builds.html" target="_blank">composite build</a>。简单说就是在组合项目的 `settings.gradle` 中仅需使用 `includeBuild` 指令：

```groovy
includeBuild '../addon1'
includeBuild '../addon2'
includeBuild '../myapp'
```

在一个复合构建中，Gradle 将制件（artifacts）之间的依赖替换为子项目之间的直接依赖，因此当扩展组件中有改动时，会直接影响依赖的扩展组件和主应用程序。IntelliJ IDEA 能完美地导入这种项目，支持 Gradle 识别出的依赖。这样一来，组合项目能提供透明的重构，免去了“发布至本地仓库”的麻烦步骤。

Jmix Studio 从 1.2 版开始支持组合项目，进一步提升了开发者的体验。

首先，使用模板能很方便地创建一个空的组合项目。然后可以添加子项目，子项目可以是新建的扩展组件或应用程序、从 VCS 检出的已有项目或者直接添加项目文件夹。

Studio 在 Jmix 工具窗口将组合项目和所有的子项目作为顶级节点展示：

![gradle配置](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon_gradle_settings.png) {.center .size-6 .shadow}

你可以编辑所有子项目的通用属性：只需要在 Studio 询问需要编辑哪些项目时选择 **All subprojects**：

![编辑项目属性](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon_edit_properties.png) {.center .size-4 .shadow}

通用属性包括制件仓库的设置和 Jmix 框架的版本。因此可以一次将所有子项目升级至新的 Jmix 版本。

对于大型复合项目，最有用的功能可能是支持在简易的对话框中配置子项目之间的依赖关系：

![组件依赖1](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon_deps1.png) {.center .size-7 .shadow}

这里，**orders** 是一个扩展组件，依赖 **staff** 和 **customers** 组件。根据在此对话框中所做的修改，Studio 会将依赖添加到子项目的 `build.gradle` 文件中，并配置扩展组件的 `@JmixModule` 注解。此外，还可以防止引入循环依赖。在下面的截图中，可以看到该对话框不允许 **customers** 组件依赖 **orders** ，因为 **orders** 已经依赖 **customers**：

![组件依赖2](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon_deps2.png) {.center .size-7 .shadow}

当新建项目元素，比如实体或界面时，Studio 会自动在 Jmix 工具窗口中选中当前的项目：

![新实体](https://cdn.abmcode.com/zh-cn/jmix/_media/jmix-new-dev-way/jmix_dev_addon_new_entity.png) {.center .size-7 .shadow}

最后需要提及的一点是，Studio 能正确地将扩展组件中的改动热部署到正在运行的应用程序中。因此，如果启动应用程序，然后更改扩展组件提供的 UI 界面，则无需重启即可看到组件中的改动，就好像该界面是主应用程序的源码一样。

总之，可以说 Gradle 的复合构建功能以及 IntelliJ IDEA 和 Jmix Studio 对其的支持，使开发人员可以像开发单一多模块应用程序一样开发大型扩展组件和应用程序的组合项目。同时，开发人员可以随时将扩展组件从组合项目中剥离，作为一个完全独立的项目继续维护。
