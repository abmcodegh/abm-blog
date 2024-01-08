---
author: 世开 Coding
date: 2023-11-24
title: Jmix 2.1 发布
description: Jmix 快速开发平台 2.1 版本发布
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发平台,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_Jmix 少代码快速开发框架 2.1 版本发布，包括框架和 Studio 的更新_

<!-- more -->

![Jmix2.1 发布](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/2.1cover.png) {.center .size-8 .radius .shadow}

我们最近发布了 Jmix 的 2.1 版本。这篇博客中，我们将介绍这个新版本中增加的新功能和改进。

有关完整的详细信息和升级说明，请参阅文档中的[最近更新](https://docs.jmix.cn/jmix/whats-new/index.html)页面。

## 新的扩展组件

我们将一些之前在 Jmix v.1 中基于经典 UI 的扩展组件迁移了过来。Jmix 2.1 中也能很容易集成这些组件，并且基于 Vaadin 24 提供的现代 Flow UI。

### 地图

**地图**扩展组件已经能支持 Jmix 2+，且具有新的 API，Studio 也能提供出色的支持。

下面的示例演示了如何在指定位置显示一个地图标记的 OpenStreetMap：

```xml
<maps:geoMap id="map" width="100%" height="100%">  
    <maps:layers>  
        <maps:tile>  
            <maps:osmSource/>  
        </maps:tile>  
        <maps:vector id="pointsLayer">  
            <maps:vectorSource/>  
        </maps:vector>  
    </maps:layers>  
</maps:geoMap>
```

```java
@ViewComponent  
private GeoMap map;

@Subscribe  
public void onInit(InitEvent event) {  
    VectorLayer vectorLayer = map.getLayer("pointsLayer");  
    VectorSource vectorSource = vectorLayer.getSource();  
    vectorSource.addFeature(new MarkerFeature(
            GeometryUtils.createPoint(12.496176, 41.902695)));  
}
```

![地图组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/maps_1.png) { .center .size-8 }

这个示例属于 “hello world” 级别，显然没有涵盖组件的所有功能。事实上，地图可以包含瓦片层、图像层和矢量层，每个图层都支持不同的数据供应商。可以显示标记、点、折线和多边形。该组件的工作尚未完成，我们将在下一个版本中提供更多功能。

### 动态属性

**动态属性** 扩展组件支持在运行时为实体定义新的属性，而无需修改数据库结构和重启应用程序。这些动态属性可以拆分为不同的类别。

例如，Book 实体可以分为两类：*电子*和*纸质*。电子书具有“可用格式”和“文件大小”属性，而纸质书具有“封面类型”、“重量”和“尺寸”属性。可以在应用程序 UI 中定义动态属性：

![动态属性 1](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/dyn_attr_1.png) { .center .size-8 }

在配置了属性之后，用户可以在已有的视图中查看并输入属性值：

![动态属性 2](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/dyn_attr_2.png) { .center .size-8 }

动态属性会自动显示在特殊的 `dynamicAttributesPanel` 组件（如上所示）或任何现有的 `formLayout` 和 `dataGrid` 中。

### 通知组件

**通知**组件支持向用户发送应用内通知或电子邮件通知。可以通过 API 或使用附加组件提供的视图发送通知：

![通知组件 1](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/notifications_1.png) { .center .size-8 }

应用程序的 UI 需要包含 `notificationsIndicator` 组件，例如在 `main-view.xml` 中：

```xml
<appLayout>  
    <navigationBar>  
        <header ...>
	        ...
            <ntf:notificationsIndicator classNames="ms-auto me-m"/>  
        </header>  
    </navigationBar>
```

然后，收件人能在指示标记看到未读通知的数量，并通过简洁的 UI 直接打开：

![Alt text](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/notifications_2.png) { .center .size-8 }

### 搜索组件

**搜索** 扩展组件支持与 ElasticSearch 进行集成，为应用程序中的数据和上传文件提供全文搜索功能。通过几个简单的步骤就能使用该组件：

定义 ElasticSearch 的连接：

```ini
jmix.search.elasticsearch.url = http://localhost:9200
```

创建一个带注解的 Java 接口，用于定义哪些内容需要进行索引：

```java
@JmixEntitySearchIndex(entity = Book.class)  
public interface BookIndexDef {  
  
    @AutoMappedField(includeProperties =  
            {"title", "author", "publisher", "genre.name"})  
    void bookMapping();  
}
```

在应用程序 UI 中添加 `searchField` 组件：

```xml
<drawerLayout>  
    <section ...>
		<search:searchField/>
```

这样就可以了。系统将为 Book 实体的数据自动创建索引（并在每次变动时重新索引），用户能使用索引进行全文搜索：

![搜索组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/search_1.png) { .center .size-8 }

搜索结果会根据当前用户的数据访问权限自动过滤，消除任何信息泄露的风险。

### WebDAV

**WebDAV** 扩展组件通过 WebDAV 协议提供对文件存储中文件的访问。用户可以使用桌面应用程序（Word、Excel、LibreOffice 等）无缝打开和编辑文件，而无需从应用程序进行上传和下载的操作。在 UI 层，组件提供了一个特殊的上传控件和管理页面，用于管理文件及其版本：

![WebDAV](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/webdav_1.png) { .center .size-8 }

### 批量编辑器

**批量编辑器** 扩展组件支持用户一次更改多个实体实例的属性值，并提供了一个可以添加到任何 `dataGrid` 的操作：

```xml
<dataGrid id="booksDataGrid" ...>  
    <actions>
	    ...
        <action id="bulkEdit" type="bulked_edit"/>  
    </actions>
```

此操作将打开一个对话框，用户可以输入属性的值。所有选定的实体实例都将更新这些属性：

![批量编辑](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/bulk_edit.png) { .center .size-8 .shadow}

### JMX 控制台

**JMX 控制台** 扩展组件为 Java JMX API 提供了 Web 页面。系统管理员可以直接在应用程序 UI 中检查 JMX bean、编辑属性和调用操作：

![JMX 控制台](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/jmx_console_2.png) { .center .size-8 }

## BPM 改进

在应用程序 UI 中现在可以使用 DMN 表建模器了：

![DMN 表建模器](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/dmn_modeler.png) { .center .size-8 }

流程表单向导现在可以生成功能完备的视图，用于编辑流程变量和选择输出结果。

向导能显示流程中定义的变量：

![Alt text](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/bpm_form_wizard_1.png) { .center .size-8 }

并支持定义输出：

![Alt text](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/bpm_form_wizard_2.png) { .center .size-8 }

根据你的选择，向导会在视图中生成代码，将流程变量注入 UI 组件，并使用所选的输出完成任务：

```java
@ProcessForm(outcomes = {  
        @Outcome(id = "submit"),  
        @Outcome(id = "reject")  
})
// ...
public class BpmProcessForm extends StandardView {  
  
    @Autowired  
    private ProcessFormContext processFormContext;  
  
    @ProcessVariable  
    @ViewComponent    
    private EntityPicker<Book> book;  

	// ...	
    @Subscribe("submitBtn")  
    protected void onSubmitBtnClick(ClickEvent<JmixButton> event) {  
        processFormContext.taskCompletion()  
                .withOutcome("submit")  
                .saveInjectedProcessVariables()  
                .complete();  
        closeWithDefaultAction();  
    }  
```

## dataGrid改进

该版本中，对 `dataGrid` 组件进行了增强，`dataGrid` 主要用于展示表格数据。

现在，用户可以对 `dataGrid` 进行多列排序。列排序的顺序由排序箭头旁边显示的数字表示：

![数据网格排序](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/data_grid_sort_1.png) { .center .size-8 .shadow}

排序由 `dataGrid` 组件的 `multiSort`、`multiSortOnShiftClickOnly` 和 `multiSortPriority` 属性定义。

另一个新功能是可以在行内计算聚合值。需要配置聚合列时，请将 `dataGrid` 组件的 `aggregatable` 属性设置为 `true`，将 `aggregation` 元素添加到列中并选择聚合类型。聚合值将显示在单独的行中：

![数据网格聚合](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/data_grid_aggregation_1.png) { .center .size-8 .shadow}

下一个改进是能够声明式地将渲染器分配给 `dataGrid` 列。如果你熟悉 Jmix Classic UI，那你可能会发现带有声明式渲染器的列与 Classic UI 中的“生成列”非常相似。在 XML 中定义某个列，然后创建一个返回渲染器的处理方法：

```java
@Supply(to = "stepsDataGrid.completed", subject = "renderer")  
private Renderer<UserStep> stepsDataGridCompletedRenderer() {  
    return new ComponentRenderer<>(userStep -> {
	    // ...
        return checkbox;  
    });
} 
```

框架中预定义了几个用于设置日期和数字格式的渲染器，可以在 XML 的列中使用。还有，现在可以在 XML 中定义不绑定实体属性的列，仅用于为其声明渲染器。

也许数据网格的改进中最令人兴奋的新功能是表头过滤器。可以使用 `column` XML 元素的 `filterable` 属性来定义哪些列支持过滤。可过滤列的标题中带有“漏斗”图标。如果用户单击此图标，则会显示一个包含属性过滤器的弹窗：

![数据网格过滤 1](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/data_grid_filter_1.png) { .center .size-8 .shadow}

如果设置了过滤条件，表头的图标将高亮显示：

![数据网格过滤 2](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/data_grid_filter_2.png) { .center .size-8 .shadow}

表头过滤器这个概念，对于使用包括 Excel 在内的许多流行产品的用户都很熟悉，所以这个功能非常容易被发现和使用。我们认为，这种过滤数据的方式是对其他两个过滤组件的极好补充：`genericFilter` 和 `propertyFilter`。`genericFilter` 组件在运行时是完全可自定义的，并提供高级条件，但可能不是特别容易使用。而 `propertyFilter` 对用户来说很简单，但需要开发人员事先配置。数据网格的表头过滤器在功能上类似于 `propertyFilter`，但不占用任何额外的屏幕空间，因此可以成为大多数视图的默认过滤选择。

值的一提的是，这三个过滤功能可以在同一视图和数据加载器上一起使用，而不会发生任何冲突。所有过滤器的条件都将使用逻辑 `AND` 运算符进行简单组合。

## 新的 UI 组件和 Facets

### VirtualList

新的 `virtualList` 组件用于展示任意内容的列表。在页面中，该组件仅渲染当前可见的部分，因此，无论内容多复杂，都能保证有良好的性能。

`virtualList` 可以在视图中替换 `dataGrid` 使用。在 XML 中定义组件并将与集合数据容器连接：

```xml
<virtualList id="stepsVirtualList" itemsContainer="stepsDc"/>
```

与数据加载器关联的过滤和分页组件（如 `genericFilter` 和 `simplePagination`）将直接影响 `virtualList` 展示的内容，这一点与 `dataGrid` 一样。

然后，需要创建一个展示列表每项内容的处理方法：

```java
@Supply(to = "stepsVirtualList", subject = "renderer")  
private Renderer<Step> stepsVirtualListRenderer() {  
    return new ComponentRenderer<>(step -> {
	    // ...
        return hbox;  
    });  
}
```

花费一些精力对 `virtualList` 内容的布局进行编码后，可以获得类似于以下示例的视图：

![virtualList 组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/virtual_list_1.png) { .center .size-8 }

### Html

`html` 组件支持将任意 HTML 内容插入到视图中。内容可以定义在内部的 `content` 元素、项目资源中的文件，或者是消息包中，而以消息包的方式定义可以方便地支持国际化。

### Settings

`settings` facet 支持保存和恢复当前用户的可视化组件的设置，能自动保存 `dataGrid` 列的参数、详细信息和 `genericFilter` 的打开状态，以及 `simplePagination` 选定的页面大小。只需将 facet 拖放到视图并设置其 `auto=“true”` 属性，facet 将能管理视图中具有标识符的所有支持保存设置的组件。

`settings` facet 还提供处理方法，可以保存和还原视图及其组件的任何属性。

### Timer

`timer` facet 支持以特定的时间间隔运行某些视图代码，其工作在一个可以处理用户界面事件并能更新视图组件的线程中。使用时，在 XML 中定义参数，并为 `TimerActionEvent` 创建处理方法：

```xml
<timer id="timer" delay="2000" repeating="true" autostart="true"/>
```

```java
@Subscribe("timer")  
public void onTimerTimerAction(final Timer.TimerActionEvent event) {
	// ...
}
```

## 加载下拉列表选项

新版本中引入了一种将数据加载到下拉组件中的高效方法，支持 `comboBox`、`entityComboBox` 和 `multiSelectComboBox`。现在，可以不用为组件定义选项的集合数据容器，也无需提前加载完整的选项列表。新的方法是，需要在下拉列表组件中定义 `itemsQuery` 嵌套标签，并编写类似下面的查询语句：

```xml
<entityComboBox id="departmentField" property="department" pageSize="30">
    <itemsQuery class="com.company.onboarding.entity.Department"
                fetchPlan="_instance_name"
                searchStringFormat="(?i)%${inputString}%">
        <query>
            <![CDATA[select e from Department e 
            where e.name like :searchString order by e.name]]>
        </query>
    </itemsQuery>
</entityComboBox>
```

当用户打开下拉列表时，将执行查询语句，并返回最多 `pageSize` 行（默认为 50）数据作为选项。当用户滚动选项列表时，将分页加载数据。如果用户在控件中输入一些文本，还可以按文本过滤选项。

除了在 XML 中编写 JPQL 查询语句外，还可以定义 `itemsFetchCallback` 处理方法并通过编程的方式从任何源加载数据。

与使用单独的集合数据容器的旧方法相比，`itemsQuery` 可以在数据量比较大的时候提供更好的性能。`itemsQuery` 支持分批加载选项，从而可以减少内存的使用量，并支持在数据存储级别进行数据过滤。因此，这种方法可以支持几乎任何大小的数据集作为下拉列表中的选项来源。

话又说回来，对于较小的数据集，使用单独的预加载集合容器仍然是更好的选择，因为响应更快。

## 视图设计器的改进

下面我们看一下 Studio 中的新功能和改进。

Studio 中最明显的变化可能是包含了组件的层次结构和属性的 Jmix UI 工具窗口。这个窗口现在支持与页面的 Java controller 同时打开并使用各种操作，而无需打开页面的 XML。

这样一来，在控制器中编写 Java 代码时，查看组件树、更改组件属性甚至添加新组件都非常方便。

![视图设计器](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/view_designer_1.png) { .center .size-8 .shadow}

另外，对 **Preview**（预览）面板也进行了改进。

我们都知道，显示页面的预览效果需要构建前端并启动 Vaadin 服务的开发模式，这个过程可能非常耗时。为了节省打开项目的时间，现在只有在 XML 编辑器顶部面板中点击 **Start Preview** 按钮时，才会打开预览面板。面板打开后，项目中后续所有打开的视图都将展示在预览面板中。要停止预览，只需单击 **Stop Preview**。

我们还做了大量工作，将预览功能与其他可视化设计器机制进行拆分。因为预览面板使用 JCEF 嵌入式浏览器，该浏览器对项目、IDE和操作系统的非标准配置的细微差别很敏感，容易出现问题。现在，即使预览面板出问题也不会影响 Jmix UI 工具窗口和代码生成功能。

## 代码辅助

在此版本中，我们引入了在视图类和 Spring bean 中注入依赖和 UI 组件的全新方法。

一旦你在方法体中开始输入字符，则会出现一个代码自动完成的下拉列表，其中显示了可用的 bean、UI 组件、局部变量和类字段。尚未注入到类中的 Bean 和 UI 组件将以斜体字显示。如果选择其中一项，则将自动注入到构造函数或使用特定注解（`@Autowired` 或 `@ViewComponent`）的字段中，于是能立即在当前光标位置使用。

![代码辅助](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/inject_by_code_completion_1.gif) { .center .size-8 .shadow}

有了这个功能，查找和注入可用的 bean 和 UI 组件就变得非常容易了。希望你喜欢这个小改进 😄

## 支持 Data Repositories

Studio 现在能对创建和管理 Spring Data repositories 提供完整的支持。

通过点击 Jmix 窗口工具栏中的 **New** → **Data Repository** 创建 repository。Studio 将创建 repository 的接口并将其显示在实体节点下。

使用 repository 代码编辑器操作面板中的 **Add Derived Method** 和 **Add Query Method** 按钮可以创建具有派生查询或显式查询的方法：

![Data Repositories 1](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/data_repositories_1.png) { .center .size-8 .shadow}

对于 repository 的已有方法，Studio 会显示一个侧边栏图标，支持调整方法参数，例如添加排序或 fetch plan：

![Data Repositories 2](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/data_repositories_2.png) { .center .size-8 .shadow}

## 数据模型备注

本文中想强调的另一个功能是支持为实体及其属性添加备注。

实体设计器现在包含实体和每个属性的 **Comment** 字段。可以设置备注，备注将显示在字段中：

![数据模型备注](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.1/data_model_comment_1.png) { .center .size-8 .shadow}

在设计器中输入的文本存储在实体类及其字段的 `@Comment` 注解中：

```java
@Comment("""
        Stores information about books.
        Has reference to Genre.""")
@JmixEntity
@Table(name = "BOOK")
@Entity
public class Book {
	// ...
	
	@Comment("Book title")
	@Column(name = "TITLE", nullable = false)  
	private String title;
```

Studio 会生成 `setTableRemarks` 和 `setColumnRemarks` Liquibase 变更日志操作，可以将备注保存在数据库结构中（适用于除 HSQL 之外的所有数据库）。这样可以通过任何数据库工具查看备注。还可以从元数据中提取备注或直接从类注解中提取备注，以便在应用程序 UI 中显示或生成文档。

## 下一步？

在计划于 2024 年 2 月发布的下一个功能版本中，我们将实现新的 Charts 扩展组件，并完成 Maps 扩展组件中的剩余功能。UI 层方面，我们将添加 `RichTextArea`、水平主菜单以及搜索主菜单的功能。我们还将简化在 UI 视图中使用 Data Repository。

在 Studio 方面，我们将提供 BPMN 业务流程定义的热部署、生成自定义 REST controller，以及提供实体和视图集成测试的样板代码。

我们未来版本的详细路线图在 [GitHub 项目](https://github.com/orgs/jmix-framework/projects/5) 中。针对 2.1 的补丁版本将大约每月发布一次，以保持定期更新。

感谢所有提供想法、建议和错误报告的亲们！
