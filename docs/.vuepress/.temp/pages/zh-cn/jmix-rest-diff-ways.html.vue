<template><div><p><img src="_media/jmix-rest-diff-ways/jmix-rest-api.png" alt="rest api" title=":class=title-image" loading="lazy"></p>
<h1 id="jmix-中-rest-api-的两种实现" tabindex="-1"><a class="header-anchor" href="#jmix-中-rest-api-的两种实现" aria-hidden="true">#</a> Jmix 中 REST API 的两种实现</h1>
<p class="author">世开 Coding<span class="update-time">2022-08-24</span></p>
<p>很多应用是采取前后端分离的方式进行开发。这种模式下，对前端的选择相对灵活，可以根据团队的擅长技能选择流行的 Angular/React/Vue 之一，或者前端为App/小程序等手机应用。Jmix 的一种典型应用场景就是作为这种类型应用程序的高级别管理 UI 和后端。为此，Jmix 提供了强大的通用 REST API 功能，支持包括开箱即用的实体、文件、元数据、用户会话的 API 以及经过简单配置就能支持的业务逻辑（服务）REST API。</p>
<p>由于 Jmix 是基于 Spring Boot 框架，因此也支持 Spring 的 <code v-pre>RestController</code>。那么对于 Spring 的 REST API 机制和 Jmix 提供机制，究竟有什么不同，而我们在开发时又该如何选择呢？本文将通过具体的代码示例，介绍这两种 API 的区别，相信看完之后，该如何选择您心里应该有数了。</p>
<h2 id="数据模型和服务" tabindex="-1"><a class="header-anchor" href="#数据模型和服务" aria-hidden="true">#</a> 数据模型和服务</h2>
<p>我们假设一个简单的场景，为了给用户提供凑单功能，我们在后端写一个服务用于查询低于某个价格的产品（<code v-pre>Product</code>），并将满足条件的产品列表返回给客户端。</p>
<h3 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h3>
<p>首先我们构建一个简单的 JPA 实体：<code v-pre>Product</code> 类，包含名称和价格两个属性：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@JmixEntity</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"SLS_PRODUCT"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"sls_Product"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@JmixGeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"ID"</span><span class="token punctuation">,</span> nullable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">UUID</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@InstanceName</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"NAME"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"PRICE"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> price<span class="token punctuation">;</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 其他属性</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>?&gt; 实体通过 Jmix Studio 创建可以选择其他<a href="https://docs.jmix.cn/jmix/data-model/entities.html#traits" target="_blank" rel="noopener noreferrer">实体特性<ExternalLinkIcon/></a>，比如版本、实体审计、软删除属性等。</p>
<h3 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h3>
<p>可以像普通 Spring Boot 应用那样，自己手动创建一个 <code v-pre>@Service</code> 类。也可以通过 Jmix Studio 提供的创建 bean 的功能创建 Service。这里我们用 Jmix Studio 创建一个 Bean，该功能默认创建带 <code v-pre>@Component</code> 注解的类，我们手动将类注解修改为 <code v-pre>@Service</code>：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">"sls_ProductService"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">DataManager</span> dataManager<span class="token punctuation">;</span> <span class="token comment">// 插入代码段时，默认注入带有权限检查的 DataManager</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> <span class="token function">getProductsCheaperThan</span><span class="token punctuation">(</span><span class="token class-name">Double</span> price<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// 注意，这里我们并没有对输入参数 price 做检查</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> productList <span class="token operator">=</span> dataManager<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Product</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"select p from sls_Product p "</span> <span class="token operator">+</span>
                        <span class="token string">"where p.price &lt; :priceInput"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">parameter</span><span class="token punctuation">(</span><span class="token string">"priceInput"</span><span class="token punctuation">,</span> price<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> productList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>?&gt; 这里的加载实体列表代码，我们通过 Studio 的<a href="https://docs.jmix.cn/jmix/studio/code-snippets.html" target="_blank" rel="noopener noreferrer">代码段<ExternalLinkIcon/></a>功能自动添加。</p>
