---
name: modern-web-guidance-zh
description: Modern Web Guidance 官方 Skill 的中文翻译与落地入口。当前端任务涉及 HTML、CSS、客户端 JavaScript、现代浏览器 API、性能、可访问性、安全、隐私、Passkeys、浏览器内置 AI 或 WebMCP 时使用。
---

# Modern Web Guidance 中文版

这是官方 `modern-web-guidance` Skill 的中文使用入口和落地说明，不是完整上游镜像。为了获得最新指南内容，应继续调用官方 npm 包。

## 它解决什么问题

编码 Agent 容易从训练数据里复用过时前端写法，例如为了实现原生平台已经支持的交互而引入大量 JavaScript、依赖库或自定义事件逻辑。Modern Web Guidance 的价值是把 Chrome/Web 平台团队整理的现代 API、可访问性、性能和降级策略，按“真实开发意图”检索出来，再塞回 Agent 的上下文。

## 推荐工作流

第一步，先搜索：

```sh
npx -y modern-web-guidance@latest search "<你要实现的功能>"
```

第二步，拉取命中的指南：

```sh
npx -y modern-web-guidance@latest retrieve "<guide-id>"
```

第三步，如结果不清晰，浏览全部指南：

```sh
npx -y modern-web-guidance@latest list
```

## Skill 包分类

| Skill 包 | 中文定位 | 触发场景 |
| --- | --- | --- |
| `modern-web-guidance` | 现代 Web 平台指导 | Web UI、HTML、CSS、客户端 JavaScript、性能、可访问性、安全、隐私、Passkeys、内置 AI、WebMCP。 |
| `chrome-extensions` | Chrome 扩展开发指导 | Chrome 扩展创建、调试、Manifest V3、扩展 API、Web Store 发布与审核。 |

## 指南分类

- 可访问性：语义 HTML、焦点管理、表单反馈、屏幕阅读器体验。
- 浏览器内置 AI：Prompt API、摘要、翻译、语言检测。
- CSS 基础能力：自定义高亮、现代样式架构。
- CSS 布局：容器查询、子网格、锚点定位、内在尺寸。
- 表单与原生 UI：自动填充、表单验证、原生控件样式化、选择器。
- HTML 与 DOM：Dialog、Popover、Details、资源优先级、焦点管理。
- Passkeys：注册、登录、条件创建、重新认证与管理。
- 性能优化：LCP、INP、任务调度、预加载、图片优先级、可见性优化。
- 隐私保护：数据最小化、第三方审计、隐私设计。
- 安全：安全默认值、权限策略和安全头思路。
- 用户体验：视图过渡、滚动动画、导航抽屉、主题、动效、排版。
- WebMCP：让网页表单和 JavaScript 工具更容易被 Agent 理解与调用。

## Agent 使用规则

在实现任何 Web 功能前，先按意图检索，再拉取指南，再结合项目的技术栈和浏览器支持策略落地。不要因为命中了指南就机械使用某个新特性；如果指南要求特性检测、渐进增强或回退方案，就必须把这些约束一并带入实现。

## 团队建议

把浏览器支持策略写进团队的 `AGENTS.md`、`CLAUDE.md` 或工程规范中。建议模板：

```md
Browser Support: 生产核心链路优先采用 Baseline Widely Available 特性；Baseline Newly Available 特性需要特性检测和轻量回退；实验页面可明确允许无回退探索。
```
