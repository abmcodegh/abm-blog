---
author: 世开 Coding
date: 2024-03-05
title: Jmix 2.2 发布
description: Jmix 快速开发平台 2.2 版本发布
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发平台,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_Jmix 少代码快速开发框架 2.2 版本发布，包括框架和 Studio 的更新_

<!-- more -->

![Jmix2.2 发布](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/jmix_2.2.png) {.center .size-8 .radius .shadow}

我们最近发布了 Jmix 的 2.2 版本。这篇博客中，我们将介绍这个新版本中增加的新功能和改进。

有关完整的详细信息和升级说明，请参阅文档中的[最近更新](https://docs.jmix.cn/jmix/whats-new/index.html)页面。

## 图表扩展组件

也许 Jmix 2.2 最值得注意的新特性是期待已久的图表组件。该组件在 Jmix UI 中集成了开源的 JavaScript 图表库 [Apache ECharts](https://echarts.apache.org/) 。在 Jmix 项目中可以通过 XML 或 Java 配置 ECharts 的所有功能，并与其他 UI 组件一样，可以很方便地连接服务端的数据。

例如，有一个 `VehicleCount` 实体，该实体在 `cars`、`motorcycles`、`bicycles` 和 `year` 属性中按年份存储不同类型车辆的数量，您可以按下面的代码示例配置一个数据可视化的图表：

```xml
<data>  
    <collection id="vehiclesDc"  
                class="com.company.demo.entity.VehicleCount">  
        <fetchPlan extends="_local"/>  
        <loader id="vehiclesDl" readOnly="true">  
            <query>  
                <![CDATA[select e from VehicleCount e order by e.year]]>  
            </query>  
        </loader>  
    </collection>  
</data>
<layout>
	<charts:chart id="chart">  
	    <charts:dataSet>  
	        <charts:source dataContainer="vehiclesDc"  
	                       categoryField="year"  
	                       valueFields="cars motorcycles bicycles"/>  
	    </charts:dataSet>  
	    <charts:series>  
	        <charts:bar name="Cars"/>  
	        <charts:bar name="Motorcycles" stack="stack"/>  
	        <charts:bar name="Bicycles" stack="stack"/>  
	    </charts:series>  
	    <charts:xAxes>  
	        <charts:xAxis/>  
	    </charts:xAxes>  
	    <charts:yAxes>  
	        <charts:yAxis>  
	            <charts:axisLabel formatter="{value}"/>  
	        </charts:yAxis>  
	    </charts:yAxes>  
		<charts:title text="Vehicles" subtext="By Year"/>  
		<charts:legend/>
	</charts:chart>
```

可以看到，图表通过 `source` 元素关联了数据容器，并在 `series` 元素中定义如何显示数据。生成的图表如下：

![ECharts 图表](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/charts_1.png) {.center .size-8 .radius .shadow}

我们尝试让 XML 和 Java 的图表 API 尽可能接近 ECharts 的原生 JavaScript API，这样，通过参考 ECharts 的文档，可以直接在 Jmix 中配置图表了。

图表扩展组件在 [Jmix 组件市场](https://www.jmix.io/marketplace) 免费提供，可以在任何 Jmix 2.2 的项目中使用。

## 地图扩展组件改进

我们为地图扩展组件添加了新的重要功能：能够显示 MultiPoint、MultiLine 和 MultiPolygon 几何图形、热图图层和聚类图。

MultiPolygon 是单一几何图形多边形的集合。在下面的示例中，我们创建了一个由两个矩形组成的 MultiPolygon：

```java
private void addMultiPolygon(VectorSource vectorSource) {  
    GeometryFactory factory = GeometryUtils.getGeometryFactory();  
    Polygon polygon1 = factory.createPolygon(  
            factory.createLinearRing(new Coordinate[]{  
                    new Coordinate(15.5, 38.9),  
                    new Coordinate(15.5, 44.9),  
                    new Coordinate(9.5, 44.9),  
                    new Coordinate(9.5, 38.9),  
                    new Coordinate(15.5, 38.9)}));  
    Polygon polygon2 = factory.createPolygon(  
            factory.createLinearRing(new Coordinate[]{  
                    new Coordinate(20.7, 40.9),  
                    new Coordinate(26.7, 40.9),  
                    new Coordinate(26.7, 34.9),  
                    new Coordinate(20.7, 34.9),  
                    new Coordinate(20.7, 40.9)}));  
    MultiPolygon multiPolygon = factory.createMultiPolygon(new Polygon[]{polygon1, polygon2});  
    vectorSource.addFeature(new MultiPolygonFeature(multiPolygon));  
}
```

地图中显示如下：

![地图中的多边形](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/maps_1.png) {.center .size-8 .radius .shadow}

聚类功能支持通过合并功能在地图上显示大量标记。在下面的示例中，展示了罗马人建立的著名城市：

![地图中的标记](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/maps_2.png) {.center .size-8 .radius .shadow}

只需将矢量数据源放入视图 XML 中的 `cluster` 元素中即可实现：

```xml
<maps:geoMap>  
    <maps:layers>  
        <maps:tile>  
            <maps:osmSource/>  
        </maps:tile>  
        <maps:vector id="cityLayer">  
            <maps:cluster distance="30">  
                <maps:dataVectorSource dataContainer="citiesDc" property="point"/>  
            </maps:cluster>  
        </maps:vector>  
    </maps:layers>  
    <maps:mapView centerY="41.9" centerX="12.48" zoom="4.5"/>  
</maps:geoMap>
```

相同的数据也可以用热力图展示，值用颜色表示：

![地图中的热力图](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/maps_3.png) {.center .size-8 .radius .shadow}

热力图通过特定的 `heatmap` 图层配置，该图层自己的数据源连接到同一数据容器：

```xml
<maps:geoMap>  
    <maps:layers>  
        <maps:tile>  
            <maps:osmSource/>  
        </maps:tile>  
        <maps:heatmap radius="15">  
            <maps:heatmapDataVectorSource dataContainer="citiesDc" property="point"/>  
        </maps:heatmap>  
    </maps:layers>  
    <maps:mapView centerY="41.9" centerX="12.48" zoom="4.5"/>  
</maps:geoMap>
```

## BPM 扩展组件改进

为了缩短在 Studio 中开发业务流的反馈环路时间，我们实现了将流程定义热部署到正在运行的应用程序中的功能。在 BPMN 设计器的顶部面板中有 _Hot Deploy Process_ 按钮。成功部署流程后，应用程序会在日志中打印一条消息：

![BPM 流程热部署](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/bpm_1.png) {.center .size-8 .radius .shadow}

Studio 中的流程表单向导现在可以为流程的启动事件生成表单。表单中将包含一个用于启动流程的按钮，该按钮调用流程引擎的 API。

向导的“表单模板”下拉列表中包含一个新的实体实例流程表单选项。如果选择此选项，向导将支持选择或创建 `Entity` 类型的流程变量。生成的流程表单将带有一个数据容器以及一个用于编辑所选实体的控件。

## 富文本编辑器组件

新富文本编辑器组件基于 [Quill](https://quilljs.com/) JavaScript 库构建，支持编辑文本的格式并将其保存为 HTML：

![富文本编辑器](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/rich_text_editor_1.png) {.center .size-8 .radius .shadow}

该组件是数据感知的，可以与数据模型关联：

```xml
<richTextEditor id="descriptionField" width="100%"  
                dataContainer="stepDc" property="description"/>
```

## 主视图的改进

新增的 `menuFilterField` 组件支持用户对主菜单项进行过滤。

只需要将过滤器控件放在视图上的某个位置并与 `listMenu` 关联：

```xml
<menuFilterField menu="menu"
                 placeholder="Search..." classNames="ms-s me-s"/>
<nav id="navigation" classNames="jmix-main-view-navigation" ariaLabel="msg://navigation.ariaLabel">
    <listMenu id="menu"/>
</nav>
```

菜单搜索的实际效果：

![应用程序菜单搜索](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/menu_filter.gif) {.center .size-8 .shadow}

主视图的另一个改进是能够在没有子视图打开时以声明方式定义其展示的内容。使用 `appLayout` 组件的 `initialLayout` 元素：

```xml
<appLayout>
    <navigationBar .../>
    <drawerLayout .../>
    <initialLayout>
        <h2 text="Hello world!"/>
    </initialLayout>
</appLayout>
```

应用程序界面如下：

![应用程序初始视图](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/initial_layout.png) {.center .size-8 }

还有一点，这个页面中大家最期待的改进就是横向主菜单：

![应用程序顶部菜单栏](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/top_menu.png) {.center .size-8 }

由 `horizontalMenu` 组件实现，该组件从同一 `menu.xml` 中获取菜单的结构。因此，项目中可以随时将标准的竖向 `listMenu` 替换为顶部横向菜单。最简单的方法是点击 _New → View_，然后选择 _Main view with top menu_ 模板。如果你在向导的第二步中勾选了 _Use as default main view_ 复选框，Studio 会自动在 `jmix.ui.main-view-id` 应用程序属性和所有视图的 `@Route` 注解的 `layout` 属性中设置新的主视图，例如：

```java
@Route(value = "users", layout = MainViewTopMenu.class)
```

这样一来，当应用程序启动时，新的主菜单将无缝完美运行。

## DataGrid 改进

现在，双击 DataGrid 的某一行将打开详情视图，或者，如果是查找模式，则完成选择。这对用户来说非常方便，不需要先选择一行，再点击按钮或菜单。

我们还完成了表头过滤器的一项重要工作：现在 URL 中可以反映表头过滤器的状态，以提供深度链接，从而导航到详情视图再返回时仍然保持视图的过滤器状态。如需配置，请使用 `urlQueryParameters` facet 中新的 `dataGridFilter` 元素。

还有一个有用的功能是新的 `gridColumnVisibility` 组件，用户能够隐藏和显示列：

![DataGrid 列显示控制](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/data_grid_column_visibility.gif) {.center .size-8 .shadow}

## 通用过滤器支持集合属性

以前，要使用 `genericFilter` 组件按实体的集合属性过滤实体时，必须使用 `join` 和 `where` 子句定义 JPQL 条件。显然，对于最终用户来说，这个太难了。

现在，在多对多映射中，按集合属性及其内部属性进行过滤与一对一映射一样简单：集合属性也显示在通用过滤器的“添加条件”对话框中，并且所需的 JPQL 条件由框架自动生成。

在下面的示例中，用户列表按链接 `steps` 集合的 `completedDate` 属性进行筛选：

![通用过滤器集合属性过滤 - 配置](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/generic_filter_1.png) {.center .size-8 }

![通用过滤器集合属性过滤 - 结果](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/generic_filter_2.png) {.center .size-8 }

## 提升构建速度

虽然热部署技术在开发用户界面时大大缩短了反馈环路的时间，但这并不适用于业务逻辑的开发。因此，在开发过程中能快速重启应用程序仍然非常重要。

在以前的版本中，实体增强步骤会在构建过程中消耗大量的时间，在 Jmix 2.2 中我们做了改进，只有在自上次构建后数据模型发生修改时才会执行实体增强。因此，如果在不修改实体的情况下更改了 Spring Bean，那么构建和重启过程现在比以前快得多，尤其是在具有大量数据模型的项目中。

## 新的代码片段辅助

如果您在项目中包含报表、电子邮件、BPM 或通知扩展组件，则 Studio 提供了与这些附加组件 API 相关的新代码片段。

例如，如果要在用户点击按钮时运行报表，则可以先生成按钮点击事件监听器，然后将 _Run report using UiReportRunner_ 代码段拖放到监听器中。Studio 将提示您指定需要运行的报表，并为您生成相应的代码：

![报表组件辅助代码段](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/reports_code_snippet.gif) {.center .size-8 .shadow}

生成的代码可以正常工作，也可以作为进一步开发的样板代码。

## 使用向导添加组件

随着 UI 组件不断丰富，对于新手来说，为某个任务找到合适的组件变得越来越具有挑战性。

因此，我们决定提供另一种更具声明性的方式来创建 UI 视图。开发人员无需从“添加组件”选项板中选择组件并对其进行配置，而是可以启动一个组件创建向导，向导界面中会提示一系列的问题。然后，向导根据问题的答案生成包含预制配置的可视化组件和数据组件的整个代码片段。

事实上，Studio 之前为 DataGrid 和数据容器提供了这种向导，但这些向导仅当从组件工具箱中选择相应组件时才会启动。现在，可以不知道特定组件的存在，只需选择一个向导，根据其名称可以完成任务。

在以下截屏视频中，“编辑实体属性”向导创建了一个 `formLayout`，其中包含数据容器中关联的字段：

![通过向导添加复杂页面组件](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.2/edit_entity_attributes_wizard.gif) {.center .size-8 .shadow}

此功能目前还处于实验阶段，我们计划未来会添加更多向导，以及考虑在各种场景中的使用。

## 测试脚手架

当使用新的 Studio 打开一个项目时，可以在 Jmix 工具窗口中看到 _Tests_ 节点。双击该节点将进入 _Project_ 工具窗口并打开 `src/test/java` 目录。

通过 _New → Advanced → Integration Test_ 和 _UI Integration Test_ 操作，可以快速生成业务逻辑和 UI 集成测试的装代码。

## 小项目用 Studio 免费啦！

One more thing... 现在，Studio 的 premium RAD 功能可以在最多 10 个实体和角色的小型项目中免费使用。也就是说，Studio 中所有的可视化工具都可以用来学习、实验、创建宠物项目或商业项目，而无需商业或试用订阅。唯一的限制是这些项目没有大的数据模型和安全角色。

我们希望通过提供免费的工具能够让开发者更容易学习和接受 Jmix，从而让更多的人能够接触到 Jmix。

## 下一步？

在 2024 年 6 月的下一个功能版本中，我们计划实现集成 [Apache Superset](https://superset.apache.org/)，一个全球领先的开源数据可视化平台。

在 Studio 方面，我们将提供一种聚合 Liquibase 变更日志的方法，以及快速转换类似的 UI 组件的操作，例如，切换 `entityPicker` 和 `entityComboBox`。

与之前一样，我们还会投入大量时间来修复错误、添加小功能和提升性能。

我们未来版本的详细路线图在 [GitHub 项目](https://github.com/orgs/jmix-framework/projects/5) 中。针对 2.2 的补丁版本将大约每月发布一次，以保持定期更新。

感谢所有提供想法、建议和错误报告的亲们！
