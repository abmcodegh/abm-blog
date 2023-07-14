---
author: 世开 Coding
date: 2023-07-13
title: Jmix 2.0 发布
description: Jmix 快速开发平台 2.0 版本发布
category:
  - Jmix
tag:
  - 里程碑
head:
  - - meta
    - name: keywords
      content: jmix,快速开发平台,少代码,低代码,企业级应用开发,Java 快速开发框架,流行 Java 框架
---

_Jmix 少代码快速开发框架 2.0 版本发布，包括框架和 Studio 的更新_

<!-- more -->

![Jmix2.0 发布](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_cover.png) {.center .size-8 .radius .shadow}

Jmix 2.0是产品迭代中的一个非常重要的里程碑。这个版本引入了许多重要功能，并对Jmix的版图做了重大调整。在这篇文章中，我们主要了解有哪些更新以及这些更新对使用Jmix的应用程序有什么影响。

有关完整的详细信息和升级说明，请参阅文档中的[最近更新](https://docs.jmix.cn/jmix/whats-new/index.html)页面。

## 技术栈更新

Jmix 2.0中影响最大的变化是技术栈的更新。现在运行时依赖基础框架的最新版本：

- Jmix core中Spring框架的升级：Spring Boot 3.1、Spring Framework 6.0、Spring Security 6.1
- Flow UI子系统中的Vaadin 24.0
- 数据访问中的JPA实现采用了EclipseLink 4.0
- BPM引擎使用了Flowable 7.0

基础框架的新版本提供了非常充足的支持期限，为Jmix框架和应用程序的稳步发展迎来了一个“恒纪元”。但另一方面，现在构建和运行应用程序至少需要JDK 17，如果使用WAR部署，则需要将Tomcat更新到10。

此外，由于经典UI中使用的Vaadin 8与新的Jakarta Servlet API和Spring 6不兼容，因此在Jmix 2.0中移除了经典UI。因此，要从Jmix 1.5经典UI升级到Jmix 2.0，需要替换UI层。有关Jmix版本迁移的更多信息，请参阅我们之前的博客文章：[延长免费支持 Classic UI](./classic-ui-ext-support.md)。

新的Studio 2.0支持使用Flow UI的Jmix 1.5项目进行自动迁移。

## 支持 Flow UI 的扩展组件

我们已经为BPM、工作日历、Email和报表扩展组件实现了Flow UI版本，现在可以在Jmix 2.0中使用。

BPM扩展组件现在具有运行时全功能的BPMN建模器以及管理UI：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_1.png) {.center .size-8}

工作日历扩展组件的新UI：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_2.png) {.center .size-8 }

Email 历史记录UI：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_3.png) {.center .size-8}

报表设计器在低分辨率的屏幕中更简洁易用：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_4.png) {.center .size-8}

为了在大多数情况下提供简洁的UI，报表设计器中一个带区默认只有单一数据集。但是，如果勾选 *多数据集* 复选框，设计器将切换到更复杂的视图：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_5.png) {.center .size-8 .shadow}

## 通用过滤器组件

`genericFilter` 组件的功能已经完善，支持在设计时和运行时创建配置和自定义条件。运行时的配置和自定义条件可以交由最终用户管理：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_6.png) {.center .size-8}

## 代码编辑器组件

基于Ace编辑器的新 `codeEditor` 组件支持用户查看和编辑带有语法高亮显示的代码。代码编辑器还有一些高级功能，如不同的颜色主题：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_7.png) {.center .size-8 .shadow}

与许多其他Jmix UI组件一样，可以很容易地与数据模型进行绑定，以编辑存储在实体属性中的代码。

## 防止浏览器标签页关闭

Web应用中有一个常见的问题，当用户意外关闭浏览器标签页时，已经输入的数据会丢失。现在，当展示实体详细信息视图时，如果用户尝试关闭浏览器标签页，浏览器会显示有关离开页面的标准确认弹窗：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_8.png) {.center .size-4}

可以使用 `setPreventBrowserTabClosing()` 方法在任何视图中启用或禁用此行为。

## 快速云部署

很多时候，开发者需要为用户、管理层或同事演示开发中的应用程序。如果可以直接在本机展示，或者有CI/CD工具将代码部署到演示或测试环境，那么这不是问题。但是，如果需要为异地相关人员展示开发中的应用，那么最好的选择是将其部署到云端。

Studio现在支持通过几个简单的步骤来完成云部署，这些步骤不需要任何有关部署或云的特定认知：

- 在AWS上注册一个帐户
- 在本机安装Docker
- 完成Studio中快速云部署向导的几个步骤。

在几分钟内，应用程序将在AWS EC2服务器上启动并运行，全球用户都可以访问。

