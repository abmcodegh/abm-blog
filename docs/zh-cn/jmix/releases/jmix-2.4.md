---
author: 世开 Coding
date: 2024-11-08
title: Jmix 2.4 发布
description: Jmix 快速开发平台 2.4 版本发布
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发平台,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_Jmix 少代码快速开发框架 2.4 版本发布，包括框架和 Studio 的更新_

<!-- more -->

![Jmix2.4 发布](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/jmix_2.4.png) {.center .size-8 .radius .shadow}

Jmix 团队宣布推出 Jmix 2.4 版本，包含许多新功能，旨在提高应用程序的交互性、灵活性和易集成性。此次更新包含了从 UI 功能增强到系统集成的强大扩展组件和改进，以满足不同的开发要求。有关所有更改和升级信息的详细概述，请查看文档中的 [最近更新](https://docs.jmix.cn/jmix/whats-new/index.html) 页面。

下面我们看看 Jmix 2.4 中带来了哪些新功能。

## 日历扩展组件

新的 Calendar 扩展组件提供了一个基于 **FullCalendar** JavaScript 库的 `FullCalendar` UI 组件。`FullCalendar` 组件支持不同的日历显示模式，例如日、周和月。用户可以通过拖拽的方式重新安排事件，还支持拖拽事件边缘的方式改变事件的时长。

![日历组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/calendar.png) {.center .size-8 .shadow }

`FullCalendar` 组件可以添加不同的数据 provider，例如使用 `ContainerDataProvider` 从 JPA 或 DTO 实体创建日历事件。

通过这个组件，开发人员可以为他们的 Jmix 应用添加现代且功能强大的日历功能。

## 透视表扩展组件

数据透视表扩展组件基于 **PivotTable.js** 为 Jmix UI 添加了一个 `PivotTable` 组件。该组件适合用于数据分析和可视化，支持：

* 创建交互式数据透视表，以可视化方式对数据进行汇总和探索。
* 使用拖拽功能轻松对数据进行重构和分组。
* 使用求和、均值、计数等进行数据聚合运算。

![透视表组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/pivot_table.png) {.center .size-8 .shadow }

凭借其直观的 UI，使用数据透视表处理复杂数据具有极好的体验。

## 看板扩展组件

看板（Kanban）扩展组件基于 **Smart Kanban** JavaScript 为 Jmix UI 添加了一个 可视化的项目管理工具。使用看板用户可以有效地跟踪和管理他们的任务。主要功能包括：

* 看板可以自定义，并与 Jmix 视图集成。
* 任务管理：包括分配用户、设置截止日期和优先级。
* 阶段管理：通过不同的列表示工作中的不同阶段。
* 支持以拖拽的方式移动任务。
* 自定义看板的外观和行为。

![看板组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/kanban.png) {.center .size-8 .shadow }

使用这个扩展组件可以直接在 Jmix 应用程序中高效管理项目工作内容。

## UI 约束扩展组件

UI 约束扩展组件支持开发人员根据资源角色中声明的策略来控制 UI 组件的可见性和可访问性。也就是说，无需编写代码，可以完全通过用户权限控制 UI 元素的显示或隐藏。从而使得实现基于角色的 UI 控制变得更加简单，节省了开发人员的时间并增强了安全性。

![UI 约束组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/ui_constraints.png) {.center .size-8 .shadow }

## REST 数据存储扩展组件

REST 数据存储扩展组件提供了一种与外部 Jmix 应用程序集成的简便方法。远程 Jmix 实例的外部实体可以通过 `DataManager` 接口访问，与访问本地实体一样。开发人员可以无缝显示、更新和保存来自远程应用程序的数据，而无需为 CRUD 操作编写自定义代码。

有关使用此附加组件的示例，请参阅以下指南：

* [集成 Jmix 应用程序](https://docs.jmix.cn/jmix/integrated-apps-guide/index.html)
* [应用程序的分层](https://docs.jmix.cn/jmix/separate-tiers-guide/index.html)

## HTML 组件支持数据绑定

HTML 组件，如 `div`、`span` 和标题（`h1`等）现在可以使用 XML 中的 `dataContainer` 和 `property` 属性以声明方式绑定到数据模型实体。因此不必在视图控制器中以编程方式设置值，从而简化了代码并提高了可读性。

```xml
<layout>  
    <h3 id="nameField" dataContainer="departmentDc" property="name"/>  
    <div id="hrManagerField" dataContainer="departmentDc" property="hrManager"/>  
</layout>
```

## Fragment 渲染器

`virtualList` 和 `dataGrid` 的渲染器现在可以用 UI [fragments](https://docs.jmix.cn/jmix/flow-ui/fragments/fragments.html) 来定义了。使用 fragment 自定义条目的渲染，在设计 UI 时具有更大的灵活性。

使用新的 `fragmentRenderer` XML 元素指定 fragment 的 Java 类，示例：

```xml
<virtualList itemsContainer="usersDc">
    <fragmentRenderer class="com.company.onboarding.view.userfragment.UserFragment"/>
</virtualList>
```

下面是作为渲染内容的 fragment 定义：

```xml
<fragment xmlns="http://jmix.io/schema/flowui/fragment">
    <data>
        <instance id="userDc" class="com.company.onboarding.entity.User">
            <loader id="userDl"/>
        </instance>
    </data>
    <content>
            <formLayout id="form" dataContainer="userDc">
                <textField id="usernameField" property="username" readOnly="true"/>
                <textField id="firstNameField" property="firstName"/>
                <textField id="lastNameField" property="lastName"/>
                <textField id="emailField" property="email"/>
            </formLayout>
        </hbox>
    </content>
</fragment>
```

Fragment 渲染器类需要继承自 `FragmentRenderer` 基类，并使用泛型参数表示渲染的根元素和实体，例如：

```java
@FragmentDescriptor("user-fragment.xml")
@RendererItemContainer("userDc")
public class UserFragment extends FragmentRenderer<FormLayout, User> {
}
```

`@RendererItemContainer` 注解用于指定包含渲染实体的数据容器。

## 异步任务

新的 [UiAsyncTasks](https://docs.jmix.cn/jmix/flow-ui/async-tasks.html) Bean 支持使用当前用户的安全上下文执行异步任务，然后用任务的结果更新 UI。这种基于 `CompletableFuture` 的轻量级机制非常适合简单的异步任务，是更复杂的后台任务机制的有效补充。

```java
@Autowired
private UiAsyncTasks uiAsyncTasks;

private void loadCustomersAsync() {
    uiAsyncTasks.supplierConfigurer(this::loadCustomers)
            .withResultHandler(customers -> {
                customersDc.setItems(customers);
                notifications.create("Customers loaded").show();
            })
            .supplyAsync();
}

private List<Customer> loadCustomers() {
    return customerService.loadCustomers();
}
```

## 搜索组件改进

搜索功能提供了新的 `@ExtendedSearch` 注解，支持对索引字段进行“以...开头”的搜索。用户使用更新后的 `searchField` 组件时，可以打开搜索设置窗口自定义搜索策略和结果的数量，从而提高搜索操作的灵活性。

![搜索组件改进](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/search.png) {.center .size-8 .shadow }

## Studio 组件属性面板

Jmix Studio 组件属性面板现在将属性分为 **General**、**Data Binding**、**Size**、**Position** 和 **Look & Feel** 等类别。这种分类更便于开发者找到所需的属性，从而提高工作效率。此外，对使用 icon 属性选择图标也进行了改进。

![Studio 组件属性面板](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/component_inspector.png) {.center .shadow }

## Studio 支持 OpenAPI

Jmix Studio 现在增强了对 OpenAPI 集成的支持，包括 OpenAPI 客户端生成器的配置以及自动生成 DTO 实体、mapper 和中间服务。这些功能简化了对外部 REST API 的集成，使开发人员能够更轻松地使用外部数据源。

![Studio 支持 OpenAPI](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.4/openapi.png) {.center .size-8 .shadow }

使用这些功能的示例请参阅 [使用 OpenAPI 集成应用程序](https://docs.jmix.cn/jmix/openapi-integration-guide/index.html) 指南。

## 依赖升级

Jmix 2.4 版本升级了主要的依赖库：

* Spring Boot 已更新到版本 3.3。
* Vaadin 已更新到版本 24.4。

这些更新确保能确保 Jmix 的现代、安全和高性能。

## 未来计划

Jmix 2.4 版本引入了新功能，为开发人员提供了更多的应用程序构建工具。我们非常期待 2025 年 2 月的下一个版本。

计划在下一版本中包括以下内容：

* 完成主窗口 tab 模式的开发，支持在主窗口内的标签页打开视图，而不是使用浏览器的标签页。
* 添加基于 Flow UI 的消息模板扩展组件，类似于 Classic UI 的电子邮件模板，但设计上更灵活，适用于更多的场景。
* 为地图扩展组件提供的编辑地图元素的功能。

我们还会收集有关 Jmix 2.4 新功能的反馈，进行进一步的改进。主要与实验性的集成功能有关：OpenAPI 的支持和 REST 数据存储。

与往常一样，我们还会投入大量时间来修复错误、添加小功能和提升性能。

未来版本的详细路线图以[GitHub 项目](https://github.com/orgs/jmix-framework/projects/23/views/1)的形式提供。当前版本 2.4 的补丁将大约每月发布一次，大家可以定期更新。

如果有任何问题，欢迎到我们[论坛](https://forum.jmix.cn/)进行反馈，感谢所有提供想法、建议和错误报告的亲们！
