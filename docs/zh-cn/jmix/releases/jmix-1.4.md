---
author: 世开 Coding
date: 2022-11-16
title: Jmix 1.4 发布
description: Jmix 1.4 发布，快速开发平台
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_最近我们发布了 Jmix 的一个新功能版本 1.4.0。主要内容是提供了稳定的 Flow UI 模块_

<!-- more -->

![Jmix1.4 发布](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/jmix_1.4.png) {.center .size-8 .radius .shadow}

最近 Jmix 更新了 1.4 正式版，这里我们看一下新版本引入了哪些关键更新。

按照惯例，关于更新的完整信息和升级说明，请查看文档的[最近更新](https://docs.jmix.cn/jmix/whats-new/index.html)页面。

## Flow UI 核心稳定

最重要的更新无疑是基于 Vaadin 23 的 Flow UI 模块的核心已经稳定。现在开始，推荐新建项目可以使用 Flow UI，在后续的更新中，其功能和 API 也将进一步得到完善，在后续的补丁版本中，我们会保持向后的兼容性，但是在功能发布版中有可能会有小的不兼容。

使用 Flow UI，无需特殊的步骤即可构建移动端友好的响应式应用程序 UI。仍然使用的是服务端 Java 驱动的 UI 编程模型和基于 XML 的布局设计，Studio 也提供了布局的可视化设计器。

从用户体验的角度，Flow UI 应用比经典的 Jmix UI 更接近常见的 web 应用。实体的 CRUD 视图（经典 UI 中的界面）现在具有唯一的 URL，可以用作应用程序功能的深度链接（deep link）。主窗口中不再有内部的标签页了，但是用户可以使用浏览器的右键菜单或者 `ctrl/cmd + click` 的方式在新的浏览器标签页打开视图。

![Jmix flow UI](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/flowui.gif) {.center .size-8 .shadow}

Studio 中全新的 Flow UI 可视化设计器所带的预览面板能根据应用程序的主题和特定样式展示视图的真实外观。此外，与经典 UI 设计器还有一个很大的不同：没有组件工具箱窗口。新的设计器中，需要通过顶部操作面板内的 `Add Component` 操作、组件层级结构的右键菜单和 `Generate` 菜单项（`Alt+Ins` / `Cmd+N`）添加组件。

![Jmix flow UI 预览](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/flowui_designer.png) {.center .size-8 .shadow}

尽管如此，Jmix Flow UI 模块仍然处于早期阶段，与经典 UI 的功能丰富程度相比，我们还有很多的工作。许多重要的功能目前缺失，比如通用过滤器、DataGrid 的内联编辑、后台任务、输入对话框等，我们会在后续的版本中提供。

目前，Flow UI 模块已经适配了安全子系统（角色、策略等）、实体审计、数据工具组件（实体日志、用户会话、实体探查），这些组件可用于带有 Flow UI 的项目。当然，那些不带 UI 的组件也能使用，比如 REST、OIDC、文件存储等。其他重要的组件将在明年的功能版本中适配 Flow UI。

## Studio 新功能

Jmix Studio 1.4 也有一些非常有用的改进。

Jmix 工具窗口的 **Configuration** 部分现在可以展示所有的配置内容，包括带 `@Configuration` 和由此注解派生的注解（`@SpringBootApplication`）类、带 `@ConfigurationProperties` 注解的类、以及 REST 查询和 REST 服务配置文件：

![Jmix 工具窗口 - 配置](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/config_section.png) {.center .size-6 .shadow}

包含使用 Jmix 实体作为参数或返回值方法的 Spring bean，能在实体下的 **Beans** 部分展示：

![Jmix 工具窗口 - 数据模型 bean](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/data_model_beans.png) {.center .size-8 .shadow}

Spring bean 的 **Inject** 操作现在支持构造器注入，构造器注入是目前公认的最佳实践。在下图注入 bean 的弹窗中，勾选 **Use constructor injection** 复选框即可使用构造器注入，Studio 会创建一个 `final` 字段以及一个构造器参数：

![Jmix 构造器注入](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/constructor_injection.png) {.center .size-8}

```java
@Component
public class CustomerService {

    private final DataManager dataManager;

    public CustomerService(DataManager dataManager) {
        this.dataManager = dataManager;
    }
    // ...
}
```

在创建行级角色时，我们增加了新的角色创建向导。通过 Jmix 工具窗口的 **New -> Row-level Role** 可以打开角色创建向导：

![Jmix 创建行级角色](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/rl_role_1.png) {.center .size-8}

Studio 会自动创建带注解的角色类，然后可以使用顶部的 **Add Policy** 操作添加新的策略：

![Jmix 行级角色新增策略](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-1.4/rl_role_2.png) {.center .size-8 .shadow}

现在，Studio 支持使用根据你的需求自定义的项目模板。

其工作原理是，通过模板项目构建一个 JAR 文件，并发布在自定义的制件仓库中。开发者在 IDE 的设置中配置制件的坐标，然后需要在新建项目时选择自定义的制件仓库。Studio 随后会加载框架的标准模板（如果存在）和自定义模板，并展示合并之后的项目模板列表。

关于构建自定义模板的更多细节，请参考[文档](https://docs.jmix.cn/jmix/whats-new/index.html#custom-project-templates)。

## 框架新功能

我们在框架的安全子系统添加了两个可扩展点。

第一个是在用户修改密码的过程中。开发者可以提供自定义的密码验证器 bean，需要实现 `PasswordValidator` 接口：

```java
@Component
public class MyPasswordValidator implements PasswordValidator<User> {

    @Override
    public void validate(PasswordValidationContext<User> context) throws PasswordValidationException {
         if (context.getPassword().length() < 3)
            throw new PasswordValidationException("Password is too short, must be >= 3 characters");
    }
}
```

另一个扩展点是在框架和扩展组件提供的 Spring 安全配置中。之前，如需调整一个配置，需要将整个配置类复制到项目中。但是从 Jmix 1.4 开始，可以只需要创建一个 `AbstractHttpConfigurer` bean，实现自己的逻辑，然后为其指定一个 Qualifier，表示需要调整的配置：

```java
@Component
@Qualifier(StandardSecurityConfiguration.SECURITY_CONFIGURER_QUALIFIER)
public class MySecurityConfigurer extends AbstractHttpConfigurer<MySecurityConfigurer, HttpSecurity> {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        MyFilter myFilter = new MyFilter();
        http.addFilterBefore(myFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
```

框架支持在通过 `DataManager` 加载实体时进行数据库级别的锁定。其流式接口中的 `lockMode()` 方法接收 `javax.persistence.LockModeType` 枚举值：

```java
var customer = dataManager.load(Customer.class)
        .id(customerId)
        .lockMode(LockModeType.PESSIMISTIC_WRITE)
        .one();
```

当处理 JPA 实体时，转换为执行 `select …​ for update` SQL 语句。

## Jmix Authorization Server 预览

现在的 Jmix Security OAuth2 模块是用来为 REST 接口分发 token 时使用的，基于已经过时的 Spring Security OAuth 项目。另外，它也只支持[密码授权](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.3)，而这种方式并不是 OAuth 规范推荐的方式。

为了解决这两个问题，我们基于最新的 Spring Authentication Server 项目构建了一个新的 OAuth 模块。支持[授权码](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1)和[客户端凭证](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.4)这两种授权类型。

Jmix Authorization Server 目前处于预览阶段，会根据大家的需求做进一步改进。项目的文档在 [GitHub README](https://github.com/jmix-framework/jmix/blob/master/jmix-authorization-server/README.md)。

## 后续计划

接下来的几个月中，我们将进一步优化 Flow UI，使其能与经典 UI 的功能相当。并在几个最重要的扩展组件中使用 Flow UI，比如 BPM、多租户以及报表组件。

Studio 方面，我们将提高稳定性，并引入为数据模型元素创建 UI 的一种新方式。

详细的 Roadmap 在 [GitHub 项目](https://github.com/orgs/jmix-framework/projects/5)发布并定期更新。

当然，我们也在进行一些常规的 bug 修复工作，1.4.x 的补丁包会以一个月左右的周期定时发布。

感谢所有对 Jmix 发展提供帮助的你们！谢谢你们提的建议和发现的问题，如果有任何建议，欢迎通过我们的[论坛](https://forum.jmix.cn/)反馈！
