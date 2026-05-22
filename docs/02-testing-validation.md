# 测试验证与结论

测试日期：2026-05-22

## 测试目标

这个项目不是一个 Web 应用，而是一个调研与 Skill 落地包。因此测试分为两类：

1. 本仓库结构验证：确保中英 Skill、分类数据和报告文件完整。
2. 上游 CLI 验证：确保官方 `modern-web-guidance` 能按真实开发意图检索和拉取指南。

## 本仓库结构测试

命令：

```bash
npm test
```

验证内容：

- 必要文件存在。
- `data/skill-catalog.en.json` 和 `data/skill-catalog.zh.json` 可解析。
- 中英 Skill 包 id 一致。
- 中文 `modern-web-guidance` 至少包含完整分类结构。
- 文档文件非空。

预期结果：

```text
Structure verification passed.
```

## 官方 CLI 验证

### 用例 1：LCP 图片优先级

命令：

```bash
npx -y modern-web-guidance@latest search "optimize LCP image priority"
```

结果摘要：

- 第一命中：`optimize-image-priority`
- 类别：`performance`
- 涉及特性：Fetch priority
- 相似度：0.6844

继续拉取：

```bash
npx -y modern-web-guidance@latest retrieve "optimize-image-priority"
```

验证结论：CLI 能返回明确实现步骤、示例代码、强约束和回退策略。该指南明确区分 LCP 图片、初始隐藏图片、普通懒加载图片，能有效纠正 Agent 可能生成的笼统图片优化建议。

### 用例 2：滑动导航抽屉

命令：

```bash
npx -y modern-web-guidance@latest search "build a swipeable navigation drawer with backdrop"
```

结果摘要：

- 第一命中：`navigation-drawer`
- 类别：`user-experience`
- 涉及特性：`inert`、Intersection Observer、Popover、Scroll-driven animations、Scroll snap 等
- 相似度：0.6504

验证结论：检索结果能把“导航抽屉”映射到现代平台能力组合，而不是默认生成手写 pointer event + transform 方案。这正是 Modern Web Guidance 的核心价值。

### 用例 3：列表能力发现

命令：

```bash
npx -y modern-web-guidance@latest list
```

结果摘要：CLI 返回按 `id`、`category`、`description` 组织的指南列表，适合在搜索结果不明确时让 Agent 扩大检索范围。

## npm 与仓库状态

- npm 包：`modern-web-guidance`
- 当前验证版本：`0.0.169`
- 上游仓库：`GoogleChrome/modern-web-guidance`
- GitHub 状态：2026-05-22 查询时约 539 stars、13 forks，上游仍处于早期快速迭代阶段。

## 测试结论

Modern Web Guidance 的检索质量在两个典型场景中都能命中合理 guide id，并提供比通用模型回答更具体的现代 Web 约束。它适合作为“前端实现前的上下文检索层”，但不应被视为自动正确的代码生成器。团队使用时仍需要三道门槛：

- 明确浏览器支持策略。
- 对命中的指南做相关性判断。
- 用项目自身的单元测试、端到端测试、Lighthouse、axe 或人工可访问性检查补足验证。
