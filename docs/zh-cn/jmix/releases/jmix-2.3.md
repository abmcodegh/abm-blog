---
author: 世开 Coding
date: 2024-08-05
title: Jmix 2.3 发布
description: Jmix 快速开发平台 2.3 版本发布
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发平台,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_Jmix 少代码快速开发框架 2.3 版本发布，包括框架和 Studio 的更新_

<!-- more -->

![Jmix2.3 发布](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.3/jmix_2.3.png) {.center .size-8 .radius .shadow}

我们最近发布了 Jmix 的 2.3 版本。这篇博客中，我们将介绍这个新版本中增加的新功能和改进。

有关完整的详细信息和升级说明，请参阅文档中的[最近更新](https://docs.jmix.cn/jmix/whats-new/index.html)页面。

## Superset 扩展组件

[Apache Superset](https://superset.apache.org/) 是领先的数据探索和可视化开源解决方案。支持创建高度可定制的仪表板，其中可以包含多种图表。图表通过数据集填充数据，而数据是使用 SQL 从数据库中获取。

通过 Jmix Superset 扩展组件，在应用程序中可以很容易集成 Superset 服务，并将仪表板嵌入到 Jmix 视图中。例如，Bookstore 应用程序的主视图中包含了一个仪表板，展示客户订单的相关信息：

![Superset 示例](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.3/superset_1.png) {.center .size-8  }

连接到 Superset 服务时只需指定 URL 和用户凭证，在显示嵌入的仪表板时，由扩展组件负责请求、刷新和使用安全 token。

在 Superset 中创建好仪表板后，需要一些配置以便能在 Jmix 中嵌入。Superset 会生成一个 ID，外部应用可以通过这个 ID 引用该仪表板。

扩展组件提供的 `dashboard` UI 组件可以用于在应用程序视图中嵌入仪表板。只需在 `embeddedId` 属性中指定仪表板 ID：

```xml
<superset:dashboard id="ordersDashboard" 
		embeddedId="4bc14bf5-a3ec-4151-979e-a920420e1f66"  
        height="100%" width="100%" maxWidth="50em"/>
```

Superset 服务直接与应用程序数据库相连。为了根据用户权限或其他条件筛选仪表板上显示的数据，可以在视图中将约束列表传递给仪表板。以下示例中，仪表板仅显示当前租户的数据：

```java
@Install(to = "ordersDashboard", subject = "datasetConstraintsProvider")  
private List<DatasetConstraint> ordersDashboardDatasetConstraintsProvider() {  
    DatasetConstraint constraint = new DatasetConstraint(25,  
            "tenant = '" + tenantProvider.getCurrentUserTenantId() + "'");  
    return List.of(constraint);  
}
```

有关如何在 Jmix 应用程序中使用 Superset 扩展组件的详细信息，请参考 [Superset 文档](https://docs.jmix.cn/jmix/superset/index.html)。

## 支持 OpenSearch

Jmix Search 扩展组件现在可以使用 [OpenSearch](https://opensearch.org/) 服务了。无论使用的是 OpenSearch 还是 Elasticsearch 引擎，扩展组件中的所有功能（声明式索引定义、索引队列、UI 搜索控件等）均行为一致。通过在 `build.gradle` 中指定依赖的 starter 来区分使用的搜索引擎。从市场安装扩展组件时，默认情况下会使用 OpenSearch。

## Fragments

Fragment 是一种新的 UI 构建块，可以分解复杂的 UI 结构，从而减少重复代码。就其特性而言，Fragment 介于视图和组合组件之间。

一方面，与视图一样，Fragment 的 XML 中可以包含数据组件和操作。并支持在 fragment 类中进行组件注入和事件处理。Studio 提供了一个用于创建空 fragment 的模板，以及与视图相同的 UI 设计器。

而另一方面，fragment 又可用作视图或其他 fragment 中的组件。

使用 Fragment 可以在构建和重用绑定了数据模型的 UI 代码时提供更大的灵活性。

通过下面的示例可以了解如何创建和使用 fragment。这个简单的 fragment 展示一个名为 `Money` 的可嵌入实体的数据。在 UI 设计器中可以显示 XML 和预览，如下所示：

![Fragment 示例](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.3/fragment_1.png) {.center .size-8  .radius .shadow}

Fragment 的类（也称为控制器）可以定义 setter 接收来自外部的参数。在我们的例子中，接收一个 `Money` 实例并将其保存到数据容器中：

```java
@FragmentDescriptor("money-fragment.xml")  
public class MoneyFragment extends Fragment<JmixFormLayout> {  
  
    @ViewComponent  
    private InstanceContainer<Money> moneyDc;  
  
    public void setMoney(Money money) {  
        moneyDc.setItem(money);  
    }  
}
```

在视图中包含 fragment 时，我们使用 `fragment` 元素并指定 fragment 的类。例如，父视图可以包含同一 fragment 的两个实例：

```xml
<vbox>  
    <h4 text="msg://price"/>  
    <fragment id="unitPriceFragment" 
		    class="io.jmix.bookstore.view.moneyfragment.MoneyFragment"/>  
</vbox>  
<vbox>  
    <h4 text="msg://discount"/>  
    <fragment id="discountFragment" 
		    class="io.jmix.bookstore.view.moneyfragment.MoneyFragment"/>  
</vbox>
```

在父视图的控制器内可以调用 fragment 的 API 来传递 `Money` 实例：

```java
@ViewComponent  
private MoneyFragment unitPriceFragment;  
@ViewComponent  
private MoneyFragment discountFragment;

@Subscribe  
public void onReady(final ReadyEvent event) {  
    unitPriceFragment.setMoney(orderLineDc.getItem().getUnitPrice());  
    discountFragment.setMoney(orderLineDc.getItem().getDiscount());  
}
```

## Data Repositories

该版本完成了对 Spring Data Repository 作为 Jmix 生态系统中一等公民的支持。现在，视图中可以很方便地使用它们来加载和保存数据，同时兼容所有标准 Jmix UI 功能，如过滤、分页和排序等。

当使用向导创建视图时，在 _Advanced_ 部分有 _Use Data Repository_ 复选框。如果勾选，则可以选择已有的 Data Repository。向导生成的视图中，数据的读写都代理给了 Data Repository 的方法。

列表数据的加载代理中，从 Jmix `LoadContext` 对象中提取了 Spring Data `PageRequest`，然后通过 `JmixDataRepositoryContext` 对象为 Data Repository 提供过滤条件和其他选项。这里可以按需修改，例如，可以设置初始的排序：

```java
@Install(to = "customersDl", target = Target.DATA_LOADER)  
private List<Customer> loadDelegate(LoadContext<Customer> context) {  
    // 将 Jmix 分页和排参数转换为 Spring Data PageRequest
    PageRequest pageable = JmixDataRepositoryUtils.buildPageRequest(context);  
    if (pageable.getSort().isEmpty()) {  
        // 设置初始排序
        pageable = pageable.withSort(Direction.ASC, "firstName", "lastName");  
    }  
    // 提供 Jmix 条件，fetch plan 以及 hints
    JmixDataRepositoryContext jmixContext = JmixDataRepositoryUtils.buildRepositoryContext(context);  
    // 调用 repository 方法并返回分页内容
    return repository.findAll(pageable, jmixContext).getContent();  
}
```

上面的代码与下面加载器中的 JPQL 功能相同：

```xml
<loader id="customersDl" readOnly="true">  
    <query>  
        <![CDATA[select e from bookstore_Customer e  
        order by e.firstName asc, e.lastName asc]]>  
    </query>  
</loader>
```

所有继承 `JmixDataRepository` 了的 Repository 方法现在都支持 `JmixDataRepositoryContext` 作为附加参数。因此 Data Repository 能兼容 `genericFilter`、`propertyFilter` 组件以及声明式数据加载器。

## TabSheet 标签页的延迟加载

当视图中有许多 UI 控件并且需要通过标签页进行分组时，我们通常使用 TabSheet 组件。

在该版本中，我们增加了将标签页标记为 `lazy` 的功能。打开视图时，不会自动加载这种标签页的内容。如果标签页包含大量组件并需要加载其他数据，那么使用该功能可以显著提高性能。

延迟标签页的数据加载和其他初始化内容需要在 TabSheet 的 `SelectedChangeEvent` 监听器中完成，例如：

```java
@ViewComponent  
private CollectionLoader<Position> positionsDl;  
  
private boolean positionsInitialized;

@Subscribe("tabSheet")  
public void onTabSheetSelectedChange(final JmixTabSheet.SelectedChangeEvent event) {  
    if ("positionTab".equals(event.getSelectedTab().getId().orElse(null))  
            && !positionsInitialized) {  
        positionsDl.load();  
        positionsInitialized = true;  
    }  
}
```

还有一点，延迟标签页内的组件不能注入到视图类中，因为在视图初始化时还不存在。因此，只能在标签页完成初始化之后通过 `UiComponentUtils.getComponent()` 方法获取。

## TwinColumn 组件

新的 `twinColumn` 组件为用户提供了一种熟悉且方便的方式来从列表中选择内容：

![双列组件示例](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.3/twincolumn_1.png) {.center .size-6  .radius .shadow}

## 授权服务扩展组件

我们已将授权服务（Authorization Server）模块提炼成了一个单独的扩展组件，有单独的[文档](https://docs.jmix.cn/jmix/authorization-server/index.html)和安装流程。这个组件之前是与通用 REST 扩展组件一起安装。因此，现在如果需要安装通用 REST 组件时，需要考虑如何保护 REST 端点：使用授权服务或 OIDC 组件还是通过其他方式。

授权服务扩展组件提供了一个新的功能，可以实现资源所有者密码凭证授权（即原来的用户名密码授权）。OAuth 规范现在不推荐使用这种授权类型，但我们收到了很多开发人员的请求，于是决定在组件中实现并提供。可以在受信任的、老系统的或高度受控的环境中使用，使用已注册的 Jmix 应用程序用户对 REST 客户端进行简单的身份验证。

## Liquibase changelog 合并

新版本中，Studio 最突出的新功能是能够合并已有的 Liquibase changelog。支持开发人员将几个最新的 changelog 合并为一个，并删除 changeset 中的重复操作。

比如这个场景：由于数据模型的迭代开发，有三个 changelog。第一个在表格中添加了 `ALPHA` 列，第二个添加 `BETA` 列，第三个添加 `GAMMA` 并删除 `ALPHA`。因此，在第一个 changelog 中引入的更改将被第三个 changelog 覆盖。

**Aggregate Liquibase Changelogs** 的操作在数据存储的右键菜单中。可以选择任意数量的新添加的 changelog 进行合并。比如我们选择上述三个 changelog：

![Liquibase changelog 合并](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.3/aggregate_changelogs_1.png) {.center .size-8 }

新生成的 changelog 将仅包含真正使数据库结构与数据模型同步的更改，即添加 `BETA` 和 `GAMMA` 列：

![Liquibase changelog 合并](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.3/aggregate_changelogs_2.png) {.center .size-8 }

Studio 会删除选定的 changelog 文件，并添加新的合并文件。为了使新的 changelog 集合与已执行了旧 changelog 的数据库兼容，Studio 会为新的 changeset 添加一个前提条件。这个条件指示 Liquibase 不要执行新的 changeset，例如，如果替换列表中的第一个 changelog 已经执行：

```xml
<preConditions onFail="MARK_RAN">  
    <not>  
        <changeSetExecuted id="1" author="bookstore"  
			changeLogFile="io/jmix/bookstore/liquibase/changelog/2024/06/27-1-add-alpha.xml"/>  
    </not>  
</preConditions>
```

执行 changelog 合并时需小心，因为合并 changelog 并不是对已有 changelog 进行分析和重新生成。而是依据第一个选定的 changelog 之前的数据库结构与当前模型之间的差异生成一个新的 changelog。因此，如果合并的 changelog 包含一些未反映在模型中的数据更新或结构更改（例如，存储过程），则可能丢失。

总的来看，使用此功能最自然、最安全的方法是在将最新更改提交到共享代码仓库或将功能合并到公共分支之前对 changelog 进行合并。

## Studio 的其他改进

该版本还引入了多项能提升开发者体验的 Studio 功能：

* Jmix 工具窗口提供了一个用于生成 UI 异常处理方法的操作。
* Jmix UI 结构右键菜单中的 **Convert to** 操作可以将一个组件一键转换为另一个组件。**Wrap into** 操作可以将多个选定的组件包含至 TabSheet 的标签页中。
* 改进了 JPQL Designer 布局。
* 改进了 Dockerfile 生成。

所有 Studio 的改进内容，请参考 [Issue tracker](https://youtrack.jmix.io/issues/JST?q=Fixed%20in%20builds:%202.3.0,-2.2.*%20type:%20Feature,Improvement,Usability)。

## 下一步？

我们计划在 2024 年 10 月发布下一个功能版本，其中包括 Jmix UI 中几个非常重要的功能：

* 集成一些第三方 JavaScript 组件：日历、数据透视表（PivotTable）和看板（Kanban）。
* 可以使用 fragment 定义 `VirtualList` 条目的内部布局。
* 标签式主窗口模式，视图在主窗口内的标签页中打开，而不是在浏览器标签页中打开。

最后一个功能是从迁移经典 UI 的开发人员最需要的功能。因此，我们将提供一个解决方案，可以在单个浏览器标签页中打开多个视图，而同时会牺牲一些浏览器功能，例如历史记录和深度链接。

我们计划的另一个可以帮助从旧版本的平台迁移的功能是声明试 UI 权限。这个功能在 CUBA 平台就已经有了，支持开发者和管理员通过配置限制用户对 UI 中内容（控件、按钮、动作）的访问，而无需编写任何代码。

在 Studio 方面，我们将改进 Jmix UI 组件属性面板的可用性，并为 UI 组件属性提供更多编辑器（例如，对于 `formLayout.responsiveSteps`）。此外，我们还会提供与外部数据源集成方面工作的初步成果。

像往常一样，我们仍将为错误修复、添加小功能和性能增强分配一定的时间。

未来版本的详细路线图以[GitHub 项目](https://github.com/orgs/jmix-framework/projects/23/views/1)的形式提供。当前版本 2.3 的补丁将大约每月发布一次，大家可以定期更新。

如果有任何问题，欢迎到我们[论坛](https://forum.jmix.cn/)进行反馈，感谢所有提供想法、建议和错误报告的亲们！