<p>服务中，我们使用了 Jmix 的 <code v-pre>DataManager</code> 和 JPQL 查询语句加载实体，并使用方法的输入参数作为 JPQL 的参数。Jmix 的持久层也支持 Spring Data Repository 或者 MyBatis。而使用 <code v-pre>DataManager</code> 的一个好处是可以利用 Jmix 的安全机制，控制 API 调用方对实体的访问权限。</p>
<h2 id="jmix-服务-api" tabindex="-1"><a class="header-anchor" href="#jmix-服务-api" aria-hidden="true">#</a> Jmix 服务 API</h2>
<p>Jmix 服务（Service） API 可以将任意 Spring bean 作为 HTTP 接口开放。Jmix 负责 HTTP 交互，例如，提供 HTTP 响应编码、进行错误处理等。下图是 Jmix 服务 API 的流程图：</p>
<p><img src="https://blog.abmcode.com/zh-cn/jmix/_media/jmix-rest-diff-ways/service_api_flow.png" alt="Jmix 服务 API 流程" title=":class=center-thirty-image-shadow" loading="lazy"></p>
<p>可以看到，作为应用程序开发者，仅需要编写服务代码。另外，还需做一些配置：</p>
<ol>
<li>在项目的 resources 目录添加 rest-services.xml，用于配置可作为 REST API 使用的服务及其方法，内容如下：</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>services</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://jmix.io/schema/rest/services<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>service</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sls_ProductService<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 指定服务名称 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getProductsCheaperThan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 指定方法名称 --></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.lang.Double<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> <span class="token comment">&lt;!-- 指定方法参数和类型 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>method</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 可以添加服务中其他方法 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>service</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 可以添加其他服务 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>services</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在项目的 <code v-pre>application.properties</code> 文件中，设置 <code v-pre>jmix.rest.services-config</code> 参数，指定上面配置的 xml 文件：</li>
</ol>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">jmix.rest.services-config</span> <span class="token punctuation">=</span> <span class="token value attr-value">com/abmcode/sales/rest-services.xml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完成这些配置之后，就可以通过 REST 客户端调用了，URL 为 <code v-pre>/rest/services/&lt;service_name&gt;/&lt;method_name&gt;</code>。例如，通过 Postman 调用：</p>
<p><img src="https://blog.abmcode.com/zh-cn/jmix/_media/jmix-rest-diff-ways/postman_service_call.png" alt="Postman 调用服务 API" title=":class=center-eighty-image-shadow" loading="lazy"></p>
<p>!&gt; 服务 API 会默认使用 Jmix 的安全机制：API 端口需要使用认证 token 进行访问，而且用户需要有访问 REST API 和所查询实体的权限。另外，Jmix 的服务 API 也支持<a href="https://docs.jmix.cn/jmix/rest/security/authentication.html#anonymous-access" target="_blank" rel="noopener noreferrer">匿名访问<ExternalLinkIcon/></a>。</p>
<h2 id="spring-控制器-api" tabindex="-1"><a class="header-anchor" href="#spring-控制器-api" aria-hidden="true">#</a> Spring 控制器 API</h2>
<p>然后我们再看看 Spring 的 <code v-pre>RestController</code> 方式。首先，我们定义一个控制器：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span><span class="token punctuation">(</span><span class="token string">"sls_ProductController"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/products"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ProductService</span> productService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"priceunder"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> <span class="token function">getPriceUnder</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Double</span> price<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>price <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ResponseStatusException</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">BAD_REQUEST</span><span class="token punctuation">,</span> <span class="token string">"价格参数必须大于 0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自定义控制器层的参数检查，抛出请求异常。</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> productService<span class="token punctuation">.</span><span class="token function">getProductsCheaperThan</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jmix 中的控制器接口默认都是匿名的，但是为匿名用户配置能访问实体信息又不够安全，Jmix 提供了一个应用程序属性，支持使用 Jmix 安全机制对自定义控制器进行保护：</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token comment"># 支持逗号分隔的多个 pattern</span>
<span class="token key attr-name">jmix.rest.authenticatedUrlPatterns</span><span class="token punctuation">=</span><span class="token value attr-value">/products/**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，重启服务就可以通过 Postman 进行调用。注意，这里的 URL 与服务 URL 不同，直接使用了控制器中定义的路径：</p>
<p><img src="https://blog.abmcode.com/zh-cn/jmix/_media/jmix-rest-diff-ways/postman_controller_call.png" alt="Postman 调用控制器 API" title=":class=center-eighty-image-shadow" loading="lazy"></p>
<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2>
<p>通过上面的代码，我们可以看到，在 Jmix 中使用两种类型的 REST API 其实都不复杂，但是，也是各有优势：</p>
<p><strong>Jmix 服务 API</strong>：</p>
<ul>
<li>不用编写控制器代码，仅通过 XML 配置即可使用</li>
<li>默认使用 Jmix 的安全机制</li>
<li>可以使用 Fetch plan 定义返回实体的字段</li>
</ul>
<p><strong>Spring 控制器</strong>：</p>
<ul>
<li>更加灵活，可以使用 Spring 控制器自定义 HTTP 状态码、响应类型或者异常错误</li>
<li>除了使用服务层的实体控制外，还可以在控制器层使用自定义的 DTO 对返回实体的信息做进一步控制</li>
</ul>
<p>因此，在大多数情况下，我们仅使用 Jmix 的服务 API 就能够满足使用要求。针对部分复杂场景可以使用 Spring 控制器 API。</p>
<p>?&gt; 文中使用的 Jmix 版本：1.3.1</p>
</div></template>


