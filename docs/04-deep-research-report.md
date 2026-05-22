# Modern Web Guidance 深度调研报告

调研日期：2026-05-22

## 一句话结论

Modern Web Guidance 是一个把“现代 Web 平台专家知识”打包给 AI coding agents 使用的 Skill/CLI。它最适合用在前端实现开始前，帮助 Agent 从旧式 JavaScript workaround 转向原生、性能更好、可访问性更可靠的现代浏览器能力。

## 解读框架：Why / What / How / Risk / Adoption

### Why：为什么需要它

大模型训练数据里包含大量旧代码。前端领域尤其明显：很多历史方案会用复杂 JavaScript 模拟今天浏览器已原生支持的能力。结果是 Agent 可能生成包体更大、可访问性更弱、性能更差、维护更重的代码。

Modern Web Guidance 的核心假设是：Agent 不是不知道所有 API，而是缺少“什么时候用、怎么组合、怎么回退”的密集专家上下文。

### What：它是什么

它包含两部分：

- 一个 Agent Skill：告诉 Agent 何时搜索、如何检索、如何解释浏览器支持和回退策略。
- 一个 CLI：通过 `search`、`retrieve`、`list` 把相关指南拉进上下文。

官方覆盖 128 个真实开发用例和 102 个现代 Web 特性，特性分布为：

- CSS & Layout：51 个；
- HTML & DOM：20 个；
- JavaScript & APIs：31 个。

### How：怎么工作

典型流程：

1. 用户要求实现一个前端功能，例如“优化 LCP 图片加载”。
2. Agent 先运行 `modern-web-guidance search`。
3. CLI 返回相关 guide id，例如 `optimize-image-priority`。
4. Agent 再运行 `retrieve` 拉取指南。
5. Agent 按指南生成实现，同时结合项目框架、浏览器支持策略和测试要求。

### Risk：主要风险

- 相关性风险：检索命中的指南可能接近但不完全对应需求。
- 兼容性风险：现代 API 不等于所有目标环境可用。
- 过度新潮风险：Agent 可能为了使用新 API 而忽略更简单的项目约束。
- 维护风险：preview 项目的 guide id、CLI 输出和内容可能变化。
- 组织风险：如果团队没有统一浏览器支持策略，review 时容易争论“能不能用”而不是“怎么验证”。

### Adoption：怎么落地

建议采用三层落地方式：

| 层级 | 做法 | 负责人 |
| --- | --- | --- |
| 个人试用 | 在前端任务开工前手动调用 `search` 和 `retrieve`。 | 前端工程师 |
| 项目规范 | 在 `AGENTS.md` / `CLAUDE.md` 写入浏览器支持策略和必须检索的场景。 | Tech Lead |
| 团队治理 | 把命中指南、采用原因、回退策略写进 PR 模板或 review checklist。 | 前端团队 |

## 典型使用案例

### 1. 图片性能与 LCP

问题：Agent 经常只会建议“懒加载图片”。

Modern Web Guidance 能把问题拆成 LCP 图片、初始隐藏图片、普通折叠区图片三类，避免错误地给 LCP 图片加 `loading="lazy"`，也避免滥用优先级。

### 2. 导航抽屉

问题：Agent 常生成复杂的 pointer event 和 transform 状态机。

Modern Web Guidance 的 `navigation-drawer` 指南会引导使用 Popover、Scroll snap、scroll-driven animation、IntersectionObserver、`inert` 等平台能力组合，交互更接近原生滑动体验。

### 3. 表单反馈

问题：很多表单默认加载就显示错误，屏幕阅读器和视觉体验不一致。

相关指南会强调只在用户交互后展示错误，把 `aria-invalid` 与 `:user-invalid` 等状态同步，减少过早打扰。

### 4. Passkeys

问题：通行密钥实现涉及注册、登录、条件创建、重新认证和账号管理，Agent 容易混淆流程。

该项目把 Passkeys 拆成多个真实任务，有利于 Agent 只拉取当前需要的流程，而不是生成一个含糊的 WebAuthn 大段代码。

### 5. Chrome 扩展

问题：Agent 生成的扩展常见“manifest 指向不存在图标”“side panel 无法打开”“service worker 状态丢失”“权限缺失”等问题。

`chrome-extensions` Skill 把这些易错点前置为规则，适合扩展项目的架构审查和发布前检查。

## 好评与差评归纳

### 好评

- 方向准确：解决 Agent 前端知识过时问题。
- 内容密度高：真实用例比抽象 API 列表更容易落地。
- 适合上下文工程：通过 CLI 按需拉取，不把全部知识常驻上下文。
- 有专家维护：Chrome、Edge 与 Web 社区参与，source 仓库反馈活跃。

### 差评

- 预览期不稳定：版本、指南 id、覆盖范围可能变化。
- 社区案例少：主仓库 star 数与通用 Skills 项目相比仍小。
- 命中后仍需判断：搜索相似度不是业务相关性的最终判断。
- 兼容策略不内置到团队：需要团队自己写明浏览器目标和回退规则。

## 团队内落地建议

### 第 1 周：试点

- 选择 3 类前端任务试用：性能、表单、动效/导航。
- 每个 PR 记录：检索 query、命中 guide id、采纳或不采纳原因。
- 不要求全员强制，只收集“是否减少返工”的证据。

### 第 2-3 周：规范化

- 在项目根目录增加 `AGENTS.md` 或 `CLAUDE.md`。
- 写入浏览器支持策略。
- 在 PR 模板中增加一行：是否使用 Modern Web Guidance，命中哪些 guide id。
- 对 LCP、INP、表单可访问性、扩展权限等高风险场景强制检查。

### 第 4 周：沉淀

- 收集团队常用 query 和 guide id。
- 建立内部“推荐指南清单”。
- 对不适合团队目标浏览器的指南标注限制。
- 把最终规则并入代码 review checklist。

## 推荐团队规则

```md
Frontend Agent Rule:
For HTML, CSS, and client-side JavaScript tasks, search Modern Web Guidance before implementation.
Record the selected guide id in the PR when the guidance changes the implementation.

Browser Support:
Production-critical flows prefer Baseline Widely Available features.
Baseline Newly Available features require feature detection and graceful fallback.
Experimental pages may opt into newer APIs when explicitly documented.
```

## 最终判断

Modern Web Guidance 值得前端团队引入，但应定位为“专家指南检索层”，不是“自动实现保证器”。它越早进入需求到代码的链路，价值越高；越晚作为 review 后补救，收益越低。

## 资料来源

- Chrome 官方文档：https://developer.chrome.com/docs/modern-web-guidance
- 官方快速开始：https://developer.chrome.com/docs/modern-web-guidance/get-started
- 官方 Skill 浏览页：https://developer.chrome.com/docs/modern-web-guidance/explore-skills
- 官方用例页：https://developer.chrome.com/docs/modern-web-guidance/use-cases
- GitHub 上游仓库：https://github.com/GoogleChrome/modern-web-guidance
- GitHub source/feedback 仓库：https://github.com/GoogleChrome/modern-web-guidance-src
