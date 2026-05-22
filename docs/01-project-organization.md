# 项目整理与分类

调研日期：2026-05-22

## 上游项目判断

Modern Web Guidance 是 Chrome/Web 平台团队面向 AI coding agents 发布的 Skill/CLI 项目。它的核心不是“人读教程”，而是“Agent 在实现前端功能前先检索专家指南，再按 guide id 拉取具体做法”。

上游当前有两个主要 Skill 包：

| Skill 包 | 英文原版位置 | 中文翻译版位置 | 定位 |
| --- | --- | --- | --- |
| `modern-web-guidance` | `source-skills/en/modern-web-guidance/SKILL.md` | `source-skills/zh/modern-web-guidance/SKILL.md` | 现代 Web 平台实践：HTML、CSS、前端 JS、性能、可访问性、安全、隐私、Passkeys、内置 AI、WebMCP。 |
| `chrome-extensions` | `source-skills/en/chrome-extensions/SKILL.md` | `source-skills/zh/chrome-extensions/SKILL.md` | Chrome 扩展开发：Manifest V3、扩展 API、Web Store 发布与审核。 |

## 分类体系

本项目将上游内容分成四层：

| 层级 | 内容 | 用途 |
| --- | --- | --- |
| Skill 包层 | `modern-web-guidance`、`chrome-extensions` | 决定 Agent 何时触发哪类能力。 |
| 指南分类层 | 可访问性、性能、表单、用户体验、Passkeys 等 | 让团队知道覆盖范围和使用边界。 |
| 用例层 | `optimize-image-priority`、`navigation-drawer` 等 guide id | Agent 实现功能时的最小检索单位。 |
| 团队策略层 | 浏览器支持、是否允许新特性、回退策略 | 避免“新 API 正确但不适合当前产品”的落地风险。 |

## 现代 Web 指南分类

| 类别 | 中文名 | 文件数量 | 典型问题 |
| --- | --- | ---: | --- |
| `accessibility` | 可访问性 | 2 | 表单错误提示、语义与焦点体验。 |
| `built-in-ai` | 浏览器内置 AI | 4 | 本地翻译、摘要、语言检测、Prompt API。 |
| `css` | CSS 基础能力 | 2 | 自定义高亮、现代 CSS 架构。 |
| `css-layout` | CSS 布局 | 1 | 容器查询、子网格、锚点定位、内在尺寸。 |
| `forms` | 表单与原生 UI | 15 | 自动填充、原生控件、验证时机、选择器。 |
| `html` | HTML 与 DOM | 1 | Dialog、Popover、Details、资源优先级。 |
| `passkeys` | 通行密钥 | 6 | 注册、登录、重新认证、账号管理。 |
| `performance` | 性能优化 | 22 | LCP、INP、图片优先级、任务调度、可见性。 |
| `privacy` | 隐私保护 | 1 | 数据最小化、第三方审计、隐私设计。 |
| `security` | 安全 | 1 | 安全默认值、权限策略与风险控制。 |
| `user-experience` | 用户体验 | 79 | 动效、滚动、主题、导航、排版、交互状态。 |
| `webmcp` | WebMCP | 3 | 让网页更容易被 Agent 理解和操作。 |

## 为什么不直接镜像全文

上游项目处于 preview release，npm 包和指南会快速更新。完整镜像容易过期，也会让团队误用旧内容。本仓库采用“中文索引 + 决策框架 + 官方 CLI 调用”的方式：中文材料解决理解和落地，具体实现仍从官方 `modern-web-guidance@latest` 获取。
