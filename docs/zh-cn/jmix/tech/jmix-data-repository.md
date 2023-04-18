---
author: Bryan Yin
date: 2023-04-13
title: Jmix 中使用 Spring Data 查询接口
description: Spring Data Repository 提供了非常方便的数据访问方式，Jmix 在此之上还提供了企业级功能。
category:
  - Jmix
tag:
  - 技术
head:
  - - meta
    - name: keywords
      content: jmix,快速开发平台,Web 快速开发平台,少代码,低代码,企业级应用开发,Spring 框架
---

_Spring Data Repository 提供了非常方便的数据访问方式，Jmix 在此之上还提供了企业级功能。_

<!-- more -->

![题图](https://cdn.abmcode.com/zh-cn/jmix/tech/_media/jmix-data-repo/jmix_data_repo.png) {.center .size-8 .radius .shadow}

<!-- # 大标题 -->

最近给一个客户介绍Jmix的时候，对方的技术负责人问了一个对我们来说很常见的问题：“Jmix对Spring boot的修改大不大？”

我给出的回答是：“没有改动，用Jmix构建的应用本身还是一个常见的Spring boot应用。”

然后，他继续说：“不对，我看你们推荐用DataManager，但是我们写Spring boot用的是Spring Data Repository。”

我心想，好家伙，这是有bear来，提前了解过技术细节啊。

不过还好，不光是我对这类问题有准备，Jmix也有准备。是的，Jmix也支持Spring Data Repository。

## 问题的本质

会后，我们例行总结demo小会议的内容，团队提出了一个问题，客户在问 “Jmix对Spring boot的修改大不大？” 的时候，**本质是在问什么**？

我们都知道，接受一个新的快速开发框架并不是一件容易的事，因为每个快速开发框架都有自己的内部逻辑，这些逻辑与通用框架（例如，Spring）不同，从而需要有一定的学习成本。

所以，客户表面上是在问Jmix是否改了Spring的内容，其实是在关心**我原来Spring boot的开发经验还能不能继续用**？因为对于开发人员来说，技术积累恐怕是除了赚钱之外他最关心的事了。

而Jmix给出的答案是：能。

这篇文章，我们聊聊怎么在Jmix中使用Spring Data Repository，这里用到了Spring Data JPA。

## Spring Data Repository

我们先简单介绍一下Spring Data Repository。这是 Spring Data JPA 框架中的核心组件之一，简单来说，作用就是：**可以非常方便地对数据进行操作**。

以前外事不决问某度，现在外事不决问ChatGPT，这是ChatGPT总结的Spring Data 优点：

- 代码简洁：Spring Data Repository提供了一些集成的API和模板方法，可以大大简化开发者的代码量。
- 可扩展性：您可以将所有通用的查询方法定义在Repository接口中，并使用Spring Data的查询方法声明规则（如“find”，“read”）进行命名，Spring Data Repository会自动为其生成实现，同时允许您自己实现更加复杂和特定的需求。
- 支持不同的数据访问技术：Spring Data Repository不仅支持JPA，还可以轻松地扩展到使用其他数据存储技术的场景中，如MongoDB、Cassandra等。
- 易于测试：在使用Spring Data Repository时，您可以轻松地创建仅在测试环境中使用的存储库实现，并注入Repository实例以在测试中运行自定义查询。
- 事务控制：Spring Data Repository提供了基于注释的事务控制。通过在Repository方法上添加@Transactional注释，可以以声明式方式管理事务边界。这使得数据访问变得更加可靠和一致。

上面这一堆，你肯定没仔细看吧，那我们看一个简单的例子，假设我们有不同运营商之间的FTP访问性能数据，需要按照某些条件查询：

```java
public interface ViewFtpRepository extends JpaRepository<ViewFtp, Long> {
    Stream<ViewFtp> findByCollectTimeBetween(ZonedDateTime start, ZonedDateTime end);
    // 这个方法，我不说，你能猜到是干嘛的吗？
    List<ViewFtp> findByCollectTimeBetweenAndOperFromIdInAndOperToIdInOrderByCollectTime(ZonedDateTime start,
            ZonedDateTime end, List<Integer> fromOpers, List<Integer> toOpers);
}
```

这里有几个优点：
1. **定义的是一个接口**。也就是说不需要实现，Spring会自动帮你实现。那些DAO、ServiceImpl，都可以扫扫扔垃圾桶了。
2. **从方法名解析查询语句**。`findByCollectTimeBetween` 的意思很明显了，就是查找采集时间在两个参数时间之间的 `ViewFTP` 对象。
3. 返回值可以是 `Stream` 或 `List`，按你的需要。

然后有一个缺点（我感觉是），你有没有发现第二个方法的名字太长了，看不懂啊大哥！也就是说，如果你的查询条件比较复杂，写出来的方法名就有这么长。英语好还行，如果不太好的，方法名都读不来，有没有？

针对这个缺点，Spring Data Repository提供了一个解决方案：使用 `@Query`，然后上面那个长的方法名可以简化成任何自定义的名称：

```java
@Query("select e from ViewFtp e where e.collect_time >?1 and e.collect_time <?2 and e.oper_from_id in (?3) and e.oper_to_id in (?4) order by e.collect_time")
List<ViewFtp> findForOpers(ZonedDateTime start,
        ZonedDateTime end, List<Integer> fromOpers, List<Integer> toOpers);
```

好了，看到JPQL之后，这个方法的用途就呼之欲出了：查找某段时间内从某些运营商到另一些运营商的FTP性能数据。

## Jmix Data Repository

什么是Jmix Data Repository？

Jmix data repositories基于Spring Data构建，但是在底层使用的是DataManager。这样既可以使用方便的repository接口，又能支持Jmix中的高级数据访问功能，比如实体事件，跨数据存储实体引用，数据访问权限检查等。

### 使用步骤

1. 创建一个接口，继承自 `JmixDataRepository`。使用实体类和实体 ID 类作为 `JmixDataRepository` 的参数:
   ```java
   public interface CustomerRepository extends JmixDataRepository<Customer, UUID> {
   }
   ```
2. 在 Jmix 主程序类或者扩展组件的配置类上添加 @EnableJmixDataRepositories 注解：
   ```java
   @SpringBootApplication
   @EnableJmixDataRepositories
   public class SampleDataAccessApplication {
   }
   ```
3. 在 Spring bean 或 UI 控制器内使用 @Autowired 注解注入 repository 即可使用：
   ```java
   @Autowired
   private CustomerRepository customerRepository;
   ```

### JmixDataRepository 的功能

`JmixDataRepository` 接口派生自标准的 Spring Data `PagingAndSortingRepository`。此外，提供了一些Jmix特有的方法：
- 数据加载方法支持fetch plan，比如 findById() 或 findAll()。
- create() 方法初始化一个新实体。
- 返回非Optional对象的 getById() 方法会在找不到实体时抛出异常。
- 默认使用系统的安全机制，因此，用户需要有实体权限才能访问相应的实体。

可以使用下列注解自定义查询方法：

- `@io.jmix.core.repository.Query` 定义JPQL查询语句，与Spring Data JPA的 `@Query` 注解类似。
- `@io.jmix.core.repository.FetchPlan` 定义加载数据时使用的fetch plan。

### 一些例子

```java
import io.jmix.core.repository.Query;
import io.jmix.core.repository.FetchPlan;
...

public interface CustomerRepository extends JmixDataRepository<Customer, UUID> {
    // 支持从方法名生成查询语句的 Spring Data 标准功能
    List<Customer> findByEmailContainingIgnoreCase(String emailPart);

    // 可以使用 @io.jmix.core.repository.Query 注解显式定义 JPQL 语句
    @Query("select c from sample_Customer c where c.email like :email")
    List<Customer> findCustomersByEmail(@Param("email") String emailPart);

    // 查询方法可以使用 Pageable 进行分页和排序
    Page<Customer> findByEmailContainingIgnoreCase(String emailPart, Pageable pageable);

    // 查询方法还支持一个特殊的 fetch plan 参数
    List<Customer> findByEmailContainingIgnoreCase(String emailPart, io.jmix.core.FetchPlan fetchPlan);

    // 共享的 fetch plan 可以在查询方法的 @io.jmix.core.repository.FetchPlan 注解中定义
    @FetchPlan("customer-minimal")
    List<Customer> findByEmail(String email);
}
```

## 结语

JmixDataRepository 提供了又一种在Jmix中处理数据的方法。这种方法可以不用写JPQL，也不用写方法实现，并且能使用Jmix提供的数据安全机制，香不香？