背后的原理是，Studio首先为应用程序生成 `docker-compose.yaml`，通过AWS API创建EC2实例，在上面安装Docker，然后在服务器上构建应用程序镜像，并使用app和PostgreSQL数据库的容器运行 `docker-compose`。数据库和文件存储的数据会映射至服务器的文件系统，确保在修改代码重新部署时能保留所有数据。

该功能在Studio中隐藏了很长时间，因为我们认为还有一些需要完善的地方，在2.0中，终于和用户见面了。

## Studio UI/UX改进

**Jmix**工具窗口现在显示一个包含项目中定义的所有Spring bean的节点：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_9.png) {.center .size-8 .shadow}

还可以使用下面这个选项对bean和其他元素按包名分组：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_a.png) {.center .size-8 .shadow}

**Beans**部分仅显示带有 `@Component` 或 `@Service` 注解的bean，不显示在Java配置中使用 `@Bean` 注解创建的bean。

**Inject**对话框现在显示项目classpath中定义的所有bean，包括Java配置中使用 `@Bean` 注解创建的bean。**Other Beans**部分有智能分组：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_b.png) {.center .size-8}

在Jmix论坛上有一个帖子，用户抱怨Studio生成的代码会收到IDEA的警告，类似“某些东西可以有 `final` 修饰符”。我们认为这是一个合理的要求，Studio应该遵循IDEA环境的代码检查。因此，所有生成的代码现在都包含推荐的 `final` 修饰符。如果你不需要，可以修改Jmix插件的设置禁用此选项。

对Studio生成代码的另一个改进是，使用 `OffsetDateTime` 类型生成实体审计相关的时间字段，包括创建、修改以及软删除的时间。这样一来，数据库将保存带有时区的时间戳。

## Studio中使用BPM

如果你的项目中包含 [BPM](https://docs.jmix.cn/jmix/bpm/index.html) 扩展组件，则Jmix工具窗口现在能展示BPM节点。该节点包含BPMN流程（Processes）、流程草稿（Process Drafts）以及DMN表格：

![](https://cdn.abmcode.com/zh-cn/jmix/releases/_media/jmix-2.0/jmix2_c.png) {.center .size-8 .shadow}

流程可以在流程和流程草稿文件夹之间互相拷贝，通过建模器窗口顶部的按钮操作即可。这样可以组织一个简单的工作流程：在草稿文件夹中定义流程，流程定义完成后可以复制到流程文件夹。位于流程文件夹中的所有流程定义都将在下次应用程序启动时自动部署。如果部署出现问题，还可以将流程复制回草稿文件夹，然后从流程文件夹删除，以便应用程序能顺利启动。

## 通用REST中的身份验证

在1.4版本中，我们引入了Jmix授权服务作为预览功能。在2.0中，该功能升级成为通用REST中的主要身份验证方式。这一变化有两方面的原因：一方面，旧的Jmix OAuth2模块无法在Jmix 2.0中使用，因为依赖过时的Spring Security OAuth与Spring Boot 3不兼容；另一方面，我们需要遵循最佳实践，弃用过时的OAuth密码授权流程。

如果在Jmix 2.0中使用通用REST扩展组件，则必须选择授权类型，这决定了REST客户端将如何获得访问token。Jmix授权服务支持两种类型：客户端凭证和授权码。与之前的密码授权相比，这两种方式的优势在于，客户端应用程序不可以收集或保存用户密码，这在很多合规性要求中是必要条件。

与旧的密码授权最相似且最容易实现的是客户端凭证授权。这种方式应当用于服务器与服务器之间的通信，例如与第三方系统集成。此时，Jmix授权服务需要配置客户端的角色，例如 `rest-minimal`、`order-management` 等。要获取访问token，客户端只需在basic authentication header中传递其 `client-id` 和 `client-secret`。使用此token的后续API调用将以用户名为 `client-id` 的特殊用户进行，其角色为该客户端所配置的角色列表。换句话说，客户端使用提前配置好的静态权限集，而非真正的用户。

通过授权码进行授权稍微复杂一些，但支持客户端代表真正的用户进行操作。对于这种授权类型，当客户端请求身份验证时，Jmix授权服务会显示一个登录页面，供用户输入用户名和密码。认证成功后向客户端返回一个中间授权码。客户端使用中间授权码获取访问token，之后可以使用token进行API调用。此时，客户端作为输入用户名的用户运行，但是不知道用户的密码。

## 结论

随着新技术栈和生产就绪的Flow UI的引入，Jmix平台完成了现代化改造，后续将稳步发展。我们的团队将继续努力实现新的功能，并不断提高产品的整体质量。

在定于2023年10月发布的下一个功能版本中，我们计划了几个重要的更新。包括为更多的扩展组件实现Flow UI，在Flow UI中添加SuggestionField和SettingsFacet，以及提升对data repository的支持。我们未来版本的详细路线图发布在[GitHub](https://github.com/orgs/jmix-framework/projects/5)。

欢迎在我们的论坛上提供反馈，并感谢所有贡献想法、建议和提出bug的你们！
