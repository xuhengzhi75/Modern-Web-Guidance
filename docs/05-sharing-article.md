# 让 AI 前端代码少走弯路：Modern Web Guidance 调研与落地

AI coding agent 写前端时有一个隐蔽问题：它经常不是不会写，而是太会写旧代码。

它会用一大段 JavaScript 做今天浏览器已经原生支持的交互；会用复杂依赖模拟 CSS 已经解决的布局；会把图片优化简化成“全部懒加载”；会在表单加载时就展示错误，破坏可访问性体验。这些问题不是模型笨，而是训练数据里历史包袱太多。

Chrome 团队推出的 Modern Web Guidance，正是为这个问题设计的。

## 它不是教程，而是给 Agent 用的专家检索层

Modern Web Guidance 的形态很简单：一个 Agent Skill 加一个 CLI。

当你要实现一个前端功能时，Agent 先搜索：

```bash
npx -y modern-web-guidance@latest search "optimize LCP image priority"
```

命中相关 guide id 后，再拉取完整指南：

```bash
npx -y modern-web-guidance@latest retrieve "optimize-image-priority"
```

这套方式的关键价值是按需。它不要求把所有 Web 平台知识长期塞进上下文，而是在 Agent 真要动手前，把最相关的专家材料放进去。

## 它覆盖什么

官方项目当前覆盖 128 个真实开发用例、102 个现代 Web 特性，包括：

- CSS 与布局；
- HTML 与 DOM；
- 客户端 JavaScript 和浏览器 API；
- 性能优化；
- 可访问性；
- 表单与原生 UI；
- Passkeys；
- 隐私与安全；
- 浏览器内置 AI；
- WebMCP；
- Chrome 扩展开发。

这不是“API 百科”，而是“开发任务百科”。例如它不会只告诉你有 Fetch Priority，而是告诉你 LCP 图片应该如何设置，哪些图片不应该和懒加载混用，哪些隐藏图片可以降优先级。

## 我们验证了两个典型场景

第一个场景是 LCP 图片优先级。搜索 “optimize LCP image priority” 后，CLI 第一命中 `optimize-image-priority`，并返回围绕 LCP、隐藏图片、普通折叠区图片的分层建议。这比一句“给图片加 lazy loading”可靠得多。

第二个场景是滑动导航抽屉。搜索 “build a swipeable navigation drawer with backdrop” 后，第一命中 `navigation-drawer`。它引导 Agent 使用 Popover、Scroll snap、scroll-driven animation、IntersectionObserver 和 `inert`，而不是手写一套复杂指针事件状态机。

这两个例子说明：Modern Web Guidance 的价值不是替你写代码，而是把 Agent 的默认路径从“历史惯性”拉回“现代平台能力”。

## 它和其他 Agent Skills 有什么不同

通用 Agent Skills 项目很多，例如 Anthropic Skills、Vercel Agent Skills、Addy Osmani 的工程 Skill、GitHub Awesome Copilot 等。它们有的生态大，有的工程方法强，有的和平台结合紧密。

Modern Web Guidance 的差异化在于垂直深度：它专注现代 Web 平台，并且由 Chrome、Edge 和 Web 开发社区共同支持。它不试图覆盖所有工程活动，而是回答一个具体问题：

> 当前这个前端功能，有没有更现代、更原生、更高性能、更可访问的浏览器平台做法？

## 风险也很明确

它仍是预览版本，内容会快速变化。搜索命中也不是绝对正确，Agent 仍需要判断指南是否真正适配当前需求。更重要的是，现代 API 不等于所有业务环境可用。企业项目常常有低版本 Safari、WebView、内嵌浏览器或特殊终端限制。

所以团队不能只说“使用 Modern Web Guidance”，还要写清楚浏览器支持策略。

## 团队怎么落地

我建议分三步：

第一步，试点。选性能、表单、动效三类前端任务，让工程师在开工前手动搜索一次。PR 里记录 query、guide id、是否采纳。

第二步，规范化。在 `AGENTS.md` 或 `CLAUDE.md` 加入规则：

```md
For HTML, CSS, and client-side JavaScript tasks, search Modern Web Guidance before implementation.
Production-critical flows prefer Baseline Widely Available features.
Baseline Newly Available features require feature detection and graceful fallback.
```

第三步，沉淀。把团队常用 guide id 做成内部清单，例如图片优先级、INP 优化、表单错误提示、导航抽屉、Passkeys 登录。对不适合团队目标浏览器的指南标注限制。

## 最终建议

Modern Web Guidance 值得前端团队引入，但不要把它当成自动正确的代码生成器。它更像一个前端专家提醒器：在 Agent 下笔之前，先提醒它看看现代 Web 平台现在能做什么。

用得越早，收益越大。等代码已经生成完再补救，它就只是 review 工具；在实现前进入上下文，它才是方向盘。
